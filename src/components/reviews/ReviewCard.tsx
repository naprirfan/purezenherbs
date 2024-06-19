import { IReview } from "../../types";

export const ReviewCard = ({data}: {data: IReview}) => {
    return (
        <div className="h-full mx-1 border-white border grid grid-rows-2 gap-2">
            <blockquote className="flex flex-col p-1">
                <p className="pb-1">
                    {data.description}
                </p>
                <footer className="justify-self-end">
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
            <div className="flex items-end">
                <img className="w-full object-cover" src={data.image} alt={data.author} />
            </div>
        </div>
    )
}