export default function Navbar() {
  return (
    <nav className="bg-violet-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Blog Dashboard</h1>
        <div className="flex gap-6 text-lg">
          <button className="hover:underline px-2 py-1">Home</button>
          <button className="hover:underline px-2 py-1">About</button>
          <button className="hover:underline px-2 py-1">Contact</button>
        </div>
      </div>
    </nav>
  );
}

