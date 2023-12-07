const Discover = () => {
    return (
        <div className="flex flex-wrap gap-6">
            {Array.from({length: 48}, () => (
                <div className="flex justify-center items-center w-52 h-60 bg-stone-900 text-white">
                    SongCard
                </div>
            ))};
        </div>
    );
}

export default Discover;