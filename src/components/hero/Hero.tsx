export const Hero = () => {
    return (
        <div className="bg-gray w-full border-b flex justify-center py-4">
            <div className="container px-2 lg:flex lg:flex-row">
                <div className="flex items-center lg:basis-1/2">
                    <div>
                        <h1 className="mb-3 text-5xl text-bold text-center lg:text-left lg:text-6xl">Where Traditional Wisdom Meets Convenience</h1>
                        <button className="text-white mx-auto block bg-charcoal px-4 py-2 lg:mx-0">Belanja Sekarang</button>
                    </div>
                </div>
                <div className="mt-3 lg:basis-1/2 lg:mt-0">
                    <img className="block" src="https://placehold.co/800x600/png" alt="placeholder" />
                </div>
            </div>
        </div>
    )
}