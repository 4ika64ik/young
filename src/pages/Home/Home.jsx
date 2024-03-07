import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import construction1 from '../../assets/images/construction-image.jpg';
import construction2 from '../../assets/images/bg-image.jpg';
import construction3 from '../../assets/images/construction-bg.jpg';
import image1 from '../../assets/images/construction-image.jpg';
import image2 from '../../assets/images/construction-image1.jpg';
import image3 from '../../assets/images/construction-image5.jpg';
import image4 from '../../assets/images/construction-image-null.jpg';
import image5 from '../../assets/images/construction-site.jpg';
import image6 from '../../assets/images/bg-image.jpg';
import image7 from '../../assets/images/construction-image4.jpg';
import image8 from '../../assets/images/construction-bg.jpg';
import TypeWriterEffect from 'react-typewriter-effect';
import '../timeline.css';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="font-monserrat"
      >
      <motion.section initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
      >
        <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="grid lg:grid-cols-12 md:mb-0 mb-12">
          <motion.div initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="col-span-12 lg:col-span-6">
            <motion.div initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:h-[700px] h-[200px]" id="image-div">
              <motion.img initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1 }}
                          src={construction1}
                alt="construction-image"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="col-span-12 lg:col-span-6 flex items-center pl-10 relative -mt-20 pt-16 lg:mt-0 lg:pt-0">
            <motion.div initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:pb-10 pr-4 lg:pr-0">
              <h1 className="text-jet text-sm py-5 lg:text-2xl font-extrabold tracking-wider uppercase lg:pt-20 ">
                <span className="text-green-600">
                  Строительная компания
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#3F3D56",
                      fontWeight: 800,
                      display: "block",
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={["Иновации.", "Качество это про нас.", "Build Construction."]}
                    multiTextDelay={2000}
                    typeSpeed={200}
                  />
                </span>
              </h1>
              <p className="text-black lg:pr-20 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-sm lg:first-line lg:font-medium font-light">
                Мы стремимся к совершенству во всем, что мы делаем. Наша команда опытных мастеров и лицензированных электриков работает вместе, чтобы обеспечить исключительные результаты, превосходящие ожидания наших клиентов. Наше видение состоит в том, чтобы установить новый стандарт качества и инноваций в сфере строительных и электротехнических услуг, построив прочные отношения с нашими клиентами благодаря нашей приверженности качеству и опыту.
              </p>
              <NavLink to="/about">
                <button className="btn hover:shadow-lg hover:bg-warning hover:text-white lg:btn-lg btn-warning flex flex-row justify-center items-center gap-3 my-4 text-black">
                  Больше
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </NavLink>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="lg:grid lg:grid-cols-12 flex flex-col-reverse">
          <div className="lg:col-span-6 col-span-12 green-bg flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full h-full">
            <h1 className="text-gray-500 uppercase lg:text-2xl text-sm md:text-sm text-muted py-1">
              <span className="text-warning font-bold uppercase">
                  Мы стремимся
              </span>{" "}
              создавать команду талантливых и преданных
            </h1>
            <p className="text-gray-500 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-sm font-semibold">
             профессионалов, готовых воплощать в жизнь самые амбициозные проекты. Наша компания ценит инновации, креативность и стремление к совершенству.
            </p>
          </div>
          <div className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px] ">
            <img
              src={construction2}
              alt="construction-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-12">
          <div
            className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px]"
            id="escape"
          >
            <img
              src={construction3}
              alt="construction-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 col-span-12 flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full text-muted h-full">
            <h1 className="text-green-600 lg:text-lg sm:text-sm py-1">
              <span className="text-muted lg:text-3xl md:text-xl sm:text-sm  font-bold">Коллектив строительной компании </span>  Build Construction
            </h1>
            <p className="text-black w-full pr-4 lg:my-5 lg:tracking-wide lg:text-sm text-muted lg:pb-0 md:pb-32">
              это сплоченная команда профессионалов, увлеченных своей работой. Наши сотрудники - это высококвалифицированные специалисты, каждый из которых вкладывает свои знания и опыт в реализацию каждого проекта. Мы ценим дружелюбную атмосферу и взаимовыручку, поэтому в нашем коллективе царит дух сотрудничества и взаимопонимания. Мы гордимся своей командой и уверены, что именно благодаря нашему коллективу мы достигаем высоких результатов в сфере строительства и обеспечиваем качество наших услуг.
            </p>
          </div>
        </div>
      </motion.section>

      <section className="flex px-6">
        <div className="flex flex-col md:justify-center md:items-center w-full my-8">
          <div>
            <div className="main font-monserrat my-10 px-4">
              <h3 className="heading">Наши условия к работе</h3>
              <div className="container">
                <ul>
                  <li>
                    <h3 className="title font-semibold">
                      {" "}
                      Заработная плата:
                    </h3>
                    <p>
                      от 15 до 21 евро в час, в зависимости от квалификации и опыта работы.
                    </p>
                    <a href="#">Больше</a>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Предоставление жилья:
                    </h3>
                    <p>
                      наша компания предоставляет жилье для сотрудников, что обеспечивает комфортные условия проживания во время работы.
                    </p>
                    <a href="#">Больше</a>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Прием сотрудников:
                    </h3>
                    <p>
                      мы готовы принимать как специалистов со значительным опытом работы, так и тех, кто только начинает свою карьеру в строительной отрасли. Мы ценим мотивацию и готовность к обучению.
                    </p>
                    <a href="#">Больше</a>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Предоставление питания:
                    </h3>
                    <p>
                      наша компания обеспечивает питание для сотрудников во время рабочего дня.
                    </p>
                    <a href="#">Больше </a>
                    <span className="circle"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-6">
        <div className="flex md:justify-center md:items-center w-full my-5">
          <h1 className="text-sm flex flex-col md:flex-row font-bold text-green-600 uppercase">
            <span>Наши</span>
            <span className="text-black">&nbsp; проекты</span>
          </h1>
        </div>
        <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-4 space-y-5">
          <img src={image1} alt="project-image-1" />
          <img src={image2} alt="project-image-1" />
          <img src={image3} alt="project-image-1" />
          <img src={image4} alt="project-image-1" />
          <img src={image5} alt="project-image-1" />
          <img src={image6} alt="project-image-1" />
          <img src={image7} alt="project-image-1" />
          <img src={image8} alt="project-image-1" />
        </div>

        <div className="w-full flex items-center justify-center mb-12">
          <NavLink to="/projects">
            <button className="btn btn-lg bg-green-600  border-none text-white">
              Смотреть галерею{" "}
            </button>
          </NavLink>
        </div>
      </section>

      <section className="flex px-6">
        {/* <div className="flex flex-col justify-center items-center w-full my-5">
          <h1 className="text-[2.5rem] flex flex-col md:flex-row font-bold text-green-600 uppercase">
            <span>Testimonials</span>
          </h1>
          <span className="w-16 h-4 bg-green-600 relative rounded-full"></span>
        </div> */}
      </section>
    </motion.div>
  );
}

export default Home