export const Hero = () => {
    return (
        <div className="bg-gray w-full border-b flex justify-center py-4">
            <div className="container px-2 lg:flex lg:flex-row">
                <div className="flex items-center lg:basis-1/2">
                    <div className="flex flex-col items-center">
                        <h1 className="mb-3 text-5xl text-bold text-center lg:text-left lg:text-6xl lg:pb-3">Where Traditional Wisdom Meets Convenience</h1>
                        <a href="#" className="text-white uppercase text-center bg-charcoal px-4 py-2">Belanja Sekarang</a>
                    </div>
                </div>
                <div className="mt-3 lg:basis-1/2 lg:mt-0">
                    <img className="block" src="https://placehold.co/800x600/png" alt="placeholder" />
                </div>
            </div>
        </div>
    )
}