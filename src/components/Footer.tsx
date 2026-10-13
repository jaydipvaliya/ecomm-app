export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Store Name */}
          <div>
            <h2 className="text-2xl font-bold">ShopKart</h2>
            <p className="text-gray-400 mt-2">
              Your one-stop destination for quality products at great prices.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Important Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="/products" className="hover:text-white">Products</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Customer Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-white">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} ShopKart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}