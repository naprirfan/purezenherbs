import { IReview } from "../../types";

export const ReviewCard = ({data}: {data: IReview}) => {
    return (
        <div className="m-1 border-white border h-[350px] flex flex-col">
            <div className="flex-auto p-1 h-[175px] overflow-hidden">
                <div>{data.description}</div>
            </div>
            <div>
                <div className="px-1">{data.author}</div>
                <div className="p-1">
                    {Array.from(Array(data.stars), (e, i) => {
                        return (
                            <span className="text-turquoise">
                                <i className="fa fa-star" key={i}></i>
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className="basis:1/2">
                <img src={data.image} alt={data.author} />
            </div>
        </div>
    )
}