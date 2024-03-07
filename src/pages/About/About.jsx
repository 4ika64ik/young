import React from "react";
import construction1 from "../../assets/images/construction-image-null.jpg";
import icon1 from "../../assets/images/ico1.png";
import icon2 from "../../assets/images/ico3.png";
import icon3 from "../../assets/images/ico2.png";
import TypeWriterEffect from "react-typewriter-effect";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1 }}>
      <div className="grid w-full grid-cols-12 mb-10 ">
        <div className="col-span-12 w-full h-96 " id="image-set">
          <h1 className="flex text-white font-monserrat text-5xl uppercase font-semibold items-center justify-center h-full w-full text-center flex-col">
            <span className="text-3xl">О нас {""}</span>
          </h1>
        </div>
        <div className="col-span-12 -mt-[7%] w-[80%] mx-auto bg-white shadow-xl">
          <div className="grid grid-cols-12 font-monserrat items-center  w-full">
            <div className="md:col-span-6 col-span-12 md:p-20 p-6">
              <h1 className="text-4xl py-5 font-bold uppercase text-green-600">
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "rgb(22 163 74)",
                    fontWeight: 700,
                    display: "block",
                  }}
                  startDelay={2000}
                  cursorColor="rgb(22 163 74)"
                  multiText={[" О НАС"]}
                  multiTextDelay={2000}
                  typeSpeed={100}
                />
              </h1>
              <p className="text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm">
                Build Construction" - это компания, которая начала свой путь с мечтой о создании инновационных и устойчивых строительных решений. Наша история началась с небольшой группы энтузиастов, объединивших свои знания и опыт в строительной отрасли, чтобы создать нечто уникальное.
              </p>
              <div className="py-16">
                <a href="mailto:k3655692@gmail.com?subject=Заявка"
                   className="py-2 px-5 lg:px-8 border border-green-500 text-green-500 hover:bg-green-100">
                  Оставьте заявку
                </a>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 p-6">
              <img src={construction1} alt="" />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center mt-10">
            <div className="col-span-12 font-monserrat my-10">
              <h1
                className="w-full flex gap-2 items-center
               justify-center font-bold uppercase md:text-5xl text-xl text-green-800 mb-10"
              >
                <span> мы за </span>
                <span className="font-medium md:font-thin w-50 text-warning">
                  то чтобы
                </span>
              </h1>
              <div className="flex md:flex-row flex-col  flex-wrap items-center justify-center gap-4">
                <div className="flex flex-col text-center w-72 h-80 gap-3 items-center justify-center">
                  <img src={icon1} className="w-28" alt="" />
                  <h1 className="text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm font-bold text-green-700">
                    Ответсвенность
                  </h1>
                  <p className="text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm">
                    Мы берем на себя ответственность за свои действия и решения.
                  </p>
                </div>

                <div className="flex flex-col text-center  w-72 h-80  gap-3 items-center justify-center">
                  <img src={icon3} className="w-28" alt="" />
                  <h1 className="text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm font-bold text-green-700">
                    СТАНДАРТ
                  </h1>
                  <p className="text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm">
                    Наша работа выполняется по самым высоким стандартам.
                  </p>
                </div>

                <div className="flex flex-col text-center w-72 h-80  gap-3 items-center justify-center">
                  <img src={icon2} className="w-28 text-3xl " alt="" />
                  <h1 className="text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm font-bold text-green-700">ВЗАИМОУВАЖЕНИЕ</h1>
                  <p className="text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm">
                    Мы уважаем наших коллег, клиентов, подрядчиков и поставщиков.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
