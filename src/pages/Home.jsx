import "../index.css";
import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";
import { ScrollTop } from "primereact/scrolltop";
import { BsEmojiSmile } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { BsAward } from "react-icons/bs";
import CountUp from "react-countup";
import carousel1 from "../images/triani-image-1.jpg";
import carousel2 from "../images/new-2-01.jpg";
import carousel3 from "../images/new3.jpg";
import carousel4 from "../images/Untitled design.jpg";

import { AntDesignOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Space } from "antd";
import { createStyles } from "antd-style";
import MyCarousel from "./Other";
import { Link } from "react-router-dom";

import trinai3 from "../images/trinai-3.png";
import trinai4 from "../images/trinai-4.png";
import nvr from "../images/nvr.png";
import gpu from "../images/gpu.png";
import whoweareimage from "../images/whoweareimage.jpeg";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const Home = () => {
  const { styles } = useStyle();
  const heroRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const whatWeOffer = [
    {
      title: "Industrial-Grade CCTV & Surveillance",
      description:
        "High-performance and durable security cameras engineered for demanding industrial environments.",
    },
    {
      title: "AI-Powered Video Analytics",
      description:
        "Advanced capabilities including facial recognition, license plate detection, motion tracking, demographic insights, and crowd surveillance.",
    },
    {
      title: "Customized Industry Solutions",
      description:
        "Tailored surveillance systems for manufacturing, transport & logistics, public sector, education, hospitality, and commercial properties.",
    },
    {
      title: "Integrated Security Management",
      description:
        "Unified systems integrating RFID access control, biometrics, fire & hazard detection, PPE compliance, and remote monitoring.",
    },
  ];

  const contentStyle = {
    margin: 0,
    height: "100vh",
    width: "100vw",
    color: "#fff",
    lineHeight: "160px",

    textAlign: "center",
    background: "#364d79",
  };
  // ===== PRODUCTS FOR CAROUSEL =====
  const productCarouselData = [
    {
      name: "Bullet Camera",
      image: trinai4, // src/images
    },
    {
      name: "Dome Camera",
      image: "/Newimages/AI02D040L67-05MV.png", // public folder
    },
    {
      name: "Mini Dome Camera",
      image: "Newimages/mini-dome.png", // public folder
    },
    {
      name: "Trinai Facial Biostand",
      image: "Newimages/TrinAI-TN50%20(1).png", // public folder
    },
    {
      name: "PTZ Camera",
      image: "/Newimages/ptz.png", // public folder
    },
    {
      name: "NVR",
      image: nvr, // src/images
    },
    {
      name: "Smart GPU",
      image: gpu, // src/images
    },
  ];
  const businessSolutions = [
    {
      title: "Manufacturing",
      description:
        "Trinai’s AI-powered security solutions safeguard factories and warehouses with advanced surveillance.",
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20home%20images/Home%20page%20images/9.png?tr=w-800,h-500,q-80",
    },
    {
      title: "Infrastructure, Construction & Related Sectors",
      description:
        "Complete safety solutions from site inspections to highway and urban road surveillance.",
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20home%20images/Home%20page%20images/1.png?tr=w-800,h-500,q-80",
    },
    {
      title: "Public Services",
      description:
        "Securing monitoring centers and hospitals to ensure public safety and patient protection.",
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20home%20images/Home%20page%20images/10.png?tr=w-800,h-500,q-80",
    },
    {
      title: "Education & Research",
      description:
        "Smart surveillance creating safe, distraction-free environments for schools and conference rooms.",
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20home%20images/Home%20page%20images/7.png?tr=w-800,h-500,q-80",
    },
    {
      title: "Energy & Mining",
      description:
        "AI-enabled wide-angle cameras protecting solar farms, gas stations, and mining sites.",
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20home%20images/Home%20page%20images/8.png?tr=w-800,h-500,q-80",
    },
    {
      title: "Retail & Agriculture",
      description:
        "End-to-end surveillance securing supermarkets, malls, food chains, and forestry operations.",
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20home%20images/Home%20page%20images/6.png?tr=w-800,h-500,q-80",
    },
    {
      title: "Hospitality",
      description:
        "Comprehensive hotel security covering all areas from entry to exit for guest safety.",
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20home%20images/Home%20page%20images/3.png?tr=w-800,h-500,q-80",
    },
    {
      title: "Transport",
      description:
        "Smart bus and parking surveillance ensures passenger safety and efficient traffic flow from entry to exit.",
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20home%20images/Home%20page%20images/5.png?tr=w-800,h-500,q-80",
    },
    {
      title: "General / Residential & Commercial Buildings",
      description:
        "Complete surveillance coverage from gates to perimeters, safeguarding apartments, offices, and common spaces.",
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20home%20images/Home%20page%20images/11.png?tr=w-800,h-500,q-80",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const logos = [
    "https://brihaspathi.com/assets-bt/img/logo/1.png",
    "https://brihaspathi.com/assets-bt/img/logo/2.png",
    "https://brihaspathi.com/assets-bt/img/logo/3.png",
    "https://brihaspathi.com/assets-bt/img/logo/4.png",
    "https://brihaspathi.com/assets-bt/img/logo/5.png",
    "https://brihaspathi.com/assets-bt/img/logo/6.png",
    // "https://brihaspathi.com/assets-bt/img/logo/7.png",
    // "https://brihaspathi.com/assets-bt/img/logo/8.png",
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 3 seconds, loading becomes false
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      //     <div id="loading">
      //       <div id="loader" className="loading--theme">
      //         <div className="cssload-spinner"></div>
      //       </div>
      //     </div>

      <div className="flex flex-col justify-center items-center h-screen bg-black">
        {/* CCTV Camera GIF */}
        <div className=" flex">
          {" "}
          <img
            src="https://media.tenor.com/kh1ED9iY26UAAAAm/cam-camera.webp"
            width={200}
            height={200}
            alt="CCTV Loader"
            className="w-auto h-auto object-contain"
          />
          {/* <img
            src="https://media.tenor.com/zd_zrArvOtsAAAAi/camera.gif"
            // width={200}
            // height={200}
            alt="CCTV Loader"
            className="w-32 h-32 object-contain"
          /> */}
        </div>
        {/* Loading Text */}
        <p className="text-white text-lg mt-4 animate-pulse">
          Scanning... Please wait
        </p>
      </div>
    );
  }

  return (
    <div
      className="  w-full  bg-white "
      //   style={{ background: "linear-gradient(to bottom, #4568DC, #B06AB3)" }}
    >
      {/* ===== HERO VIDEO SECTION ===== */}
      <div className="relative w-full h-[430px] sm:h-[530px] lg:h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20Home%20Banner.mp4"
            type="video/mp4"
          />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/0 z-10" />

        {/* CONTENT */}
        <div className="relative z-20 h-full flex flex-col justify-center text-white px-4 sm:px-8 md:px-14 lg:px-28">
          <motion.h2
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl"
          >
            High-Performance Protective Measures
          </motion.h2>

          <motion.p
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-2xl mt-4 max-w-3xl text-gray-200"
          >
            Delivering end-to-end intelligent surveillance solutions for safer
            spaces.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link to="/solutions">
              <button className="bg-white text-black font-bold px-6 py-3 rounded-md border  hover:bg-gray-100 transition">
                Explore Our Solutions →
              </button>
            </Link>

            <Link to="/about">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-md border border-white hover:bg-transparent hover:text-white">
                More About Us!
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 sm:py-14 lg:p-10 px-5 relative z-10 mb-30">
        <div className="max-w-10xl mx-auto lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT COLUMN – TEXT */}
            <div className="space-y-4">
              <div className="text-xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                Who We Are
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                Trinai is a leading manufacturer of sophisticated security and
                surveillance systems, providing state-of-the-art solutions
                designed for high performance, dependability, and expandability.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                We have a substantial presence across manufacturing,
                infrastructure, public services, and commercial facilities,
                specialising in intelligent surveillance technologies for
                diverse operational environments.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                Our integrated solutions—from industrial-grade CCTV cameras to
                facial recognition, LPR, and remote monitoring—deliver real-time
                visibility, proactive threat detection, and robust access
                control to ensure safer, smarter, and more secure environments.
              </p>
            </div>

            {/* RIGHT COLUMN – IMAGE */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                <img
                  src="https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20home%20images/About%20Page/made%20in%20(2).png?tr=w-900,q-90"
                  alt="Who We Are - Trinai"
                  loading="lazy"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== WHAT WE OFFER ===== */}
      <div className="bg-slate-50 py-14 px-5">
        <div className="lg:px-10">
          {/* HEADER */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="mb-12"
          >
            {/* Gradient Title */}
            <div className="text-xl font-bold mb-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              What We Offer
            </div>

            <p className="text-gray-600 text-lg max-w-4xl">
              Our company offers a broad range of sophisticated security and
              monitoring systems tailored to serve the varied requirements of
              contemporary businesses and infrastructure.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeOffer.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="
    bg-gradient-to-br
    from-[#00ADE7]
    to-[#305292]
    rounded-xl
    p-6
    shadow-lg
    text-white
    transition-all
    duration-300
    hover:shadow-2xl
    hover:-translate-y-2
  "
              >
                <h3 className="text-white text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-white/90 text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* ===== PRODUCTS CAROUSEL ===== */}
      <div className="bg-white py-14 px-5">
        <div className="lg:px-10">
          {/* SECTION TITLE */}
          <div className="mb-10">
            <div className="text-xl font-bold mb-2 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              Products
            </div>
            <p className="text-gray-600 text-lg">
              Explore our intelligent surveillance product range.
            </p>
          </div>

          {/* CAROUSEL */}
          <Carousel
            autoplay
            autoplaySpeed={1000}
            dots={false}
            slidesToShow={4}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1 } },
            ]}
          >
            {productCarouselData.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-xl transition flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 object-contain mb-4"
                  />
                  <h4 className="text-gray-800 font-semibold text-lg text-center">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* ===== TRINAI BUSINESS SOLUTIONS ===== */}
      <div className="bg-slate-50 py-16 px-5">
        <div className="lg:px-10">
          {/* HEADER */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="mb-12"
          >
            <div className="text-xl font-bold mb-2 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              Trinai Business Solutions
            </div>
            <p className="text-gray-600 text-lg max-w-4xl">
              Intelligent, industry-specific security solutions designed to
              protect people, infrastructure, and operations across diverse
              environments.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessSolutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: false }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* comments by me */}

      {/* <div className=" bg-slate-50 p-5">
        <div className=" lg:px-10 pt-10 lg:grid  grid-cols-2 lg:my-8 ">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="text-orange-600 text-xl font-bold mb-2 ms-1">
              About Us
            </div>
            <div className=" text-4xl  font-serif text-gray-500">
              Innovative security, powered by precision.
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className=" mt-2 text-gray-500"
          >
            At Trinai, we specialize in providing cutting-edge security
            solutions and data communication technologies designed to meet the
            evolving needs of modern industries. With a strong focus on
            integrated surveillance systems, data storage, and communication
            infrastructure, we are committed to offering innovative and reliable
            services that protect what matters most.
          </motion.div>
        </div>
      </div> */}

      {/* <div className="lg:p-10">
        <div className="p-5">
          <div
            className="lg:grid border shadow shadow-whit10
        
           rounded-md grid-cols-2 p-8 "
          >
            <div className=" lg:px-20">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img className="rounded-md" src={trinai1}></img>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-orange-600 text-xl font-bold my-2 ms-1">
                Why Choose Trinai?
              </div>
              <div className=" text-gray-500 font-serif font-bold text-2xl m-2 ">
                Innovative Security and Data Solutions by Trinai
              </div>

              <div className=" text-start mx-2 mt-5 text-gray-500 text-xl">
                Trinai is a Security Solutions Provider, We specialize in total
                integrated surveillance, Data Communication and Storage
                Solutions Trinai is a Security Solutions Provider, We specialize
                in total integrated surveillance, Data Communication and Storage
                Solutions
              </div>
              <div className=" mt-20  grid grid-cols-2 gap-7">
                <div className=" flex">
                  <div>
                    <TiTick color="" className=" text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">Expertise</div>
                </div>
                <div className=" flex">
                  <div>
                    <TiTick color="" className=" text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">Innovation</div>
                </div>
                <div className=" flex">
                  <div>
                    <TiTick color="" className=" text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">Dependability</div>
                </div>
                <div className=" flex">
                  <div>
                    <TiTick color="" className=" text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">Customer-Centric</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className=" p-5 "></div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" flex justify-center text-gray-500 items-center font-thin text-3xl p-3 font-bold "
        >
          ADVANCED SECURITY AND SURVEILLANCE SOLUTIONS
        </motion.div>
      </div>

      <div className=" bg-slate-50">
        <div
          className="lg:grid 
        
           rounded-md grid-cols-2 p-8"
        >
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="text-orange-600 text-xl font-bold my-2 ms-1">
              Our Services
            </div>
            <div className=" text-gray-500 font-serif font-bold text-2xl m-1 ">
              Surveillance Systems
            </div>

            <div className=" text-start  mt-5 text-gray-500 text-xl">
              "From CCTV cameras to smart monitoring systems, we offer a range
              of solutions for real-time monitoring and enhanced security."
            </div>
            <div className=" mt-7 text-gray-500 font-serif font-bold text-2xl m-1 ">
              Data Communication Solutions
            </div>

            <div className=" text-start  mt-5 text-gray-500 text-xl">
              "Trinai specializes in seamless and secure data communication
              systems, ensuring that your network infrastructure is always
              protected and up-to-date."
            </div>
          </motion.div>

          <div className="lg:px-20 lg:pb-20">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img className=" rounded-md" src={trinai2}></img>
            </motion.div>
          </div>
        </div>
      </div> */}

      <div className="p-5">
        <div className="lg:grid rounded-md grid-cols-2 p-8 shadow shadow-white border">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={trinai3} alt="Velocity Series Camera" />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="m-2"
          >
            {/* Titles with Gradient */}
            <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              Velocity Series
            </div>

            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              Network Cameras
            </div>

            {/* Paragraph */}
            <p className="text-gray-600 text-lg max-w-xl">
              Trinai AI CCTV cameras are network IP cameras that deliver
              advanced analytical functions like vehicle detection, face
              recognition, face detection, and people counting.
            </p>

            {/* Button with Gradient - Matching Header CTA Style */}
            <div className="mx-2 my-10">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#00ADE7",
                    colorPrimaryHover: "#305292",
                    colorPrimaryActive: "#27AAE1",
                  },
                }}
              >
                <Space>
                  <Link to="/products">
                    <Button
                      type="primary"
                      size="large"
                      icon={<AntDesignOutlined />}
                      className="font-semibold shadow-md bg-gradient-to-r from-[#00ADE7] via-[#305292] to-[#27AAE1] border-0 hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(90deg, #00ADE7 0%, #305292 50%, #27AAE1 100%)",
                        borderRadius: "10px",
                      }}
                    >
                      <span className="text-white">View more</span>
                    </Button>
                  </Link>
                </Space>
              </ConfigProvider>
            </div>
          </motion.div>
        </div>
      </div>

      {/**lkjhc */}

      <div
      //   className="
      //    bg-slate-50"
      >
        <div className="lg:p-10 bg-slate-50">
          <div className="lg:grid mt-4 rounded-md grid-cols-2 p-8">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className=""
            >
              {/* Titles with Gradient */}
              <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                Protect Your Loved Ones
              </div>

              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                Smart IP Cameras
              </div>

              <div className="text-start mx-2 mt-5 text-gray-700 text-xl">
                A smart home allows homeowners to control appliances,
                thermostats, lights, and other devices remotely using a
                smartphone or tablet through an internet connection.
              </div>

              {/* Button with Gradient - Matching Header CTA Style */}
              <div className="mx-2 my-10">
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#00ADE7",
                      colorPrimaryHover: "#305292",
                      colorPrimaryActive: "#27AAE1",
                    },
                  }}
                >
                  <Space>
                    <Link to="/products">
                      <Button
                        type="primary"
                        size="large"
                        icon={<AntDesignOutlined />}
                        className="font-semibold shadow-md bg-gradient-to-r from-[#00ADE7] via-[#305292] to-[#27AAE1] border-0 hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(90deg, #00ADE7 0%, #305292 50%, #27AAE1 100%)",
                          borderRadius: "10px",
                        }}
                      >
                        <span className="text-white">View more</span>
                      </Button>
                    </Link>
                  </Space>
                </ConfigProvider>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img
                src={trinai4}
                alt="Smart IP Cameras"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* commented by me */}
      {/*<div className="  flex justify-center items-center pb-10 ">
        <div
          className=" h-auto  w-full "
          style={{
            // backgroundImage: `url("https://i.pinimg.com/1200x/a1/23/35/a12335713917dc975cf740a18ade5e3a.jpg")`,
            backgroundSize: "cover",
            width: "100vw",
            backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",

            // You can adjust the height to fit your layout
            //   filter: "sepia(1) contrast(1.2) brightness(0.9) saturate(1.5)", // Vintage effect
          }}
        >
          <div className=" lg:grid grid-cols-2 pt-16 px-10 pb-10">
            {" "}
            <div className="h-full flex items-center justify-start">
              <div className="flex flex-col justify-center items-center mb-2 ms-1 ">
                <div className=" flex flex-col gap-4">
                  <div className=" text-orange-600 font- text-xl font-bold">
                    Our Stats
                  </div>
                  <div className=" text-gray-400 text-xl">
                    Innovating Security with Cutting-Edge Technology
                  </div>
                  <div className=" text-gray-400 text-xl">
                    Trinai is at the forefront of providing advanced security
                    solutions, revolutionizing surveillance systems, and
                    ensuring unmatched protection for businesses and homes
                    across the globe.
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex  justify-around">
              
              <div className=" flex flex-col gap-3 justify-center items-start">
                <div>
                  <BsEmojiSmile color="gray" size={60} />{" "}
                </div>
                <div className="text-orange-600 text-4xl font-mono relative">
                  <CountUp start={0} end={200} duration={8} separator="," />
                  <div className="absolute top-0 left-16 text-lg text-orange-600">
                    +
                  </div>
                </div>

                <div className=" text-gray-500  text-2xl font-bold">
                  Happy clients
                </div>
              </div>
              <div className=" flex flex-col gap-3 justify-center items-start">
                <div>
                  <FiActivity color="gray" size={60} />{" "}
                </div>
                <div className="text-orange-600 text-4xl font-mono relative">
                  <CountUp start={0} end={130} duration={8} separator="," />
                  <div className="absolute top-0 left-16 text-lg text-orange-600">
                    +
                  </div>
                </div>
                <div className=" text-gray-500  text-2xl font-bold">
                  Projects Done
                </div>
              </div>
              <div className=" flex flex-col gap-3 justify-center items-start">
                <div>
                  <BsAward color="gray" size={60} />{" "}
                </div>
                <div className="text-orange-600 text-4xl font-mono relative">
                  <CountUp start={0} end={60} duration={8} separator="," />
                  <div className="absolute top-0 left-11 text-lg text-orange-600">
                    +
                  </div>
                </div>
                <div className=" text-gray-500  text-2xl font-bold">
                  Awards Won
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}

      {/* commented by dinesh*/}
      {/* <div className=" bg-slate-50 p-10"></div> */}

      {/* <div className=" p-5">
        <div className=" text-6xl font-thin font-semibold">Products</div>
        <div className=" text-2xl mt-2 text-gray-700">
          Organizations can discover the ideal solution here. Explore our three
          core offerings.
        </div>
      </div> */}
      {/* <div className="p-5">
        <div className=" font-mono text-5xl text-orange-600">Our Clients</div>
        <div className=" text-gray-500 text-4xl font-extralight">
          Your Success, Our Reputation
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full py-4 bg-white">
          <div className="inline-block animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="inline-flex items-center bg-slate-400 py-7"
              >
                {logos.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`logo-${index}`}
                    className="h-36 w-36 mx-8" // control height, keep auto width, and add margin between
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div>
        <ScrollTop
          target="window"
          threshold={100}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center shadow-lg hover:scale-125 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
          icon={
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          }
        />
      </div>
      {/* <div>
        <ScrollTop
          target="window"
          threshold={100}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center shadow-lg hover:from-[#305292] hover:to-[#00ADE7] transition-all duration-300"
        >
          <span className="text-white text-xl font-sans">↑</span>
        </ScrollTop>
      </div> */}
    </div>
  );
};

export default Home;
