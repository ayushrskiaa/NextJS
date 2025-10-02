import axios from "axios";

interface BlogPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface BlogPageProps {
  params: {
    postId: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const post: BlogPost = response.data;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Blog Post Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                Post #{post.id}
              </span>
              <span className="text-sm opacity-75">
                Author ID: {post.userId}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {post.body}
              </p>
            </div>

            {/* Footer Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {post.userId}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Author #{post.userId}</p>
                    <p className="text-sm text-gray-500">Blog contributor</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
