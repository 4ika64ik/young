import React from 'react'

import { motion } from "framer-motion";
import image1 from "../assets/images/project/1 (1).jfif";
import image2 from "../assets/images/project/1 (1).jpg";
import image3 from "../assets/images/project/1 (4).jpg";
import image4 from "../assets/images/project/1 (2).jfif";
import image5 from "../assets/images/bg-image.jpg";
import image6 from "../assets/images/construction-image-null.jpg";
import image7 from "../assets/images/construction-image3.jpg";
import image8 from "../assets/images/construction-site.jpg";

function Projects() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }} className='mt-20'>
      <div className="col-span-12 mt-11">
        <div className="flex md:w-[50%] mx-auto flex-col items-start justify-center -mt-20 md:-mt-40 bg-white text-xl p-6 md:p-20 mb-10 shadow-xl">
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-col justify-between items-start py-10">
              <span className="font-bold text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm text-warning">
                Наши клиенты
              </span>
              <span className="w-11 h-3 ml-10 bg-green-700"></span>
            </div>

            <div className="flex">
              <div className="flex items-center justify-center">
                <ul className="steps steps-vertical text-white">
                  <li data-content="★" className="step step-warning"></li>
                  <li data-content="★" className="step step-warning"></li>
                  <li data-content="★" className="step step-warning"></li>
                  <li data-content="★" className="step step-warning"></li>
                </ul>
              </div>
              <div>
                <p className="text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm">
                  Доверие наших клиентов
                  Мы гордимся тем, что наша компания строительства завоевала доверие многих клиентов благодаря высокому качеству работ и профессионализму нашей команды. Наши клиенты — наше главное достояние, и мы стремимся к тому, чтобы каждый проект, который мы реализуем, отражал наше стремление к их полному удовлетворению. Мы благодарим всех наших клиентов за доверие и готовы предоставить рекомендации и отзывы о нашей работе по запросу. Мы убеждены, что наше сотрудничество станет для вас приятным и успешным опытом
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
        <img src={image1} alt="project-image-1" />
        <img src={image2} alt="project-image-1" />
        <img src={image3} alt="project-image-1" />
        <img src={image4} alt="project-image-1" />
        <img src={image5} alt="project-image-1" />
        <img src={image6} alt="project-image-1" />
        <img src={image7} alt="project-image-1" />
        <img src={image8} alt="project-image-1" />
      </div>
    </motion.div>
  );
}

export default Projects