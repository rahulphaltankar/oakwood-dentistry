import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
              OAKWOOD<span className="text-slate-900 font-light">DENTAL</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
