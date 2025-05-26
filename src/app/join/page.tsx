export default function JoinPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">Join or Create a Group</h1>
      <p className="text-gray-600 text-center max-w-md mb-6">
        Enter your nickname and either join an existing group with a code, or create a new one.
      </p>

      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your nickname"
          className="w-full px-4 py-2 border rounded"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Group code"
            className="flex-1 px-4 py-2 border rounded"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Join Group
          </button>
        </div>

        <div className="text-center text-sm text-gray-400">or</div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="New group name"
            className="flex-1 px-4 py-2 border rounded"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Create Group
          </button>
        </div>
      </div>
    </main>
  );
}
