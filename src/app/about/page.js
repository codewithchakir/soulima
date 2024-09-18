'use client'

import Image from 'next/image';
import about from '@/assets/images/about.jpg';

export default function AboutUs() {
  return (
    <section className="py-24 relative text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="container max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold leading-normal text-center lg:text-left">
                Your Ultimate Movie Discovery and Tracking Hub
              </h2>
              <p className="text-base font-normal leading-relaxed text-center lg:text-left text-gray-500">
                We created Soulima to help movie lovers find, track, and explore the world of films effortlessly. Discover new releases, browse through classics, and keep up with your favorite genres. From personalized watchlists to trending films, Soulima brings it all together for you in one place.
              </p>
            </div>
            <button className="w-full sm:w-fit px-3.5 py-2 bg-red-500 hover:bg-white text-white hover:text-red-500 text-sm font-medium rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700">
              Start Exploring
            </button>
          </div>
          <div className="lg:mx-0 mx-auto h-full rounded-3xl">
            <Image
              className="rounded-3xl object-cover"
              src={about}
              alt="About Us image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
