"use client";


const ProjectRankData = [
{
    rank: 1,
    name: "Wade Warren",
    avatar:
    "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
    prediction: {
    country: "Argentina",
    code: "AR",
    points: "+10 PTS",
    },
    points: 61,
},
{
    rank: 2,
    name: "Dianne Russell",
    avatar:
    "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
    prediction: {
    country: "France",
    code: "FR",
    },
    points: 54,
},
{
    rank: 3,
    name: "Esther Howard",
    avatar:
    "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
    prediction: {
    country: "Brazil",
    code: "BR",
    },
    points: 52,
},
{
    rank: 4,
    name: "Robert Fox",
    avatar:
    "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
    prediction: {
    country: "Spain",
    code: "ES",
    },
    points: 49,
},
{
    rank: 5,
    name: "Jan Kowalski",
    avatar:
    "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
    prediction: {
    country: "Poland",
    code: "PL",
    },
    points: 49,
},
];


export default function Leaderboard() {
return (

    <div className="w-full max-w-none mx-auto p-6">
        <div className="grid grid-cols-2 gap-6">
        {/* Left Column - Podium and Table */}
        <div className="col-span-2">
            <div className="bg-[#151725] rounded-xl p-3 w-full min-w-[600px] overflow-x-auto">
            {/* Podium Section */}
            <div className="text-center mb-1">
            
                <div className="flex justify-center items-end gap-6 mb-6">
                {/* 2nd Place */}
                <div className="flex items-end justify-center gap-8">
                    {/* 2nd Place */}
                    <div className="flex flex-col items-center pb-9">
                    <img
                        src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg"
                        alt="Dianne"
                        className="w-16 h-16 rounded-full border-2 border-[#2A3052] mb-2"
                    />
                    <div className="text-white text-sm font-semibold">
                        Dianne
                    </div>{" "}
                    {/* Hiển thị tên */}
                    <div className="text-sm">
                        <div className="text-gray-400 font-medium">2nd</div>
                        <div className="text-gray-500">54 PTS · $60</div>
                    </div>
                    </div>

                    {/* 1st Place */}
                    <div className="flex flex-col items-center">
                    <img
                        src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg"
                        alt="Wade"
                        className="w-20 h-20 rounded-full border-4 border-[#3B82F6] mb-2"
                    />
                    <div className="text-white text-sm font-semibold">
                        Wade
                    </div>{" "}
                    {/* Hiển thị tên */}
                    <div className="text-sm">
                        <div className="text-white font-medium">1st</div>
                        <div className="text-blue-400">61 PTS · $100</div>
                    </div>
                    </div>

                    {/* 3rd Place */}
                    <div className="flex flex-col items-center pb-12">
                    <img
                        src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg"
                        alt="Esther"
                        className="w-16 h-16 rounded-full border-2 border-[#614A2A] mb-2"
                    />
                    <div className="text-white text-sm font-semibold">
                        Esther
                    </div>{" "}
                    {/* Hiển thị tên */}
                    <div className="text-sm">
                        <div className="text-gray-400 font-medium">3rd</div>
                        <div className="text-gray-500">52 PTS · $40</div>
                    </div>
                    </div>
                </div>
                </div>

                <h3 className="text-lg font-medium text-white mb-1">
                We have a winner!
                </h3>
                <p className="text-sm text-gray-400">
                Wade Warren wins the main prize ($100), congratulations!
                </p>
            </div>

            {/* Table */}
            <div className="space-y-2 w-full">
            <h1 className="flex justify-start text-2xl font-bold" >Project</h1>
                <div className="grid grid-cols-4 gap-4 px-4 py-4 text-sm text-gray-400 w-full">
                <div>Place</div>
                <div>Name</div>
                <div>Predicted Champion</div>
                <div className="text-right pr-2">Points</div>
                </div>

                {ProjectRankData.map((entry) => (
                <div
                    key={entry.rank}
                    className="flex justify-between items-center gap-4 p-4 rounded-xl bg-[#1C1F37] hover:bg-[#242B45] transition-colors"
                >
                    {/* Rank */}
                    <div className="text-gray-400 w-10 text-center">
                    {entry.rank}
                    </div>

                    {/* Avatar + Name */}
                    <div className="flex items-center gap-3 flex-1">
                    <img
                        src={entry.avatar || "/placeholder.svg"}
                        alt={entry.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium text-white">
                        {entry.name}
                    </span>
                    </div>

                    {/* Predicted Champion */}
                    <div className="flex items-center gap-4 flex-1">
                    <span className="text-gray-400 text-lg font-medium">
                        {entry.prediction.code}
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400">
                        {entry.prediction.code}
                        </span>
                        <span className="text-gray-400">
                        {entry.prediction.country}
                        </span>
                        {entry.prediction.points && (
                        <span className="text-xs text-blue-400">
                            {entry.prediction.points}
                        </span>
                        )}
                    </div>
                    </div>

                    {/* Points */}
                    <div className="text-white text-right w-16">
                    {entry.points} PTS
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    </div>
    
);
}
