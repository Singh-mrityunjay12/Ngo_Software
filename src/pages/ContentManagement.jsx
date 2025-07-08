 import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import DashboardLayout from '../components/DashboardLayout';

const ContentManagement = () => {
  useEffect(() => {
    // Event Swiper
    new Swiper('.eventSwiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.event-next',
        prevEl: '.event-prev',
      },
    });

    // Campaign Swiper
    new Swiper('.mySwiper', {
      slidesPerView: 1.15,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet !mb-4',
      },
    });
  }, []);

  return (
     <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Content Management
      </h1>

      {/* Event Slider Section */}
      <section className="bg-[#f6f7fb] mb-6 md:px-0">
        <div className="w-full">
          <div className="swiper eventSwiper">
            <div className="swiper-wrapper">
              {/* SLIDE 1 */}
              <div className="swiper-slide">
                <div className="bg-[#0f1b50] rounded-2xl text-white flex flex-col md:flex-row items-center gap-8 md:gap-16 p-4 md:p-8 min-h-[420px] w-full">
                  <div className="flex-1">
                    <p className="text-yellow-400 text-sm font-semibold mb-1">DEC TO MARCH, 2024</p>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                      INTENSIVE CARE FOR <br />FEMALE HEALTH CAMPS
                    </h2>
                    <p className="text-yellow-400 font-semibold mb-2">SUPPORTED BY GAIL (INDIA) LIMITED</p>
                    <p className="text-sm text-gray-300 mb-6 max-w-xl">
                      Pyare Foundation successfully organized a series of “Intensive Care for Female Health Camps” from December 2023 to March 2024.
                    </p>
                    <button className="bg-[#ff6c2f] text-white px-7 py-2.5 rounded-full text-sm font-semibold mb-6">LEARN MORE</button>
                    <div className="flex gap-3">
                      <button className="event-prev w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-[#ff6c2f] transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button className="event-next w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-[#ff6c2f] transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="relative w-full max-w-[360px]">
                    <div className="rounded-full overflow-hidden border-4 border-white w-[230px] h-[230px] md:w-[270px] md:h-[270px] relative z-10 mx-auto">
                      <img src="/images/events/event (1).png" alt="Event 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-4 -right-10 rounded-full overflow-hidden border-4 border-white w-[90px] h-[90px] md:w-[110px] md:h-[110px] z-20 bg-white">
                      <img src="/images/events/event (2).png" alt="Event 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-8 -right-8 rounded-full overflow-hidden border-4 border-white w-[70px] h-[70px] md:w-[90px] md:h-[90px] z-20 bg-white">
                      <img src="/images/events/event (3).png" alt="Event 3" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional slides here... */}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white mb-6 rounded-2xl">
        <div className="w-full px-4 md:px-6 lg:px-8 flex flex-col lg:grid lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4 pt-4 pb-4 w-full mb-8 lg:mb-0">
            <div className="col-span-1">
              <img src="/images/organisation/cms-img3.jpg" alt="Office" className="rounded-lg object-cover w-full aspect-[4/3]" />
            </div>
            <div className="col-span-1">
              <img src="/images/organisation/cms-img2.jpg" alt="Office" className="rounded-lg object-cover w-full aspect-[4/3]" />
            </div>
            <div className="col-span-2">
              <img src="/images/organisation/cms-img1.jpg" alt="Office" className="rounded-lg object-cover w-full aspect-[4/3]" />
            </div>
          </div>
          <div className="pt-4 pb-4">
            <h2 className="text-black text-2xl font-bold mb-3">ABOUT US</h2>
            <p className="text-[#232323] text-base mb-6">
              Pyare Foundation is a multi dimensional group...
            </p>
            <h2 className="text-black text-2xl font-bold mb-3">VISION</h2>
            <p className="text-[#232323] text-base">
              Pyare foundation will support the system of care cure and heal...
            </p>
          </div>
        </div>
      </section>

      {/* Blogs Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Blogs</h1>
      <div className="bg-white rounded-xl shadow-sm px-6 py-4 flex items-center justify-between mb-6">
        <span className="text-gray-800 font-medium">Hello, Admin</span>
        <button className="bg-[#003f3f] text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#025353] transition">
          + NEW POST
        </button>
      </div>

      {/* Campaign section (use similar JSX mapping to loop over cards) */}
      <section className="mb-10">
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="/images/organisation/campaignImg.png" alt="Campaign" className="w-full h-40 object-cover rounded-t-xl" />
              <div className="p-4">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                  <span>May 1 – June 30, 2025</span>
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">Completed</span>
                </div>
                <h3 className="text-base font-semibold text-gray-800">Health Awareness</h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  The Health awareness campaign focuses on preventive healthcare...
                </p>
                <div className="flex justify-between items-center mt-4 text-sm font-medium text-gray-700">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Raised</p>
                    <p>Rs.10,000</p>
                  </div>
                  <p className="text-sm text-gray-400">VS</p>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Goal</p>
                    <p>Rs.12,000</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-[#003f3f] text-white py-2 rounded-md text-sm font-medium hover:bg-[#005050]">
                    ✏️ EDIT
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
                    🗑️ DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <div className="swiper mySwiper py-4">
            <div className="swiper-wrapper">
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="swiper-slide">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <img src="/images/organisation/campaignImg.png" alt="Campaign" className="w-full h-40 object-cover rounded-t-xl" />
                    <div className="p-4">
                      {/* same content as above */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination mt-8"></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 bg-[#f6f7fb] pt-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-0 font-[Poppins,sans-serif]">Testimonials</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-[#003f3f] text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#025353] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l3.536 3.536a2 2 0 01-2.828 2.828L15 11m-6 6v2h2l7.586-7.586a2 2 0 00-2.828-2.828L9 15z" />
            </svg>
            EDIT
          </button>
          <button className="flex items-center gap-2 bg-[#003f3f] text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#025353] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12zM19 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2m5 4v6m4-6v6" />
            </svg>
            DELETE
          </button>
          <button className="flex items-center gap-2 bg-[#003f3f] text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#025353] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 4v16m8-8H4" />
            </svg>
            + ADD NEW
          </button>
        </div>
      </div>
     </DashboardLayout>
  );
};

export default ContentManagement;
