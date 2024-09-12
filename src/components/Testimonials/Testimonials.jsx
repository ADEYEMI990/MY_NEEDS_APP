import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Customer service was also excellent—fast and responsive. This product is worth every penny!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Folake Olushola",
    text: "I recently purchased this product and it has exceeded my expectations The quality is exceptional and it performs exactly as advertised The design is sleek and modern and it arrived on time",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "James Kennedy",
    text: "I’ve been using the product for the past month, and I’m thrilled with its performance. The build quality is top-notch, and it’s incredibly user-friendly",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Paul Bashorun",
    text: "The product is generally good, with some great features. The performance is solid, and it looks nice",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  return (
    <div>
      <div className= "container">
        {/* header section */}
        <div className= "text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className= "text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className= "text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className= "text-xs text-gray-400">
          Effective reviews help others make informed decisions and provide valuable feedback to manufacturers or sellers
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className= "my-6">
                <div
                  key={data.id}
                  className= "flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className= "mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className= "rounded-full w-20 h-20"
                    />
                  </div>
                  <div className= "flex flex-col items-center gap-4">
                    <div className= "space-y-3">
                      <p className= "text-xs text-gray-500">{data.text}</p>
                      <h1 className= "text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className= "text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );

};

export default Testimonials;
