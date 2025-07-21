
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'The Ultimate Pickleball Court Crack Repair Test',
    href: '#',
    description:
      'We put the top 5 crack repair products to the test to see which one holds up to the rigors of the game. The results might surprise you.',
    imageUrl:
      'https://placehold.co/600x400',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    category: { title: 'Product Tests', href: '#' },
    author: {
      name: '4420 Labs',
      role: 'Head of R&D',
      href: '#',
      imageUrl:
        '/4420courtslogowtbg.png',
    },
  },
    {
    id: 2,
    title: 'Concrete PSI: Does it Really Matter for Pickleball?',
    href: '#',
    description:
      'We poured 3 different concrete slabs with different PSI ratings to see how it affects the bounce and playability of the court. Is higher PSI always better?',
    imageUrl:
      'https://placehold.co/600x400',
    date: 'Mar 10, 2024',
    datetime: '2024-03-10',
    category: { title: 'Construction', href: '#' },
    author: {
      name: '4420 Labs',
      role: 'Head of R&D',
      href: '#',
      imageUrl:
        '/4420courtslogowtbg.png',
    },
  },
    {
    id: 3,
    title: 'The Best Outdoor Speakers for Your Pickleball Court',
    href: '#',
    description:
      'We tested 10 different outdoor speaker systems to find the best one for your pickleball court. We looked at sound quality, durability, and ease of installation.',
    imageUrl:
      'https://placehold.co/600x400',
    date: 'Feb 12, 2024',
    datetime: '2024-02-12',
    category: { title: 'Accessories', href: '#' },
    author: {
      name: '4420 Labs',
      role: 'Head of R&D',
      href: '#',
      imageUrl:
        '/4420courtslogowtbg.png',
    },
  },
]

export default function LabsPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold font-heading tracking-tight text-gray-900 sm:text-4xl">4420 Labs</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            We test the best products and techniques so you can build a better court.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <Link
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold font-heading leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </Link>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
