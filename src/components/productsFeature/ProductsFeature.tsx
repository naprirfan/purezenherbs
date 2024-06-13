import db from '../../db.json';

export const ProductsFeature = () => {
    return (
        <div className="flex justify-center mb-6 lg:mb-8">
            <div className="container px-2">
                <h2 className="text-4xl text-center mt-4 lg:my-6">Mengapa Pilih Pure Zen Herbs?</h2>

                <img className="mt-6" src="https://placehold.co/400x400/png" alt="Mengapa Pilih Pure Zen Herbs?" />

                <div className="grid grid-cols-2 gap-2 mt-4 lg:flex lg:flex-row lg:justify-between">
                    {
                        db.features.map((feature) => (
                            <div className="flex flex-col items-center">
                                <img className="w-3 h-3 m-2" src={`/assets/images/${feature.icon}`} alt={feature.title} />
                                <div className="uppercase text-center">{feature.title}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}