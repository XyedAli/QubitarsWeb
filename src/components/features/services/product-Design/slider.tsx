"use client";

import { LuSparkle } from "react-icons/lu";
import { styles } from "@/styles/style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductDesignSlider() {
  const services = [
    {
      icon: <LuSparkle className="w-6 h-6" />,
      title: "INTERACTION DESIGN"
    },
    {
      icon: <LuSparkle className="w-6 h-6" />,
      title: "DESIGN SYSTEMS"
    },
    {
      icon: <LuSparkle className="w-6 h-6" />,
      title: "PRODUCT DISCOVERY"
    },
    {
      icon: <LuSparkle className="w-6 h-6" />,
      title: "USER RESEARCH"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: '260px',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerPadding: '130px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '70px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '10px',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
        }
      }
    ]
  };

  return (
    <section className={`mt-9`}>
      {/* Slick Slider */}
      <div className="">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="outline-none">
              <div className={`${styles.flexCenter} gap-5 md:gap-7 lg:gap-10 xl:gap-14`}>
                <div className={`${styles.flexCenter} w-12 h-12 rounded-full text-blue-600`}>
                  {service.icon}
                </div>
                <span className={`${styles.h3} text-blue text-uppercase font-black`}>
                  {service.title}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}