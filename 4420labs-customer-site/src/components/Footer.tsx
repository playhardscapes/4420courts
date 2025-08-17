import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading font-bold text-primary-400 mb-4">4420 Labs</h3>
            <p className="text-gray-300 text-sm">
              Advancing the science of court construction through innovative research, 
              materials testing, and technology development for the future of athletic surfaces.
            </p>
          </div>

          {/* Research Areas */}
          <div>
            <h4 className="font-semibold mb-4">Research Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/research/materials" className="text-gray-300 hover:text-primary-400">Materials Science</Link></li>
              <li><Link href="/research/surface-technology" className="text-gray-300 hover:text-primary-400">Surface Technology</Link></li>
              <li><Link href="/research/sustainability" className="text-gray-300 hover:text-primary-400">Sustainability</Link></li>
              <li><Link href="/research/performance" className="text-gray-300 hover:text-primary-400">Performance Analytics</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/publications" className="text-gray-300 hover:text-primary-400">Publications</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-primary-400">Active Projects</Link></li>
              <li><Link href="/partnerships" className="text-gray-300 hover:text-primary-400">Industry Partners</Link></li>
              <li><Link href="/portal" className="text-gray-300 hover:text-primary-400">Research Portal</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-gray-300 text-sm mb-2">
              Research collaboration inquiries:
            </p>
            <p className="text-primary-400 text-sm font-medium mb-4">
              research@4420labs.com
            </p>
            <div className="text-gray-300 text-sm">
              <p>Related Sites:</p>
              <a href="https://4420courts.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">4420 Courts</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 4420 Labs. All rights reserved. | Advanced Court Construction Research</p>
        </div>
      </div>
    </footer>
  );
}