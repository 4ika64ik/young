import React from 'react'
import image1 from "../assets/images/bg-image.jpg";
import image2 from "../assets/images/construction-image4.jpg";
import image3 from "../assets/images/project/1 (2).jpg";
import { BsArrowDownSquareFill } from 'react-icons/bs'
import { motion } from "framer-motion";

function Services() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col">
      <div className="w-full h-96" id="image-set">
        <h1 className="flex text-white font-monserrat text-5xl uppercase font-semibold items-center justify-center h-full w-full text-center flex-col">
          <span className="text-3xl text-warning">Наши{""}</span>
          <span>сервисы</span>
        </h1>
      </div>

      <div>
        <div className="grid grid-cols-12 font-monserrat  w-full">
          <div className="md:col-span-6 col-span-12 ">
            <img
              src={image1}
              alt="image-here"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-6 bg-gray-800 col-span-12 md:p-20 p-6 items-start">
            <h1 className="text-6xl py-5 font-bold uppercase text-green-600">
              <span className="font-light text-orange-500 text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm">ЧТО МЫ <span className="text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm text-green-500">ПРЕДЛАГАЕМ</span></span>
            </h1>
            <div className="flex md:flex-row flex-col md:gap-4 text-white z-50">
              <div className="w-72 text-xl flex items-center ">
                Мы предлагаем широкий спектр услуг, охватывающих энергетический аудит,
                монтаж, пуско-наладка и обслуживание системы
              </div>
              <div className="flex items-center justify-center md:mt-0 md:relative -mt-36">
                <span className="w-52 h-52 opacity-10 md:opacity-100 bg-green-700"></span>
              </div>
            </div>
          </div>
          <div className="col-span-12 mb-10">
            <div className="flex md:w-[50%] mx-auto flex-col items-start justify-center -mt-20 md:-mt-40 bg-gray-200 text-xl p-6 md:p-20 mb-10 shadow-xl">
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span className="text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm">строительные услуги</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="">
                  <p className="font-light text-sm">
                    Мы специализируемся на проектировании и строительстве как в
                    рамках единого подряда (Проектирование-Строительство), так
                    и на основе установленного дизайна (Дизайн-Предложение-Строительство).
                    Наша компания является конкурентоспособным и высококачественным подрядчиком,
                    сотрудничающим с правительством США, межправительственными и коммерческими
                    клиентами по всему миру.
                    Мы имеем обширный опыт работы над разнообразными
                    проектами и поддерживаем широкую базу данных выдающихся архитекторов.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span className="text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm">Индивидуальная установка солнечной энергии</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-light text-sm">
                    Энергоаудит - это проверка, мониторинг и анализ использования энергии, включая подготовку технического отчета с рекомендациями по повышению энергоэффективности, анализом затрат и выгод, а также планом действий по снижению энергопотребления. Проведение энергоаудита экспертом по энергетике является наилучшим способом получить комплексное представление о действиях, необходимых для повышения энергоэффективности компании или дома.
                  </p>
                </div>
              </div>

              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span className="text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm">Солнечные скважины</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-light text-sm">
                    Независимо от того, осуществляете ли вы проектирование и строительство по одному контракту (Проектирование-Строительство) или выполняете строительство по установленному проекту (Проектирование-Предложение-Строительство), мы являемся конкурентоспособным и высококачественным подрядчиком, который работает с правительством США, межправительственными и коммерческими клиентами по широкому спектру проектов в различных точках мира. Для наших проектов Design-Build мы установили отношения и поддерживаем большую базу данных выдающихся архитекторов.Независимо от того, осуществляете ли вы проектирование и строительство по одному контракту (Проектирование-Строительство) или выполняете строительство по установленному проекту (Проектирование-Предложение-Строительство), мы являемся конкурентоспособным и высококачественным подрядчиком, который работает с правительством США, межправительственными и коммерческими клиентами по широкому спектру проектов в различных точках мира. Для наших проектов Design-Build мы установили отношения и поддерживаем большую базу данных выдающихся архитекторов.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-11">
            <div className="flex md:w-[50%] mx-auto flex-col items-start justify-center -mt-20 md:-mt-40 bg-white text-xl p-6 md:p-20 mb-10 shadow-xl">
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-col justify-between items-start py-10">
                  <span className="font-bold text-warning text-sm lg:text-2xl ss:text-sm md:text-sm sm:text-sm">
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
        </div>
      </div>

      <div className="mb-10">
        <div className="grid grid-cols-12 gap-5 px-5 my-8">
          <div className="md:col-span-6 col-span-12 flex items-center justify-end">
            <img src={image2} alt="" className="h-96 object-cover" />
          </div>
          <div className="md:col-span-6 col-span-12 flex items-center justify-start">
            <img src={image3} alt="" className="h-96 " />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Services