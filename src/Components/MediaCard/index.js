const MediaCard = ({ title, IconComponent, count }) => {
    // Create an array of length 'count' to map over and display icons
    const icons = Array(count).fill(0);

    return (
        <div className="p-4 bg-white rounded-xl shadow-xl mb-4">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">{title}</h2>
            <div className="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-6 lg:grid-cols-8 lg:gap-8">
                {icons.map((_, index) => (
                    <div key={index} className="flex justify-center items-center p-2">
                        <IconComponent />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MediaCard