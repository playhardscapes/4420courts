import Link from "next/link";

export default function SurfaceOptions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-green-600 hover:text-green-700 font-semibold">
            ← Back to 4420 Courts
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Court Surface Options
          </h1>
          <p className="text-xl text-orange-100">
            Compare materials, costs, and performance to find your perfect playing surface.
          </p>
        </div>
      </section>

      {/* Surface Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Quick Comparison Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="p-6 bg-gray-50 border-b">
              <h2 className="text-2xl font-bold font-heading text-gray-900">Surface Comparison</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-4 font-semibold">Surface Type</th>
                    <th className="text-left p-4 font-semibold">Cost Range</th>
                    <th className="text-left p-4 font-semibold">Lifespan</th>
                    <th className="text-left p-4 font-semibold">Maintenance</th>
                    <th className="text-left p-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium text-green-600">Concrete</td>
                    <td className="p-4">$8,000-$15,000</td>
                    <td className="p-4">25+ years</td>
                    <td className="p-4">Low</td>
                    <td className="p-4">Serious players, longevity</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium text-blue-600">Asphalt</td>
                    <td className="p-4">$5,000-$10,000</td>
                    <td className="p-4">15-20 years</td>
                    <td className="p-4">Medium</td>
                    <td className="p-4">Budget-conscious, good performance</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium text-purple-600">Modular Tiles</td>
                    <td className="p-4">$3,000-$8,000</td>
                    <td className="p-4">10-15 years</td>
                    <td className="p-4">Low</td>
                    <td className="p-4">DIY installation, quick setup</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium text-orange-600">Sport Court</td>
                    <td className="p-4">$6,000-$12,000</td>
                    <td className="p-4">15-20 years</td>
                    <td className="p-4">Low</td>
                    <td className="p-4">Multi-sport use, joint-friendly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Surface Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Concrete */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold font-heading text-green-600 mb-4">Concrete Courts</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold font-heading text-gray-900 mb-2">Pros:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Most durable surface option</li>
                    <li>• Professional tournament feel</li>
                    <li>• Consistent ball bounce</li>
                    <li>• Can handle all weather conditions</li>
                    <li>• Lowest long-term maintenance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold font-heading text-gray-900 mb-2">Cons:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Highest upfront cost</li>
                    <li>• Requires professional installation</li>
                    <li>• Hard on joints</li>
                    <li>• Permanent installation</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <p className="text-sm text-green-800">
                    <strong>Best for:</strong> Serious players wanting a premium, long-lasting court.
                  </p>
                </div>
              </div>
            </div>

            {/* Asphalt */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold font-heading text-blue-600 mb-4">Asphalt Courts</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold font-heading text-gray-900 mb-2">Pros:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Good balance of cost and performance</li>
                    <li>• Faster installation than concrete</li>
                    <li>• Excellent ball bounce</li>
                    <li>• Can be resurfaced when needed</li>
                    <li>• Works well in most climates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold font-heading text-gray-900 mb-2">Cons:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Shorter lifespan than concrete</li>
                    <li>• Can crack in extreme temperatures</li>
                    <li>• Needs periodic seal coating</li>
                    <li>• Still requires professional install</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>Best for:</strong> Players wanting professional quality at a lower cost.
                  </p>
                </div>
              </div>
            </div>

            {/* Modular Tiles */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold font-heading text-purple-600 mb-4">Modular Tile Systems</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold font-heading text-gray-900 mb-2">Pros:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• DIY-friendly installation</li>
                    <li>• No excavation required</li>
                    <li>• Softer on joints</li>
                    <li>• Portable/removable</li>
                    <li>• Quick installation (1-2 days)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold font-heading text-gray-900 mb-2">Cons:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Shorter lifespan</li>
                    <li>• Ball bounce may vary</li>
                    <li>• Gaps can collect debris</li>
                    <li>• Not suitable for all climates</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded">
                  <p className="text-sm text-purple-800">
                    <strong>Best for:</strong> DIY enthusiasts and temporary installations.
                  </p>
                </div>
              </div>
            </div>

            {/* Sport Court */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold font-heading text-orange-600 mb-4">Sport Court Systems</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold font-heading text-gray-900 mb-2">Pros:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Multi-sport versatility</li>
                    <li>• Shock absorption (joint-friendly)</li>
                    <li>• Professional appearance</li>
                    <li>• Good traction and safety</li>
                    <li>• Many color options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold font-heading text-gray-900 mb-2">Cons:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Higher cost than basic options</li>
                    <li>• Requires specific base preparation</li>
                    <li>• Ball bounce different from hard courts</li>
                    <li>• May need professional installation</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded">
                  <p className="text-sm text-orange-800">
                    <strong>Best for:</strong> Multi-sport families and joint-conscious players.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Tips */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">Installation Considerations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-4">Site Preparation</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Proper drainage is crucial for all surfaces</li>
                  <li>• Level base prevents water pooling</li>
                  <li>• Soil compaction affects long-term stability</li>
                  <li>• Consider future access for maintenance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-4">Professional vs. DIY</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Concrete/asphalt: Always hire professionals</li>
                  <li>• Modular tiles: Good DIY option</li>
                  <li>• Sport court: Depends on system type</li>
                  <li>• Get multiple quotes before deciding</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-orange-50 rounded-lg p-8">
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Ready to Choose Your Surface?</h3>
              <p className="text-gray-700 mb-6">
                Use our planning guide to start mapping out your perfect court project.
              </p>
              <Link 
                href="/planning-guide"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Start Planning Your Court
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}