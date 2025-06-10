import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">4420 Courts</h3>
            <p className="text-gray-300 text-sm">
              Your ultimate guide to building the perfect backyard pickleball court. 
              Making court construction simple and fun for homeowners everywhere.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-green-400">Home</Link></li>
              <li><Link href="/planning-guide" className="text-gray-300 hover:text-green-400">Planning Guide</Link></li>
              <li><Link href="/surface-options" className="text-gray-300 hover:text-green-400">Surface Options</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/learn" className="text-gray-300 hover:text-green-400">Court Construction</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-green-400">Contractor Resources</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-green-400">About</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-gray-300 text-sm mb-2">
              Questions about your court project?
            </p>
            <p className="text-green-400 text-sm font-medium">
              info@4420courts.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 4420 Courts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}