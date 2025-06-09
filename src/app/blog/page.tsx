import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      title: "5 Things I Wish I Knew Before Building My Pickleball Court",
      excerpt: "Real lessons learned from a homeowner's court building journey, including unexpected costs and design decisions.",
      date: "Coming Soon",
      slug: "things-i-wish-i-knew",
      category: "Planning"
    },
    {
      title: "Concrete vs Asphalt: Which Surface is Right for You?",
      excerpt: "An in-depth comparison of the two most popular court surfaces, including long-term costs and performance.",
      date: "Coming Soon", 
      slug: "concrete-vs-asphalt",
      category: "Surfaces"
    },
    {
      title: "DIY Court Installation: What You Can (and Can't) Do Yourself",
      excerpt: "Breaking down which parts of court construction are DIY-friendly and which require professional help.",
      date: "Coming Soon",
      slug: "diy-court-installation",
      category: "Installation"
    },
    {
      title: "Budgeting for Your Backyard Court: Hidden Costs to Consider",
      excerpt: "Beyond the basic surface cost, here are the expenses many homeowners forget to factor into their budget.",
      date: "Coming Soon",
      slug: "budgeting-hidden-costs", 
      category: "Planning"
    },
    {
      title: "Pickleball Court Maintenance: Seasonal Care Guide",
      excerpt: "Keep your court in top condition year-round with these maintenance tips and schedules.",
      date: "Coming Soon",
      slug: "court-maintenance-guide",
      category: "Maintenance"
    },
    {
      title: "Small Yard Solutions: Making Pickleball Work in Limited Space",
      excerpt: "Creative approaches to fitting a court in smaller backyards, including modified dimensions and multi-use designs.",
      date: "Coming Soon",
      slug: "small-yard-solutions",
      category: "Planning"
    }
  ];

  const categories = ["All", "Planning", "Surfaces", "Installation", "Maintenance"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Court Building Blog
          </h1>
          <p className="text-xl text-blue-100">
            Real stories, practical tips, and expert advice for your court project.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === "All" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Coming Soon Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8 text-center">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Blog Coming Soon!</h2>
            <p className="text-yellow-700">
              We're working on creating valuable content based on real homeowner experiences. 
              Check back soon for practical tips and detailed guides.
            </p>
          </div>

          {/* Preview Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="text-sm text-gray-400">
                    Coming Soon
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Get Notified When We Launch
            </h3>
            <p className="text-gray-700 mb-6">
              Be the first to read our practical guides and real homeowner stories.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}