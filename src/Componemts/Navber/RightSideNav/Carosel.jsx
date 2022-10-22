import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Carosel = () => {
  return (
    // <div className="">
    //   <div
    //     id="carouselExampleCaptions"
    //     className="carousel slide  absolute "
    //     data-bs-ride="carousel"
    //   >
    //     <div className="carousel-indicators absolute z-10  right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="0"
    //         className="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="1"
    //         aria-label="Slide 2"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="2"
    //         aria-label="Slide 3"
    //       ></button>
    //     </div>
    //     <div className="carousel-inner relative w-full overflow-hidden">
    //       <div className="carousel-item active relative float-left w-full">
    //         <img
    //           src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2F8b61194f-1e0d-47ee-b2a7-09d11f24a3b7%2F364169_01_02.jpg?rect=0%2C0%2C3000%2C1688&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.3"
    //           className="block w-full rounded"
    //           alt="..."
    //         />
    //       </div>
    //       <div className="carousel-item relative float-left w-full">
    //         <img
    //           src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2F9d25ef10-830e-46b9-b98f-b02d56d12e10%2F363101_01_02.jpg?rect=0%2C0%2C4795%2C2697&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.3"
    //           className="block w-full rounded"
    //           alt="..."
    //         />
    //       </div>
    //       <div className="carousel-item relative float-left w-full">
    //         <img
    //           src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2F31cb6c4d-2dc8-4dcf-a70e-a2006efb1c1a%2F92891131.webp?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.3"
    //           className="block w-full rounded"
    //           alt="..."
    //         />
    //       </div>
    //     </div>
    //     <button
    //       className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon inline-block bg-no-repeat"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide="next"
    //     >
    //       <span
    //         className="carousel-control-next-icon inline-block bg-no-repeat"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>

    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-[300px]   sticky overflow-hidden"
      >
        <SwiperSlide className="">
          <div>
            <img
              src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2F31cb6c4d-2dc8-4dcf-a70e-a2006efb1c1a%2F92891131.webp?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.3"
              className="block w-full rounded z-[-1]"
              alt="..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div>
            <img
              src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2F31cb6c4d-2dc8-4dcf-a70e-a2006efb1c1a%2F92891131.webp?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.3"
              className="block w-full rounded"
              alt="..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full ">
          <div>
            <img
              src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2F31cb6c4d-2dc8-4dcf-a70e-a2006efb1c1a%2F92891131.webp?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.3"
              className="block w-full rounded"
              alt="..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div>
            <img
              src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2F31cb6c4d-2dc8-4dcf-a70e-a2006efb1c1a%2F92891131.webp?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.3"
              className="block w-full rounded"
              alt="..."
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carosel;
