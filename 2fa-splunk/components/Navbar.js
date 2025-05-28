export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-zinc-900 shadow-md sticky top-0 z-10">
      <div className="text-2xl font-bold text-white tracking-wide">
        2FA Splunk Project
      </div>
      <div className="space-x-4">
        <button className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-semibold shadow-sm">
          Log In
        </button>
        <button className="px-5 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition font-semibold shadow-sm">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
