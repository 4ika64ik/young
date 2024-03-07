import { Link, NavLink} from 'react-router-dom'
import React from 'react'

function Footer() {
  return (
      <footer className="footer p-28 text-lg bg-base-200 text-base-content font-semibold">
        <div className='flex flex-col -mt-10'>

        </div>
        <div className="uppercase">
          <span className="footer-title">Разделы</span>
            <Link to="/about">
                <p className="link link-hover">О нас</p>
            </Link>
            <Link to="/services">
                <p className="link link-hover">Наши сервисы</p>
            </Link>
            <Link to="/projects">
                <p className="link link-hover">
                    faq<span className="lowercase">s</span>
                </p>
            </Link>
        </div>
        <div className="uppercase">
            <Link to="/about">
                <span className="footer-title">О нас</span>
            </Link>
            <Link to="/servises">
                <p className="link link-hover">Сервисы</p>
            </Link>
            <Link to="/projects">
                <p className="link link-hover">Проекты</p>
            </Link>
        </div>
      </footer>
  );
}

export default Footer