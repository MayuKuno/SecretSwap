export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        🎁 Welcome to SecretSwap
      </h1>
      <p className="text-lg text-gray-600 max-w-md text-center mb-6">
        A simple, secret way to surprise your friends with thoughtful gifts — anytime of year.
      </p>
      <div className="flex space-x-4">
        <a
          href="/join"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Join or Create a Group
        </a>
        <a
          href="/mypage"
          className="px-6 py-2 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition"
        >
          My Page
        </a>
      </div> 
    </main>
  );
}
