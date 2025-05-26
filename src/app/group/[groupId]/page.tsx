type Params = { params: { groupId: string } };

export default function GroupPage({ params }: Params) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <h1 className="text-2xl font-semibold mb-2 text-gray-800">
        Group: {params.groupId}
      </h1>
      <p className="text-gray-600 mb-6">
        This is the group dashboard. Once everyone joins, matching can begin.
      </p>

      <div className="space-y-2 text-sm text-gray-500 text-center">
        <p>✔ You will be matched with someone once the group is full.</p>
        <p>✔ Only your assigned recipient will be shown to you.</p>
        <p>✔ You’ll be able to view their wishlist and send them secret messages.</p>
      </div>
    </main>
  );
}
