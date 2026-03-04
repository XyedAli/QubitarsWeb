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
  };

  return (
    <section className={`mt-9`}>

        {/* Slick Slider */}
        <div className="">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="outline-none">
                <div className={`${styles.flexCenter} gap-14`}>
                  <div className={`${styles.flexCenter} w-12 h-12 rounded-full text-blue-600`}>
                    {service.icon}
                  </div>
                  <span className="text-[36px] text-blue text-uppercase font-black">
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