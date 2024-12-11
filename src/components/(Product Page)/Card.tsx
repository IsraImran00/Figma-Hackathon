import Image from 'next/image';
import React from 'react';

// CardProps type to define the structure of the props.
type CardProps = {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
};

const Card = ({ title, description, price, imageSrc }: CardProps) => {
  return (
    <div className="flex flex-col md:flex-row md:px-32 lg:px-48 px-6 sm:px-12 md:py-12 space-y-6 md:space-y-0 md:space-x-6 items-center md:items-start">
      {/* Image Section */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
        <div className="relative w-full h-64 md:h-96">
          <Image
            className="object-cover object-center rounded-lg transform transition-transform duration-300 hover:scale-105"
            src={imageSrc}
            alt={title}
            layout="fill"
            quality={90}
          />
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg text-gray-800 flex flex-col justify-between items-center md:items-start transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-2xl md:text-4xl font-medium md:font-semibold mb-4 text-center md:text-left">
          {title}
        </h1>
        <button className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded hover:bg-emerald-600 transition duration-300 mb-4">
          {price} USD
        </button>
        <p className="text-center md:text-left leading-relaxed mb-6">
          {description}
        </p>
        <button className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-600 transition duration-300">
          ADD To Cart
        </button>
      </div>
    </div>
  );
};

// Example List of Items with Data
const items = [
  {
    title: 'Library Stool Chair',
    description: 'Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.',
    price: '200',
    imageSrc: '/card.png'
  },
  {
    title: 'Modern Office Chair',
    description: 'Perfect for working long hours comfortably.',
    price: '150',
    imageSrc: '/card2.png'
  }
  // Add more items here...
];

// CardsList Component to render all Cards
const CardsList = () => {
  return (
    <div>
      {items.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          imageSrc={item.imageSrc}
        />
      ))}
    </div>
  );
}

export default CardsList;
