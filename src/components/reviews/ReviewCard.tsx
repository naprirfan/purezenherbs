import { IReview } from "../../types"

export const ReviewCard = ({data}: {data: IReview}) => {
    return (
        <div className="w-1/2 inline-block no-wrap">
            Card here {data.author}
        </div>
    )
}