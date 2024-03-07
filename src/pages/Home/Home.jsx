import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import construction1 from '../../assets/images/construction-image.jpg';
import construction2 from '../../assets/images/bg-image.jpg';
import construction3 from '../../assets/images/construction-bg.jpg';
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
                <div className="mt-16">
                  <Link to="/contact" className="py-2 px-5 lg:px-8 border border-green-500 text-green-500 hover:bg-green-100 ">
                    Оставить заявку
                  </Link>
                </div>
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
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Предоставление жилья:
                    </h3>
                    <p>
                      Наша компания набирает в свою команду новых специалистов с опытом и без. Мы стремимся к совершенству во всем, что мы делаем. От нас своевременная оплата, приятные условия работы - от вас желания работать
                    </p>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Прием сотрудников:
                    </h3>
                    <p>
                      мы готовы принимать как специалистов со значительным опытом работы, так и тех, кто только начинает свою карьеру в строительной отрасли. Мы ценим мотивацию и готовность к обучению.
                    </p>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Предоставление питания:
                    </h3>
                    <p>
                      наша компания обеспечивает питание для сотрудников во время рабочего дня.
                    </p>
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
        </div>
        <div className="flex justify-center">
          <p className="lg:text-3xl md:text-sm sm:text-xl text-center">
            Хотите к нам на работу?
            <br/> Оставьте свой номер для связи
          </p>
        </div>
      </section>
      <section className="flex px-6 justify-center pb-20 py-10">
        <Link to="/contact"
           className="py-2 px-5 lg:px-8 border border-green-500 text-green-500 hover:bg-green-100">
          Оставьте заявку
        </Link>
      </section>
    </motion.div>
  );
}
export default Home