/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id,category, title, picture, text_color, category_bg, card_bg } =
    card || {};
  return (
    <div className="mt-16">
        <Link to={`/donationCard/${id}`}>
        <div>
      <div  style={{background:card_bg}} className="relative flex  flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            className="w-[307px] h-48"
            src={picture}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <p style={{color:text_color ,background:category_bg}} className="mt-3   btn font-sans text-lg font-semibold  w-32  rounded-md ">
            {category}
          </p>
          <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
        </div>
      </div>
    </div>
        </Link>
    </div>
  );
};

export default Card;
