export default async function BlogPost({ params }:any) {
    const postId = (await params).postId;
    return (
        <div>
            <h1>Blog Post {JSON.stringify(postId)}</h1>
        </div>
    );
}
