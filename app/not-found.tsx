import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafaf9] px-6">
      <div className="text-center">
        <h1 className="text-6xl font-serif mb-4">404</h1>
        <p className="text-lg text-gray-500 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
