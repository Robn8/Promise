function MissionBox() {
    return (
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-10"
            style={{ backgroundImage: `url('/pic2.png')` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10 mt-5 flex flex-row w-[900px] h-[400px] rounded-lg shadow-md overflow-hidden">
                <div className="flex-2">
                    <img src="pic4.jpg" alt="Image 1" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <img src="pic3.png" alt="Image 2" className="w-80 h-full" />
                </div>
            </div>
        </div>
    );
}

export default MissionBox;
