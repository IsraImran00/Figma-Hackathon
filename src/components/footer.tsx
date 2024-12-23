import React from 'react';
import { GiSofa } from "react-icons/gi";

// Reusable SocialIcons Component
const SocialIcons = () => (
  <div className="flex space-x-4 mt-4">
    <div className="w-8 h-8">
      <img className="w-full h-full" src="/pint.png" alt="Pinterest" />
    </div>
    <div className="w-8 h-8">
      <img className="w-full h-full" src="/yt.png" alt="YouTube" />
    </div>
    <div className="w-8 h-8">
      <img className="w-full h-full" src="/insta.png" alt="Instagram" />
    </div>
    <div className="w-8 h-8">
      <img className="w-full h-full" src="/pinterest.png" alt="Pinterest" />
    </div>
  </div>
);

// Reusable Category and Support Links
const FooterLinkList = ({ title, items }: { title: string, items: string[] }) => (
  <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{title}</h2>
    <nav className="list-none mb-10">
      {items.map((item, index) => (
        <li key={index}>
          <a className="text-gray-600 hover:text-gray-800">{item}</a>
        </li>
      ))}
    </nav>
  </div>
);

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="py-10 md:py-24">
          <div className="flex flex-wrap md:flex-nowrap md:text-center text-center justify-center">
            {/* Logo Section */}
            <div className="w-full md:w-64 flex-shrink-0 mx-auto mb-6 md:mb-0">
              <a className="flex title-font font-medium items-center justify-center text-gray-900">
                <GiSofa className="text-emerald-500 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                <span className="ml-3 text-xl">Comforty</span>
              </a>
              <p className="mt-2 text-sm text-gray-500">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis interdem.<br />
                Cras egestas purus
              </p>
              <SocialIcons />
            </div>

            {/* Categories Section */}
            <FooterLinkList 
              title="CATEGORY"
              items={['Sofa', 'Arm Chair', 'Wing Chair', 'Desk Chair', 'Wooden Chair', 'Park Bench']}
            />

            {/* Support Section */}
            <FooterLinkList 
              title="SUPPORT"
              items={['Help And Support', 'Terms & Condition', 'Privacy Policy', 'Help']}
            />

            {/* Subscribe Section */}
            <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0 space-y-2">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
              <div className="flex flex-wrap justify-center items-end">
                <div className="relative w-full sm:w-40 md:w-auto mb-3 md:mb-0">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">NEWSLETTER</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nullam tincidunt erat enim.<br className="lg:block hidden" /></p>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="text-gray-500 text-sm mt-2 text-center">
            <p>© 2021 - Comforty - Designed & Developed by Zakirsoft</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
