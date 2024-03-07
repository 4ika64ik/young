import React from 'react';

const Contact = () => {
  const handleTelegramSubmit = () => {
    window.location.href = 'https://t.me/rabotaIvanov';
  };

  const handleWhatsAppSubmit = () => {
    window.location.href = 'https://call.whatsapp.com/voice/6A0YK7WPTNTMKCZdL3eHKq';
  };

  return (
    <div>
      <div className="w-full h-96" id="image-set1">
        <h1 className="flex text-white font-monserrat text-5xl uppercase font-semibold items-center justify-center h-full w-full text-center flex-col">
          <span className="text-3xl text-green-500">написать{""}</span>
          <span>нам</span>
        </h1>
      </div>
      <div className="grid grid-cols-12 font-monserrat  gap-2 lg:gap-20 md:gap-2 sm:gap-2 ">
        <div
          className="col-span-12 md:col-span-6 flex md:flex-row flex-col gap-3 md:gap-4 bg-green-600 text-white"
          id="image-set2"
        >
          <div className="flex items center text-left gap-3 md:gap-4 md:pl-40 md:pr-60 md:py-5 md:mb-5 mb-5 px-10"></div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col items-left justify-center md:pr-64 md:pt-20 ">
            <h1 className="py-6 px-11 md:px-0 text-xl md:text-3xl font-semibold md:pl-8">
              Введите свою информацию по форме ниже и мы свяжемся с вами в ближайшее время
            </h1>
            <div>
              <div className="card-body md:px-0 px-10 py-2">
                <div className="form-control mt-6">
                  <button onClick={handleTelegramSubmit} className="btn bg-green-500 border-none">
                    Написать в Telegram
                  </button>
                </div>
                <div className="form-control mt-6">
                  <button onClick={handleWhatsAppSubmit} className="btn bg-green-500 border-none">
                    Написать в WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
