
import { SparklesIcon } from '@heroicons/react/24/solid';

export default function FranchisePage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold font-heading leading-7 text-blue-600">Franchise Opportunities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Own a 4420 Courts Business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We&apos;ve developed a unique, high-margin business model that allows a single person to deliver premium pickleball courts. Our franchise opportunity provides you with the training, tools, and support to become a successful owner-operator.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                The Model: Expert Project Manager
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our model is built around a single, highly-trained franchisee who acts as the on-site expert and project manager. You won&apos;t be pouring concrete—you&apos;ll be managing the process to ensure it&apos;s done to our exacting standards. This keeps overhead low and quality high.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                What We Provide
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We provide a complete &quot;business-in-a-box,&quot; including marketing materials, lead generation support, a deep network of suppliers, and comprehensive training on our proprietary construction standards.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                The Ideal Candidate
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We are looking for motivated individuals with strong project management skills and a passion for quality. No prior construction experience is necessary; our training program will make you a pickleball court expert.
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-16 text-center">
            <a href="#" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Request More Information</a>
        </div>
      </div>
    </div>
  );
}
