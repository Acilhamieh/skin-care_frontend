import Header from '@/components/Header';
import Footer from '@/components/Footer';
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


{/*services*/}
<section className="bg-[#FFC8EF] py-16 px-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <Link href="/services/facial">
      <div
        className="relative bg-cover bg-center rounded-[20px] shadow cursor-pointer w-60 h-52 mx-auto flex items-end justify-center p-4"
        style={{ backgroundImage: 'url(https://i.ibb.co/3yczfjRn/treatment.png)' }}
      >
        <h3 className="text-white text-2xl font-bold font-[Inika] drop-shadow-lg mb-2">
          Facial
        </h3>
      </div>
    </Link>

    <Link href="/services/makeup">
      <div
        className="relative bg-cover bg-center rounded-[20px] shadow cursor-pointer w-60 h-52 mx-auto flex items-end justify-center p-4"
        style={{ backgroundImage: 'url(https://i.ibb.co/y2xFX3T/makeup-photo.png)' }}
      >
        <h3 className="text-white text-2xl font-bold font-[Inika] drop-shadow-lg mb-2">
          Makeup
        </h3>
      </div>
    </Link>

    <Link href="/services/lazer">
      <div
        className="relative bg-cover bg-center rounded-[20px] shadow cursor-pointer w-60 h-52 mx-auto flex items-end justify-center p-4"
        style={{ backgroundImage: 'url(https://i.ibb.co/YqLVwDn/Whats-App-Image-2025-04-09-at-13-45-01-79bce45b.png)' }}
      >
        <h3 className="text-white text-2xl font-bold font-[Inika] drop-shadow-lg mb-2">
          Lazer
        </h3>
      </div>
    </Link>
  </div>
</section>


    {/* about section  */}
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto p-6">
  <div className="relative">
    <div className="bg-[#FFC8EF] rounded-[20px] w-60 h-72 md:w-72 md:h-80 absolute top-0 left-0"></div>
    <img
      src="https://i.ibb.co/4R385fzd/rawan-photo-removebg-preview-1.png"
      alt="Rawan"
      className="relative z-10 w-60 h-72 md:w-72 md:h-80 object-cover"
    />
  </div>
  <div className="max-w-xl">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Hello,<br />
      I’m <span className="text-[#FFC8EF]">Rawan</span>
    </h2>
    <p className="text-lg leading-relaxed">
      I’m a UK and Swiss-certified esthetician and the proud founder of Skin Care by Rawan. 
      With years of experience and a deep passion for skincare, I offer expert solutions tailored 
      to every skin type—helping you achieve healthy, radiant skin through personalized and trusted techniques.
    </p>
  </div>
</section>

      <Footer/>
      </main>
    </>
  );
}
