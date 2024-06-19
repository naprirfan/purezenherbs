import { IReview } from "../../types";

export const ReviewCard = ({data}: {data: IReview}) => {
    return (
        <blockquote className="h-full mx-1 p-2 border-white border flex flex-col">
            <p className="grow">
                {data.description}
            </p>
            <footer className="mt-4">
                <span>- {data.author}</span>
                <div>
                    {Array.from(Array(data.stars), (e, i) => {
                        return (
                            <span key={i} className="text-turquoise">
                                <i className="fa fa-star"></i>
                            </span>
                        )
                    })}
                </div>
            </footer>
        </blockquote>
    )
}