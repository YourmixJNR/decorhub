import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightIcon } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as TicketPercent } from "../../assets/icons/ticket-percent.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/Line.svg";

const TopCTA = () => {
  const [close, setClose] = useState(false);

  return (
    <div
      className={`bg-slate-100 justify-center items-center space-x-5 px-8 py-2 ${
        close ? "hidden" : "flex"
      }`}
    >
      <div className="flex justify-center items-center space-x-2">
        <TicketPercent />
        <span className="text-sm">30% off storewide — Limited time!</span>
        <Link className="hidden space-x-2 md:flex text-sm items-center justify-center underline text-blue-400" to="#">
           <span>Shop Now</span> <RightIcon />
        </Link>
      </div>
      <CloseIcon className="cursor-pointer float-end" onClick={() => setClose(true)} />
    </div>
  );
};

export default TopCTA;
