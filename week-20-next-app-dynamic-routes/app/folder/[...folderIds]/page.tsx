import Link from "next/link";

interface FolderPageProps {
  params: Promise<{
    folderIds: string[];
  }>;
}

export default async function FolderPage({ params }: FolderPageProps) {
  const { folderIds } = await params;
  
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Folder Navigation</h1>
        
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            {folderIds.map((folder, index) => (
              <li key={index} className="flex items-center">
                <span className="mx-2">/</span>
                <span className={index === folderIds.length - 1 ? "font-semibold text-gray-900" : "hover:text-blue-600"}>
                  {folder}
                </span>
              </li>
            ))}
          </ol>
        </nav>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Current Path:</h2>
          <p className="text-gray-700 mb-4">/{folderIds.join('/')}</p>
          
          <div className="space-y-2">
            <p><strong>Folder segments:</strong> {folderIds.length}</p>
            <p><strong>Current folder:</strong> {folderIds[folderIds.length - 1] || 'root'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}