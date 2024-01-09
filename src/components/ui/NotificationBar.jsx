import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightIcon } from "../../assets/icons/top-arrow-right.svg";
import { ReactComponent as TicketPercent } from "../../assets/icons/ticket-percent.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

const NotificationBar = () => {
  const [close, setClose] = useState(false);

  return (
    <div
      className={`bg-slate-100 justify-center items-center space-x-5 px-8 py-2 ${
        close ? "hidden" : "flex"
      }`}
    >
      <div className="flex md:flex-grow justify-center items-center space-x-3">
        <TicketPercent />
        <span className="text-sm font-inter font-semibold">30% off storewide — Limited time!</span>
        <Link
          className="hidden space-x-2 md:flex text-sm items-center justify-center border-b border-blue-400 text-blue-400"
          to="#"
        >
          <span className="text-sm font-medium font-inter">Shop Now</span> <RightIcon className="text-base" />
        </Link>
      </div>
      <div className="md:flex-grow[8]">
        <CloseIcon
          className="cursor-pointer float-end"
          onClick={() => setClose(true)}
        />
      </div>
    </div>
  );
};

export default NotificationBar;
