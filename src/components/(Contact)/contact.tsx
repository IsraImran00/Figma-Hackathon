import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';

const Contact = () => {
  // Define contact information as an array for scalability and cleaner code
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className= "text-black" size={20} />,
      title: 'Address',
      description: '236 5th SE Avenue, New York NY10000, United States',
    },
    {
      icon: <FaPhoneAlt className= "text-black" size={20} />,
      title: 'Phone',
      description: '+(84) 546-6789',

    },
    {
      icon: <FaClock className= "text-black" size={20} />,
      title: 'Working Time',
      description: 'Mon-Fri, 9:00 - 22:00 ',

    },
  ];

  return (
    <div className="flex flex-col items-center p-4 md:p-8">
      <h1 className="text-center font-bold text-3xl md:text-4xl mt-10 mb-4">Get in Touch with Us</h1>
      <p className="text-center mb-8 text-gray-600">
        For More Information About Our Product and Services. Please feel free To Drop Us <br/> An Email.Our staff Always Be There To Help You Out.Do Not Hesitate!
      </p>

      <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row p-6 rounded-lg">
             {/* Contact Information Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start">
                {item.icon}
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

         {/* Contact Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="flex flex-col space-y-4">
            {['Name', 'Email', 'Subject (Optional)', 'Message'].map((label, index) => (
              <div key={index}>
                <label className="block mb-2 font-bold">{label}</label>
                <input
                  type={label === 'Message' ? 'textarea' : 'text'}
                  placeholder={`Enter Your ${label}`}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-teal-500 px-8 py-2 mt-6 text-xl text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Responsive Section */}
      <div className="w-full flex flex-wrap items-center mt-16 justify-evenly bg-slate-300 mx-4 md:mx-8 py-10">
        {['first.png', 'second.png', 'third.png'].map((img, index) => (
          <Image
            key={index}
            src={`/contactservices/${img}`}
            alt={`Service ${index + 1}`}
            width={1000}
            height={1000}
            className="max-w-[200px] w-full h-auto mb-4 md:mb-0"
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
