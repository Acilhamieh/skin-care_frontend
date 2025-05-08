import Header from '@/components/Header';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="font-['Istok_Web']">
        {/* Hero Section */}
<section className="bg-white text-black py-16 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Left Section */}
    <div className="flex flex-col justify-center">
      <h1 className="text-5xl md:text-6xl font-bold font-['Instrument_Sans'] mb-6 leading-tight">
        <span className="block">Your Skin</span>
        <span className="block">Deserves The</span>
        <span className="relative inline-block">
          Best Care
          <span className="absolute inset-x-0 bottom-0 h-3 bg-[#FFC8EF] -z-10 rounded-full"></span>
        </span>
      </h1>
      <p className="text-lg mb-8 text-gray-600 font-light">
        Sed ut perspiciatis unde omnis<br />
        iste natus error sit voluptatem
      </p>
      <button className="bg-[#FFC8EF] text-black px-8 py-3 rounded-full hover:scale-105 transform transition w-fit font-medium">
        Book now !
      </button>
    </div>

    {/* Right Section - You can keep your image here */}
    <div className="flex justify-center">
      <img
        src="https://i.ibb.co/Wv2Dd0rY/skin-space.png"
        alt="Skin Care"
        className="rounded-[20px] w-full max-w-sm object-contain"
      />
    </div>
  </div>
</section>



        {/* Services Section */}
        <section className="bg-[#FFC8EF] py-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white shadow rounded p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Facial</h3>
            </div>
            <div className="bg-white shadow rounded p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Makeup</h3>
            </div>
            <div className="bg-white shadow rounded p-6 text-center">
              <h3 className="text-xxl font-semibold  mb-2">Lazer</h3>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
