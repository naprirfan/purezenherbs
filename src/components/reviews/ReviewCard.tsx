import { IReview } from "../../types";

export const ReviewCard = ({data}: {data: IReview}) => {
    return (
        <div className="m-1 border-white border h-[500px] lg:m-2">
            Card here {data.author}
        </div>
    )
}