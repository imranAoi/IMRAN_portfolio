import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import proCoder from '../assets/images/ProCodrr.webp';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Slider() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto pb-12">
        <h2 className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
          What my clients are saying?
        </h2>
        <div className="swiper mySwiper !py-14 flex justify-center">
          <div className="swiper-wrapper items-center">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper-slide px-4">
                  <div className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab mx-auto my-20">
                    <img
                      className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px]  drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                      src={proCoder}
                      alt="testimonial 3"
                    />
                    <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                      <p className="text-sm md:text-base mb-2">
                        “I worked with Anurag to make my website. I am speechless by
                      </p>
                      <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                        Srihari Kestur
                      </h2>
                      <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                        Founder Harigurus
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide px-4">
                  <div className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab mx-auto my-20">
                    <img
                      className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                      src={proCoder}
                      alt="testimonial 3"
                    />
                    <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                      <p className="text-sm md:text-base mb-2">
                        “Anurag was a wonderful developer to work with! He anticipated
                      </p>
                      <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                        Kira Bragg
                      </h2>
                      <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                        English Mentor
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide px-4">
                  <div className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_10px_rgba(59,130,246,0.6)] cursor-grab mx-auto my-20">
                    <img
                      className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px]  drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                      src={proCoder}
                      alt="testimonial 3"
                    />
                    <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                      <p className="text-sm md:text-base mb-2">
                        “Anurag is a talented, committed individual who will l
                      </p>
                      <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                        Saatvik Nagpal
                      </h2>
                      <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                        Founder, EazyGrad
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
}

export default Slider;