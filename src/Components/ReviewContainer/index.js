
const HeartIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-5 h-5 ${props.className}`}
  >
    <path d="m11.645 20.917-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.059 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.924-2.438 7.11-4.756 8.757a25.18 25.18 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.003-.002.001-.006.003-.003.001A31.098 31.098 0 0 1 12 21.75c-.028 0-.055 0-.083-.002-.007-.003-.002-.001-.006-.003L11.645 20.917Z" />
  </svg>
);
const StarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-4 h-4 ${props.className}`}
  >
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.597 21.49c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006Z" clipRule="evenodd" />
  </svg>
);


const ReviewCard = ({
  avatarSrc,
  userName="asdfghj",
  rating = 4.5,
  reviewText = "fidfidbikbiadai kdbfflqiwbfg f  kwfb    lwhefli wefbwe f wekfb ief efi efv ew fweih fv  welfvb  ief  eife felifv e ",
  likes = 24,
  timeAgo = "2 days ago",
}) => {
  return (
    <div className=" flex items-start justify-center p-4 sm:p-8">
 
      <div className="w-full max-w-sm bg-white p-5 rounded-xl shadow-lg border-t-4 border-t-indigo-600 sm:p-6">
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-black mr-3 flex-shrink-0">
              {/* In a real app, you'd use an <img> tag here */}
              <img src={avatarSrc} alt={`${userName}'s avatar`} className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">
              {userName}
            </h3>
          </div>
          <div className="flex items-center bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
            <StarIcon className="text-white mr-1" />
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          {reviewText}
        </p>
        <div className="flex items-center text-gray-500 text-sm">
          <div className="flex items-center mr-4">
            <HeartIcon className="text-red-500 mr-1" /> 
            <span>{likes}</span>
          </div>
          <span>{timeAgo}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
