import axios from "axios";

interface BlogPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostPageProps {
  params: Promise<{
    postId: string[];
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { postId } = await params;
  
  // Get the first segment of the catch-all route
  const id = postId[0];
  
  if (!id) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600">Post Not Found</h1>
          <p className="text-gray-600">No post ID provided</p>
        </div>
      </div>
    );
  }

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post: BlogPost = response.data;

    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
              <h1 className="text-3xl font-bold">{post.title}</h1>
              <p className="text-sm opacity-75">Post #{post.id} by Author {post.userId}</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed">{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching post:', error);
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600">Error Loading Post</h1>
          <p className="text-gray-600">Could not fetch post with ID: {id}</p>
        </div>
      </div>
    );
  }
}
