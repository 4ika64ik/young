import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    setName('');
    setPhone('');
    try {
      const text = `Новая заявка!\nИмя: ${name}\nТелефон: ${phone}`;
      const response = await axios.post('https://api.telegram.org/bot6806809280:AAFqNvMpRw2ZsyyuFIpzoLd331rvHR1y4mQ/sendMessage', {
        text,
        chat_id: '-1002107069189',
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
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
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Имя</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Имя"
                        className="input input-bordered"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Телефон</span>
                    </label>
                    <input
                        type="tel"
                        placeholder="Телефон"
                        className="input input-bordered"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button onClick={handleSubmit } className="btn bg-green-500 border-none">
                      Отправить
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
