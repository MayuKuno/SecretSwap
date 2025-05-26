export default function MyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">My Page</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Fill in your wishlist, preferences, and delivery info to help your gift sender.
      </p>

      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Wishlist link (Amazon, Rakuten, etc.)"
          className="w-full px-4 py-2 border rounded"
        />

        <textarea
          placeholder="Things I like (e.g. coffee, cats, yellow...)"
          className="w-full px-4 py-2 border rounded h-24"
        />

        <input
          type="text"
          placeholder="Delivery address (optional)"
          className="w-full px-4 py-2 border rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
          Save My Info
        </button>
      </div>
    </main>
  );
}
