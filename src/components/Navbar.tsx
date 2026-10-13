import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Store Name */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ShopKart
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-gray-700 hover:text-blue-600"
          >
            Products
          </Link>

          <Link
            href="/categories"
            className="text-gray-700 hover:text-blue-600"
          >
            Categories
          </Link>

          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>

          <Link
            href="/terms"
            className="text-gray-700 hover:text-blue-600"
          >
            terms
          </Link>
        </div>
      </div>
    </nav>
  );
}