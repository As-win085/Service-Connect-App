import React, { useState } from 'react';


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
    <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 last:border-b-0">
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
        aria-labelledby={`${label.replace(/\s/g, '-')}-label`}
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

const NotificationSettings = () => {
  const initialSettings = [
    { label: 'Special Offers', initialValue: true },
    { label: 'Sound', initialValue: true },
    { label: 'Vibrate', initialValue: false },
    { label: 'General Notification', initialValue: true },
    { label: 'Promo & Discount', initialValue: false },
    { label: 'Payment Options', initialValue: true },
    { label: 'App Update', initialValue: true },
    { label: 'New Service Available', initialValue: false },
    { label: 'New Tips Available', initialValue: false },
  ];

  const [settings, setSettings] = useState(initialSettings);

  const handleToggle = (label, newValue) => {
    console.log(`${label} updated to: ${newValue}`);
    setSettings(prevSettings =>
      prevSettings.map(setting =>
        setting.label === label ? { ...setting, initialValue: newValue } : setting
      )
    );
  };

  return (
    <div className="h-full w-full md:w-2/3 lg:w-1/2 mx-auto p-4  flex justify-center">
      <div className="w-full  bg-white rounded-xl shadow-lg overflow-hidden">
        {settings.map((setting) => (
          <ToggleSetting
            key={setting.label}
            label={setting.label}
            initialValue={setting.initialValue}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;