
const projects = [
  {
    name: 'Project 1',
    description: 'A beautiful court with a custom color scheme.',
    imageUrl: 'https://placehold.co/600x400',
  },
  {
    name: 'Project 2',
    description: 'A challenging build on a sloped backyard.',
    imageUrl: 'https://placehold.co/600x400',
  },
  {
    name: 'Project 3',
    description: 'A multi-court installation for a community center.',
    imageUrl: 'https://placehold.co/600x400',
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold font-heading leading-7 text-blue-600">Our Work</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Courts We&apos;ve Built
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We take pride in every court we build. Here are a few examples of our work.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={project.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold font-heading leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
