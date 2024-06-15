import db from '../../db.json';
import { ReviewCard } from "./ReviewCard";

export const Reviews = () => {
    return (
        <div className="bg-charcoal text-white mb-6 lg:mb-8">
            <div className="container px-2">
                <h2 className="text-4xl text-center py-4 lg:py-6">Testimoni Pelanggan</h2>
            </div>
            <div className="overflow-hidden">
                {
                    db.reviews.map((review) => (
                        <ReviewCard data={review} />
                    ))
                }
            </div>
        </div>
    )
}