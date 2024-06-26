import db from '../../db.json';

export const Products = () => {
    return (
        <div className="flex justify-center mb-6 lg:mb-8">
            <div className="container px-2">
                <h2 className="text-4xl text-center my-4 lg:my-6">Produk Kami</h2>

                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:justify-between">
                    {
                        db.products.map((product) => (
                            <a key={product.id} className="block" href={`/product/${product.id}/${product.name}`}>
                                <div className="relative border-gray border">
                                    <img className="object-cover center" src={product.image} alt={product.name} />
                                    <div className="absolute top-2 left-2">
                                        {product.name}
                                    </div>
                                    <div className="bg-charcoal w-full block text-white text-center py-1">{product.price}</div>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}