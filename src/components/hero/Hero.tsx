export const Hero = () => {
    return (
        <div className="bg-gray w-full border-b flex justify-center py-4">
            <div className="container px-2 lg:flex lg:flex-row">
                <div className="flex items-center lg:basis-1/2">
                    <div>
                        <h1 className="text-5xl lg:text-6xl mb-3 text-bold">Where Traditional Wisdom Meets Convenience</h1>
                        <button className="text-white bg-charcoal px-4 py-2">Belanja Sekarang</button>
                    </div>
                </div>
                <div className="mt-3 lg:basis-1/2 lg:mt-0">
                    <img className="block" src="https://placehold.co/800x600/png" alt="placeholder" />
                </div>
            </div>
        </div>
    )
}