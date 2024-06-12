export const Hero = () => {
    return (
        <div className="bg-gray h-[750px] w-full border-b flex justify-center">
            <div className="container px-2 lg:flex lg:flex-row">
                <div className="flex items-center lg:basis-1/2">
                    <div>
                        <h1 className="text-6xl p-10 text-bold">Where Traditional Wisdom Meets Convenience</h1>
                        <button className="text-white border-2 bg-charcoal px-4 py-2 mt-4">Belanja Sekarang</button>
                    </div>
                </div>
                <div className="lg:basis-1/2">Image here</div>
            </div>
        </div>
    )
}