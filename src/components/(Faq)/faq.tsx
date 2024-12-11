'use client'; // Add this at the top

import React, { useState } from 'react';

// Define an interface for the category data
interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: 'What is the return policy?',
    answer:
      'Our return policy allows for returns within 30 days of purchase. Items must be in original condition.',
  },
  {
    question: 'How do I track my order?',
    answer:
      'You can track your order using the tracking number sent to your email upon shipment.',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we offer international shipping to selected countries. Shipping rates and times may vary.',
  },
  {
    question: 'Can I change or cancel my order?',
    answer:
      'You can cancel your order before it is shipped. Please contact customer support for assistance.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the answer if it's already open
    } else {
      setActiveIndex(index); // Open the answer
    }
  };

  return (
    <div className="px-6 py-12 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-8">Frequently Asked Questions</h2>

      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-6">
            <button
              className="w-full text-left text-xl font-semibold py-3 px-4 bg-white rounded-lg shadow-md hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="mt-2 px-4 py-2 text-gray-700 bg-gray-50 rounded-lg shadow-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
