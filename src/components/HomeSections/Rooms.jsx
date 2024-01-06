import React from "react";
import { Link } from "react-router-dom";
import RoomChair1 from "../../assets/images/room-chair1.jpg";
import RoomChair2 from "../../assets/images/room-chair2.jpg";
import RoomChair3 from "../../assets/images/room-chair3.jpg";
import { ReactComponent as RightArrow } from "../../assets/icons/arrow-right-room.svg";

const Rooms = () => {
  return (
    <div className="flex my-10 flex-wrap lg:flex-nowrap gap-6 mx-8 xl:mx-40">
      <div className="flex w-full">
        <div
          className="bg-cover bg-center w-full h-[23rem] md:h-[41rem] flex flex-col items-start justify-start px-8 py-8"
          style={{
            backgroundImage: `url("${RoomChair1}")`,
          }}
        >
          <h3 className="font-poppins text-[1.75rem] font-medium">
            Living Room
          </h3>
          <Link
            to="#"
            className="flex items-center justify-center space-x-1 border-b border-neutral-900"
          >
            <span>Shop Now</span>
            <RightArrow />
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-6 w-full lg:flex-wrap">
        <div
          className="bg-cover bg-center w-full h-[11rem] md:h-[19rem] lg:h-[19.7rem] flex flex-col items-start justify-end space-y-2 px-8 py-8"
          style={{
            backgroundImage: `url("${RoomChair2}")`,
          }}
        >
          <h3 className="font-poppins text-[1.75rem] font-medium">Bedroom</h3>
          <Link
            to="#"
            className="flex items-center justify-center space-x-1 border-b border-neutral-900"
          >
            <span>Shop Now</span>
            <RightArrow />
          </Link>
        </div>

        <div
          className="bg-cover bg-center w-full h-[11rem] md:h-[19rem] lg:h-[19.7rem] flex flex-col items-start justify-end space-y-2 px-8 py-8"
          style={{
            backgroundImage: `url("${RoomChair3}")`,
          }}
        >
          <h3 className="font-poppins text-[1.75rem] font-medium">Kitchen</h3>
          <Link
            to="#"
            className="flex items-center justify-center space-x-1 border-b border-neutral-900"
          >
            <span>Shop Now</span>
            <RightArrow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
