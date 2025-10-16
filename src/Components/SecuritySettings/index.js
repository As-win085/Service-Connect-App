import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ToggleSetting = ({ label, initialValue, onToggle }) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);

  const handleToggle = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    if (onToggle) {
      onToggle(label, newValue);
    }
  };

  return (
    <div className="flex items-center justify-between py-3 px-4">
      <span className="text-base text-gray-800">{label}</span>

      <button
        type="button"
        onClick={handleToggle}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out
          ${isEnabled ? 'bg-indigo-600' : 'bg-gray-200'}
        `}
        role="switch"
        aria-checked={isEnabled}
      >
        <span className="sr-only">Toggle {label}</span>
        <span
          aria-hidden="true"
          className={`
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
            ${isEnabled ? 'translate-x-5' : 'translate-x-0.5'}
          `}
        />
      </button>
    </div>
  );
};

const NavSetting = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-between w-full  py-3 px-4 text-gray-800 hover:bg-gray-50 transition duration-150"
  >
    <span className="text-base">{label}</span>
    <ChevronRight className="h-5 w-5 text-gray-500" />
  </button>
);

const SecuritySettings = () => {
  const initialToggles = [
    { label: 'Remember Me', initialValue: true },
    { label: 'Biometric ID', initialValue: true },
    { label: 'Face ID', initialValue: false },
  ];

  const [toggles, setToggles] = useState(initialToggles);

  const handleToggle = (label, newValue) => {
    console.log(`Setting: ${label} updated to ${newValue}`);
    setToggles(prevToggles =>
      prevToggles.map(t =>
        t.label === label ? { ...t, initialValue: newValue } : t
      )
    );
  };

  const handleAction = (action) => {
    console.log(`${action} button clicked!`);
  };

  return (
    <div className="flex flex-col h-screen p-6 bg-white justify-between md:w-1/3 lg:w-1/2 mx-auto">
      <div className="flex-grow">
        {toggles.map((setting) => (
          <ToggleSetting
            key={setting.label}
            label={setting.label}
            initialValue={setting.initialValue}
            onToggle={handleToggle}
          />
        ))}
        <NavSetting
          label="Google Authenticator"
          onClick={() => handleAction('Google Authenticator')}
        />
      </div>
      <div className="space-y-4 pt-8 mx-auto">
        <button
          onClick={() => handleAction('Change PIN')}
          className="w-full py-3 rounded-full max-w-lg mx-auto font-semibold text-indigo-600 bg-gray-50 border border-gray-200 shadow-md hover:bg-gray-100 transition duration-150"
        >
          Change PIN
        </button>
        <button
          onClick={() => handleAction('Change Password')}
          className="w-full py-3 rounded-full max-w-lg mx-auto font-semibold text-white bg-gray-800 shadow-md hover:bg-gray-900 transition duration-150"
        >
          Change Password
        </button>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default SecuritySettings;