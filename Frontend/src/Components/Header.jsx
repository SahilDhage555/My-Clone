import React from "react";
import freeDelivery from "../Images/freeDelivery_jamun.svg";
import cashOnDel from "../Images/cod_jamun.svg";
import easyReturn from "../Images/easyReturns_jamun.svg";
import playStore from "../Images/playstoreSmallIcon.png";
import posterImg1 from "../Images/HeaderPost.webp";
import TopCatePost from "./TopCatePost";

function Posters() {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-44 mb-14 ">
        <div className=" flex ">
          <div className="w-3/5 bg-slate-100 px-11 py-11 rounded-l-md">
            <div className="w-full">
              <h1 className="w-full text-4xl mb-7 font-bold">
                Lowest Prices <br /> Best Quality Shopping
              </h1>
              <div className="flex w-11/12 py-2 my-7 rounded justify-evenly bg-white ">
                <div className="flex gap-1 items-center pe-2 border-black border-e">
                  <img
                    src={freeDelivery}
                    className="border rounded-full"
                    alt=""
                    width="32"
                  />
                  <p>Free Delivery</p>
                </div>
                <div className="flex gap-1 items-center pe-2 border-black border-e">
                  <img
                    src={cashOnDel}
                    className="border rounded-full"
                    alt=""
                    width="32"
                  />
                  <p>Cash on Delivery</p>
                </div>
                <div className="flex gap-1 items-center ">
                  <img
                    src={easyReturn}
                    className="border rounded-full"
                    alt=""
                    width="32"
                  />
                  <p>Easy Returns</p>
                </div>
              </div>
              <div className="w-72">
                <a
                  href="https://play.google.com/store/apps/details?id=com.meesho.supply&hl=en_IN"
                  target="-blank"
                  className="flex font-semibold px-4 py-2 text-white mx-auto bg-fuchsia-800 rounded mt-4 gap-2  "
                >
                  <img src={playStore} alt="" style={{ backgroundSize: "" }} />
                  <span>Download the Meesho App</span>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={posterImg1}
              alt=""
              className="rounded-r-md"
              width={"600px"}
            />
          </div>
        </div>
      </div>
      <TopCatePost />
    </div>
  );
}

export default Posters;
