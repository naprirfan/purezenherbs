import db from '../../db.json';

export const Products = () => {
    return (
        <div>
            <h2 className="text-4xl text-center">Produk Kami</h2>

            <div className="flex">
                {
                    db.products.map((product) => (
                        <div>
                            {product.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}