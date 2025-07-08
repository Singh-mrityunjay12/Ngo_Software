import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import DashboardLayout from '../components/DashboardLayout';

export default function CampaignsPage() {
  useEffect(() => {
    // Swiper is handled via React component, so no JS init needed
  }, []);

  const campaignCard = (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src="/images/organisation/campaignImg.png" alt="Campaign" className="w-full h-40 object-cover rounded-t-xl" />
      <div className="p-4">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
          <span>May 1 – June 30, 2025</span>
          <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">Completed</span>
        </div>
        <h3 className="text-base font-semibold text-gray-800">Health Awareness</h3>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
          The Health awareness campaign focuses on spreading awareness about preventive healthcare, healthy lifestyle habits, and access to essential medical services.
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
          <button className="flex-1 bg-[#003f3f] text-white py-2 rounded-md text-sm font-medium hover:bg-[#005050]">✏️ EDIT</button>
          <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-md text-sm font-medium hover:bg-gray-200">🗑️ DELETE</button>
        </div>
      </div>
    </div>
  );

  return ( 
    <DashboardLayout> 
       <h1 className="text-2xl font-bold text-gray-800 mb-6">Campaigns</h1>

      <section className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">List Of Campaign</h2>
          <button className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded-md font-medium text-gray-700 shadow-sm">
            Create New +
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array(6).fill(campaignCard)}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1.15}
            spaceBetween={16}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper py-4"
          >
            {Array(6).fill(0).map((_, index) => (
              <SwiperSlide key={index}>{campaignCard}</SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-8"></div>
        </div>
      </section>

      {/* Campaign Form */}
      <section className="bg-white rounded-xl shadow-md p-6 sm:p-8 max-w-6xl mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Campaign Form</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Title:</label>
            <input type="text" placeholder="Enter campaign title" className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#003f3f]" />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Image Upload:</label>
            <input type="file" className="w-full px-4 py-2 border rounded-md text-sm text-gray-500 file:text-gray-700 file:bg-gray-100 file:border-none" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description:</label>
            <textarea rows={3} placeholder="Enter campaign description" className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#003f3f]" />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Target Amount (Rs):</label>
            <input type="number" placeholder="Enter amount" className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#003f3f]" />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration:</label>
            <input type="date" className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#003f3f]" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">SEO Fields:</label>
            <input type="text" placeholder="Enter SEO keywords" className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#003f3f]" />
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-[#003f3f] hover:bg-[#005050] text-white py-3 rounded-md text-sm font-medium">
              Submit Campaign
            </button>
          </div>
        </form>
      </section>
  </DashboardLayout>
  );
}
