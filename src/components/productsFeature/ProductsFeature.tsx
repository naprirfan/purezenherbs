import db from '../../db.json';

export const ProductsFeature = () => {
    const title = 'Mengapa Pilih Pure Zen Herbs?';

    return (
        <div className="flex justify-center mb-6 lg:mb-8">
            <div className="container px-2">
                <h2 className="text-4xl text-center mt-4 lg:my-6">{title}</h2>

                <div className="lg:hidden">
                    <img className="mt-6 mx-auto" src="https://placehold.co/400x400/png" alt={title} />
                    <div className="grid grid-cols-2 gap-2 mt-4 lg:flex lg:flex-row lg:justify-between">
                        {
                            db.features.map((feature) => (
                                <div key={feature.id} className="flex flex-col items-center">
                                    <i className={feature.icon}></i>
                                    <div className="uppercase text-center pt-3">{feature.title}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="hidden lg:grid grid-cols-4 grid-rows-2">
                    <div className="row-start-1 row-span-2 col-start-2 col-span-2 bg-contain bg-no-repeat bg-center min-h-[400px]" style={{ backgroundImage: 'url(https://placehold.co/400x400/png)'}} />
                    {
                        db.features.map((feature) => (
                            <div key={feature.id} className="flex flex-col items-center">
                                <i className={feature.icon}></i>
                                <div className="uppercase text-center pt-3">{feature.title}</div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}