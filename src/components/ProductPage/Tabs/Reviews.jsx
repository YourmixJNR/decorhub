import React, { useState } from "react";
import { ReactComponent as SendArrow } from "../../../assets/icons/white-right-arrow.svg";
import UserReviewAvatar from "../../../assets/images/userReviewAvatar.jpg";

const Reviews = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="w-full space-y-10">
      <div>
        <div className="flex flex-col gap-8 md:gap-7">
          <div className="space-y-6">
            <h3 className="text-xl font-poppins font-medium text-gray-900">
              Customer Reviews
            </h3>
            {customerReview.map((review, index) => {
              return (
                <div className="space-y-2" key={index}>
                  <div className="space-x-2">
                    <span className="text-base text-neutral-900 font-inter font-normal">
                      {review.star}
                    </span>
                    <span className="text-xs text-neutral-900 font-inter font-normal">
                      {review.reviews} Reviews
                    </span>
                  </div>
                  <p className="font-inter text-sm font-semibold pl-28">
                    {review.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <div className="flex relative items-center">
              <div className="absolute p-1 bg-neutral-950 sm:px-6 text-white text-base font-inter font-medium rounded-full mr-2.5 right-0 cursor-pointer">
                <SendArrow className="sm:hidden" />
                <span className="hidden sm:flex">Write Review</span>
              </div>
              <input
                value={value}
                onChange={handleChange}
                type="text"
                placeholder="Share your thoughts"
                className="h-11 w-full font-inter text-sm font-normal rounded-md border border-slate-500 pl-4 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {customerReview.map((review, index) => {
          return (
            <div key={index}>
              <div className="flex gap-6 flex-wrap justify-between items-center">
                <h5 className="font-poppins text-[1.75rem] font-medium">
                  {review.reviews} <span>Reviews</span>
                </h5>
                <select
                  id=""
                  name=""
                  className="w-full py-2 px-4 font-inter text-base font-semibold bg-white rounded-lg border-2 border-neutral-200 sm:w-64"
                >
                  <option value="Newest">Newest</option>
                  <option value="Newest">Oldest</option>
                  <option value="Newest">Older</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {customerReview.map((review, index) => (
          <div key={index} className="space-y-4">
            <div className="flex gap-4">
              <img src={review.eachUser[0].avatar} alt="" />
              <div>
                <h4 className="font-inter text-xl font-semibold">
                  {review.eachUser[1].name}
                </h4>
                <p>{review.eachUser[2].star}</p>
              </div>
            </div>
            <div>
              <p className="font-inter text-base text-neutral-600 font-normal">
                {review.eachUser[3].details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

const customerReview = [
  {
    id: 1,
    name: "Tray Table",
    description:
      "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    star: "★ ★ ★ ★ ★",
    reviews: 11,
    eachUser: [
      { avatar: UserReviewAvatar },
      { name: "Sofia Harvetz" },
      { star: "★ ★ ★ ★ ★" },
      {
        details:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
  },
];
