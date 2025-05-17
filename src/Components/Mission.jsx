function Mission() {
    return (
        <div className="flex flex-row h-full w-full items-center justify-center mt-15 px-10 bg-white">
            {/* Left side: Text */}
            <div className="w-1/2 pr-8">
                <h1 className="font-bold text-4xl underline mb-4">Our Mission</h1>
                <p className="text-lg leading-relaxed">
                    To provide rest and resources for caregivers — a place to know that they do not carry their yoke alone.
                </p>
            </div>

            {/* Right side: Image */}
            <div className="w-1/2 flex justify-center">
                <img 
                    src="pic2.png" 
                    alt="Caregiver support" 
                    className="max-w-[400px] max-h-[300px] object-cover rounded-lg shadow-md"
                />
            </div>
        </div>
    );
}


export default Mission;
