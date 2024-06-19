import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import db from '../../db.json';
import { ReviewCard } from "./ReviewCard";

export const Reviews = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30,
        }
      };
      
    return (
        <div className="bg-charcoal text-white pb-2 mb-6 lg:mb-8">
            <div className="container px-2">
                <h2 className="text-4xl text-center py-4 lg:py-6">Testimoni Pelanggan</h2>
            </div>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                centerMode={true}
                pauseOnHover={true}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {
                    db.reviews.map((review) => (
                        <ReviewCard data={review} />
                    ))
                }
            </Carousel>
            <div className="my-8 text-center">
                <a href="#" className="text-charcoal text-center uppercase bg-turquoise px-4 py-2 lg:mx-0">Belanja Sekarang</a>
            </div>
        </div>
    )
}