import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImQuotesRight , ImQuotesLeft } from 'react-icons/im'
const damydata = [
  {
    id: 1,
    quote:
      "The Problems isn`t the problem the problem is your Attitude about The Problems",
    author: "Captain Jack Sparrow",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5XhGEtcQ4boYjqItVkK1bry53QyVmE9OCQ&usqp=CAU",
  },
  {
    id: 2,
    quote:
      "If you only have a hammer , you tend to see every problem as a nail.",
    author: "Abraham maslow",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHKerWdNM48oXA_CqR1IuuwrkjPCpbE7j6w&usqp=CAU",
  },
  {
    id: 3,
    quote:
      "If I had an hour to solve a problem I`d spend 55 minutes thinking about the problem and 5 minutes thinking about solution",
    author: "Albert Einstien",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5aXqBbQrgS8BbNIttAaoDvj-itdDpn6nYog&usqp=CAU",
  },
];

const Quetes = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-[90%] mx-auto mt-10 lg:w-[90%] xl:w-[80%] text-[#032443] bg-[#F7F5F5] p-2">
        <h1 className="text-3xl text-start font-bold mt-5">Best Famoust Qoutes of Problems</h1>
        <Carousel
          responsive={responsive}
          swipeable={false}
          autoPlaySpeed={1000}
          customTransition="all .5"
          transitionDuration={500}
        >
              {
          damydata.map((quete) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-2 space-y-5 mt-10"
                key={quete.id}
              >
                <img className="w-40 h-36 bg-contain  rounded-[50%]" src={quete.image} alt="profile quetes" />
                <div className=" space-y-3">
                  <p className="text-center "><ImQuotesLeft size={20} className="inline"/>&nbsp; &nbsp; {quete.quote}&nbsp; &nbsp;<ImQuotesRight size={20} className="inline"/></p>
                  <p className="text-center italic">{quete.author}</p>
                </div>
              </div>
            )
          })}
        </Carousel>
    </div>
  );
};

export default Quetes;
