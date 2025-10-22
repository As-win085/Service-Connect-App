import MediaCard from "../MediaCard";
import {Video} from "lucide-react"

const GalleryIcon = () => (
    <svg className="w-8 h-8 w-8 h-8 md:h-12 md:w-12 lg:w-14 lg:h-14 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm2 2h10v8l-2.25-2.25a.75.75 0 00-1.06 0L10 16l-3-3V7zM9 9a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
);



const MediaAndBookingCard = () => {
    return (
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto p-4 space-y-4">
            
            <MediaCard 
                title="Images" 
                IconComponent={GalleryIcon} 
                count={8} // 4 columns x 2 rows
            />

            <MediaCard 
                title="Images" // Keeping the title as per the image, though it contains video icons
                IconComponent={Video} 
                count={8} // 4 columns x 2 rows
            />

        </div>
    );
};

export default MediaAndBookingCard;

