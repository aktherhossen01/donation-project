/* eslint-disable react/prop-types */


const DonationsCards = ({donetionclub}) => {
    const { picture,title, price,text_color,card_bg,category_bg,category } = donetionclub
    return (
        <div className="mt-9">
           <div style={{background:card_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={picture}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 style={{background:category_bg,color:text_color}} className="mb-4 block font-sans text-base font-semibold w-28 px-3 rounded-lg uppercase leading-relaxed tracking-normal  antialiased">
     {category}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {title}
    </h4>
    <p style={{color:text_color}} className="mb-8 block font-sans text-base font-semibold  leading-relaxed text-gray-700 antialiased">
      ${price}
    </p>
    <a className="inline-block" href="#">
      <button style={{background:text_color}}
        className="btn text-white px-4 py-2 rounded-lg">
        View Details
        
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default DonationsCards;