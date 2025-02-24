
// 'use client';

// import React, { useState } from "react";
// import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

// const FAQ = () => {
//   const faqItems = [
//     {
//       question: "What is Aidpal?",
//       answer:
//         "Aidpal is a first-aid assistance app using image recognition, 3D visualizations, and voice guidance."
//     },
//     {
//       question: "How does Aidpal work?",
//       answer:
//         "Simply use the app to identify medical conditions and get real-time step-by-step guidance."
//     },
//     {
//       question: "Is Aidpal free to use?",
//       answer:
//         "Yes, Aidpal is free to use with optional premium features for advanced capabilities."
//     }
//   ];

//   // State to track which FAQ items are open using an array of indices
//   const [openIndices, setOpenIndices] = useState<number[]>([]);

//   const toggleAnswer = (index: number) => {
//     if (openIndices.includes(index)) {
//       // If the index is already open, remove it
//       setOpenIndices(openIndices.filter((i) => i !== index));
//     } else {
//       // Otherwise, add the index
//       setOpenIndices([...openIndices, index]);
//     }
//   };

//   return (
//     <section className="faq-section py-10 bg-gray-100 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         {/* Center the FAQ Heading */}
//         <h2 className="section-title text-center text-gray-800 dark:text-white mb-8">Frequently Asked Questions</h2>
//         <div className="space-y-6">
//           {faqItems.map((item, index) => (
//             <div key={index} className="faq-item border-b pb-4">
//               <div
//                 className="flex justify-between items-center text-xl font-medium text-gray-800 dark:text-white cursor-pointer"
//                 onClick={() => toggleAnswer(index)}
//               >
//                 <span>{item.question}</span>
//                 {openIndices.includes(index) ? (
//                   <MinusIcon className="h-6 w-6 text-gray-800 dark:text-white" />
//                 ) : (
//                   <PlusIcon className="h-6 w-6 text-gray-800 dark:text-white" />
//                 )}
//               </div>
//               <div
//                 className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                   openIndices.includes(index) ? "max-h-[200px]" : "max-h-0"
//                 }`}
//               >
//                 <p className="text-gray-600 dark:text-white mt-2">{item.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;




'use client';

import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Aidpal?",
      answer:
        "Aidpal is a first-aid assistance app using image recognition, 3D visualizations, and voice guidance."
    },
    {
      question: "How does Aidpal work?",
      answer:
        "Simply use the app to identify medical conditions and get real-time step-by-step guidance."
    },
    {
      question: "Is Aidpal free to use?",
      answer:
        "Yes, Aidpal is free to use with optional premium features for advanced capabilities."
    },
    {
      question: "Who can use AidPal?",
      answer:
        "AidPal is designed for anyone, including individuals, caregivers, workplaces, and organizations, to improve first aid response and preparedness."
    },
    {
      question: "Does AidPal support multiple languages?",
      answer:
        "We are working on multilingual support to make AidPal accessible to a global audience."
    },
    {
      question: "What platforms is AidPal available on?",
      answer:
        "Currently, AidPal is a web-based application."
    }
  ];

  // State to track which FAQ items are open using an array of indices
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleAnswer = (index: number) => {
    if (openIndices.includes(index)) {
      // If the index is already open, remove it
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      // Otherwise, add the index
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="faq-section py-10 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Updated FAQ Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item border-b pb-4">
              <div
                className="flex justify-between items-center text-xl font-medium text-gray-800 dark:text-white cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span>{item.question}</span>
                {openIndices.includes(index) ? (
                  <MinusIcon className="h-6 w-6 text-gray-800 dark:text-white" />
                ) : (
                  <PlusIcon className="h-6 w-6 text-gray-800 dark:text-white" />
                )}
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndices.includes(index) ? "max-h-[200px]" : "max-h-0"}`}
              >
                <p className="text-gray-600 dark:text-white mt-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

