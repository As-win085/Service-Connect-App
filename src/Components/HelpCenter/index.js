import FAQScreen from '../FAQ';
import ContactUsScreen from '../ContactUs';
import { useState } from 'react';

const App = () => {
  const [activeMainTab, setActiveMainTab] = useState('FAQ');

  return (
    <div className="flex w-full justify-center md:w2/3 lg:w-1/2  pb-8 mx-auto">
      <div className=" w-full h-full bg-white shadow-2xl  overflow-hidden flex flex-col">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveMainTab('FAQ')}
            className={`
              flex-1 py-3 text-center font-bold text-sm transition-colors duration-200
              ${
                activeMainTab === 'FAQ'
                  ? 'text-gray-900 border-b-2 border-gray-900 bg-gray-50'
                  : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            FAQ
          </button>
          <button
            onClick={() => setActiveMainTab('CONTACT US')}
            className={`
              flex-1 py-3 text-center font-bold text-sm transition-colors duration-200
              ${
                activeMainTab === 'CONTACT US'
                  ? 'text-gray-900 border-b-2 border-gray-900 bg-gray-50'
                  : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            CONTACT US
          </button>
        </div>
        <div className="flex-grow overflow-hidden">
          {activeMainTab === 'FAQ' && <FAQScreen />}
          {activeMainTab === 'CONTACT US' && <ContactUsScreen />}
        </div>
      </div>
    </div>
  );
};

export default App;