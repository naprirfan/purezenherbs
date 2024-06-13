import db from '../../db.json';

export const Products = () => {
    return (
        <div className="flex justify-center mb-4">
            <div className="container px-2">
                <h2 className="text-4xl text-center my-4">Produk Kami</h2>

                <div className="flex flex-row justify-between">
                    {
                        db.products.map((product) => (
                            <div className="relative border">
                                <img src={product.image} alt={product.name} />
                                <div className="absolute top-2 left-2">
                                    {product.name}
                                </div>
                                <a href="#" className="bg-charcoal w-full block text-white text-center py-1 block absolute top-0">Lihat Produk</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}