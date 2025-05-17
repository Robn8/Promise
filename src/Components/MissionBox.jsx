function MissionBox() {
    return (
        <div className="flex justify-center mt-10">
            <div className="flex flex-row w-[900px] h-80 bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <div className="flex-2">
                    <img src="pic4.jpg" alt="Image 1" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <img src="pic3.png" alt="Image 2" className="w-80 h-full " />
                </div>
            </div>
        </div>
    );
}



export default MissionBox;
