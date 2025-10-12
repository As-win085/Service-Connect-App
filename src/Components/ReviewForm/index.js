import React, { useState } from 'react';

const CloudUploadIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-10 h-10 ${props.className}`}
  >
    <path
      fillRule="evenodd"
      d="M11.396 2.012a.75.75 0 0 0-.792 0L.175 6.495a.75.75 0 0 0 0 1.353l.317.175.319.177V21.75c0 .414.336.75.75.75h19.5a.75.75 0 0 0 .75-.75V8.199l.32-.177.316-.175a.75.75 0 0 0 0-1.353L12.004 2.012a.75.75 0 0 0-.608 0v0Z"
      clipRule="evenodd"
    />
    <path
      d="M12 4.5l-4.183 2.324a.75.75 0 0 0-.317.653V8.25a.75.75 0 0 0 1.5 0V7.5h5.5v.75a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-.317-.653L12 4.5ZM7.5 10.5a.75.75 0 0 0-.75.75v3.75a.75.75 0 0 0 1.5 0V11.25a.75.75 0 0 0-.75-.75Zm3.75.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-4.5Z"
    />
  </svg>
);

const MAX_CHARACTERS = 250;

const ReviewForm = () => {
  const [reviewText, setReviewText] = useState('');
  const [file, setFile] = useState(null);

  const handleTextChange = (e) => {
    if (e.target.value.length <= MAX_CHARACTERS) {
      setReviewText(e.target.value);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); 
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Review submitted:', { reviewText, file });
      alert("Review submitted! (Check console for data)");
      setReviewText('');
      setFile(null);
  };
  
  const charactersRemaining = MAX_CHARACTERS - reviewText.length;

  return (
    <div className="mx-auto w-full md:w-2/3 lg:w-1/2 flex items-start justify-center  px-2">
      <form onSubmit={handleSubmit} className="w-full py-4 rounded-xl ">

        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Add Photo (or) Video
        </h2>
        <label 
          htmlFor="file-upload" 
          className="block w-full cursor-pointer rounded-xl border-2 border-dashed border-gray-300 bg-white p-6 transition duration-300 ease-in-out hover:border-indigo-500 hover:bg-indigo-50"
        >
          <div className="flex flex-col items-center justify-center py-4">
            <CloudUploadIcon className="text-gray-700 transition duration-300 ease-in-out group-hover:text-indigo-600" />
            
            <p className="mt-2 text-sm text-gray-600 font-medium">
              {file ? `File ready: ${file.name.substring(0, 20)}...` : 'Click here to Upload'}
            </p>
            <input 
              id="file-upload" 
              type="file" 
              accept="image/*,video/*"
              className="sr-only" 
              onChange={handleFileChange}
            />
          </div>
        </label>
        <hr className="my-6 border-gray-200" />
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Write your Review
        </h2>

        <div className="relative mb-6">
          <textarea
            value={reviewText}
            onChange={handleTextChange}
            placeholder="Would you like to write anything about this Product?"
            rows={5}
            className="w-full resize-none rounded-xl border border-gray-300 p-4 text-sm text-gray-700 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none transition duration-150 ease-in-out shadow-sm"
            maxLength={MAX_CHARACTERS}
          />

          <p className="absolute bottom-2 right-4 text-xs text-gray-500">
            {charactersRemaining} Characters Remaining
          </p>
        </div>

        <button
          type="submit"
          disabled={!reviewText} 
          className="w-full rounded-xl bg-gray-900 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out shadow-xl hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
