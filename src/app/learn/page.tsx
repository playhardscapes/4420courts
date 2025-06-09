import Link from "next/link";

export default function Learn() {
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
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Learn Pickleball
          </h1>
          <p className="text-xl text-blue-100">
            Master the fastest-growing sport in America with our comprehensive guides.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Quick Rules */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pickleball Basics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">The Game</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Played on a 20' x 44' court</li>
                  <li>• Net is 36" high at ends, 34" at center</li>
                  <li>• Uses a perforated plastic ball (wiffle ball)</li>
                  <li>• Paddles are larger than ping pong, smaller than tennis</li>
                  <li>• Can be played singles or doubles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Rules</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Serve underhand, diagonally across court</li>
                  <li>• Ball must bounce once on each side before volleying</li>
                  <li>• No volleying in the 7-foot "kitchen" zone</li>
                  <li>• Only serving team can score points</li>
                  <li>• Games typically played to 11, win by 2</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Pickleball */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy to Learn</h3>
              <p className="text-gray-600">Perfect for all ages and skill levels. Most people can start playing within minutes!</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Low Impact</h3>
              <p className="text-gray-600">Easier on joints than tennis, great cardio workout without excessive strain.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Paced</h3>
              <p className="text-gray-600">Quick rallies and exciting gameplay keep you engaged and coming back for more.</p>
            </div>
          </div>

          {/* Equipment Guide */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started: Equipment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Essential Gear</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Paddle</p>
                      <p className="text-sm text-gray-600">$30-$200+. Start with a mid-weight paddle around $60-80.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Balls</p>
                      <p className="text-sm text-gray-600">Indoor vs outdoor balls. Outdoor balls are heavier and more durable.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Court Shoes</p>
                      <p className="text-sm text-gray-600">Non-marking soles, good lateral support. Tennis or court shoes work well.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Paddle Selection Tips</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-medium text-sm">Weight: 7.5-8.5 oz</p>
                    <p className="text-xs text-gray-600">Heavier = more power, Lighter = better control</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-medium text-sm">Grip Size: 4-4.5"</p>
                    <p className="text-xs text-gray-600">Should feel comfortable in your hand</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-medium text-sm">Material: Composite or Graphite</p>
                    <p className="text-xs text-gray-600">Avoid wood paddles for serious play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy Tips */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Beginner Strategy Tips</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Court Positioning</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Stay behind the kitchen line until the ball bounces</li>
                  <li>• Move forward together as a team in doubles</li>
                  <li>• Keep your paddle up and ready</li>
                  <li>• Focus on placement over power</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Shot Selection</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Dink shots keep the ball low and controlled</li>
                  <li>• Third shot drop is crucial for getting to net</li>
                  <li>• Avoid hitting hard shots from the kitchen</li>
                  <li>• Aim for opponents' feet when they're at net</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Build Your Court?</h3>
              <p className="text-gray-700 mb-6">
                Now that you know the game, let's help you create the perfect place to play!
              </p>
              <Link 
                href="/planning-guide"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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