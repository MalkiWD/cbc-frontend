export default function ProductNotFound() {
  return (
    <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center bg-gray-100 text-center">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Product Not Found
        </h2>
  
        <button
          onClick={() => window.history.back()}
          className="bg-accent hover:bg-accent-dark text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
