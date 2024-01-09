import React from "react";
import Doc from "../images/myImage.jpg";

function Header() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w[1240px] mx-auto grid md:grid-cols-2">
        <div>
          <h1 className="text-center font-extrabold">
            Virtual Health Care For You{" "}
          </h1>
          <h3>
          Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.
          </h3>
          <button className="bg-[#00f] rounded-md items-center">Submit</button>
        </div>
        <div>
          <img src={Doc} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Header;
