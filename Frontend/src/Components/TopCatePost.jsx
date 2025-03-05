import React from "react";
import posterImg1 from "../Images/Poster1.jpg";
import posterImg2 from "../Images/poster2Bg.webp";
import posterImg3 from "../Images/poster3Bg.webp";
import posterImg4 from "../Images/poster4Bg.webp";
import posterImg5 from "../Images/poster5Bg.webp";
import P1WomenStore from "../Images/P1-Women-Store.webp";
import P1MenStore from "../Images/P1-Mens-Store.webp";
import P1KidStore from "../Images/P1-Kids-Store.webp";
import P2ViewAllBtn from "../Images/P2ViewAllBtn.webp";
import P2HomeDecor from "../Images/P2-Home-Decor.webp";
import P2HomeDecorBtn from "../Images/P2-Home-Decor-Btn.webp";
import P2KitchenAppl from "../Images/P2-Kitchen-Appl.webp";
import P2KitchenBtn from "../Images/P2-Kitchen-Btn.webp";
import P2HealthCare from "../Images/P2-Health-Care.webp";
import P2HealthBtn from "../Images/P2Health-Btn.webp";
import P3Accessories from "../Images/P3Accessories.webp";
import P3AccessoriesBtn from "../Images/P3AccessoriesBtn.webp";
import P3Footwear from "../Images/P3Footwear.webp";
import P3FootwearBtn from "../Images/P3FootwearBtn.webp";
import P3Electronics from "../Images/P3Electronics.webp";
import P3ElectronicsBtn from "../Images/P3ElectronicsBtn.webp";
import playStore from "../Images/playstoreIcon_500.webp";
import appStore from "../Images/appstoreIcon_500.webp";
import { IoMdCheckmark } from "react-icons/io";

export default function TopCatePost() {
  let poster1 = {
    backgroundImage: `url(${posterImg1})`,
  };
  let poster2 = {
    backgroundImage: `url(${posterImg2})`,
  };
  let poster3 = {
    backgroundImage: `url(${posterImg3})`,
  };
  let poster4 = {
    backgroundImage: `url(${posterImg4})`,
  };
  let poster5 = {
    backgroundImage: `url(${posterImg5})`,
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex w-full items-center justify-between ">
        <hr className=" border w-1/5 border-fuchsia-400" />
        <div className=" w-1/2 text-center bg-white">
          <h1 className="text-4xl font-bold">Top Categories to choose from</h1>
        </div>
        <hr className="w-1/5 border border-fuchsia-400" />
      </div>

      <div
        className="bg-cover bg-center my-12 rounded-md px-6 pt-20 pb-12"
        style={{ ...poster1, width: "100%", height: "546px" }}
      >
        <div className="flex items-end gap-6">
          <div className="">
            <a href="#">
              <img src={P1WomenStore} alt="" />
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src={P1MenStore} alt="" />
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src={P1KidStore} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center my-12 rounded-md px-6 "
        style={{ ...poster2, width: "100%", height: "546px" }}
      >
        <div className="w-full h-full flex justify-evenly items-center">
          <div>
            <a href="#">
              <img src={P2ViewAllBtn} alt="" />
            </a>
          </div>
          <div className="flex gap-5">
            <div className="flex-col ">
              <a href="#" className="">
                <img src={P2HomeDecor} alt="" />
                <img src={P2HomeDecorBtn} className="mx-auto" alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={P2KitchenAppl} alt="" />
                <img src={P2KitchenBtn} className="mx-auto" alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={P2HealthCare} alt="" />
                <img src={P2HealthBtn} className="mx-auto" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center my-12 rounded-md px-6 "
        style={{ ...poster3, width: "100%", height: "546px" }}
      >
        <div className="w-full h-full flex justify-evenly items-center">
          <div>
            <a href="#">
              <img src={P2ViewAllBtn} alt="" />
            </a>
          </div>
          <div className="flex gap-5">
            <div className="flex-col ">
              <a href="#" className="">
                <img src={P3Accessories} alt="" />
                <img src={P3AccessoriesBtn} className="mx-auto" alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={P3Footwear} alt="" />
                <img src={P3FootwearBtn} className="mx-auto" alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={P3Electronics} alt="" />
                <img src={P3ElectronicsBtn} className="mx-auto" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center my-12 rounded-md "
        style={{ ...poster4, width: "100%", height: "525px" }}
      >
        <div className="absolute right-0 w-2/3 text-end py-9 px-9">
          <span className="text-4xl text-sky-500 font-normal">
            Become a Reseller and
          </span>
          <p className="text-5xl font-semibold my-4 text-fuchsia-800">
            Start your Online Business <br />
            with Zero Investment
          </p>
          <div className="justify-end flex gap-4">
            <div className="bg-black rounded mt-9">
              <a
                href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=192d6fc3202170-01aa2f6e18415c-26011951-b1098-192d6fc320358b"
                target="blank"
                className=""
              >
                <img
                  src={playStore}
                  className="px-3 py-2"
                  alt=""
                  width={"180px"}
                  height={"348px"}
                />
              </a>
            </div>
            <div className="bg-black rounded mt-9">
              <a
                href="https://apps.apple.com/us/app/meesho-online-shopping/id1457958492"
                target="blank"
                className=""
              >
                <img
                  src={appStore}
                  className="px-3 py-2 "
                  alt=""
                  width={"180px"}
                  height={"48px"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center my-12 rounded-md "
        style={{ ...poster5, width: "100%", height: "290px" }}
      >
        <a href="#" className="w-100">
          <div className="text-white w-full h-full p-8">
            <span className="text-3xl font-bold">Register as a Meesho Supplier</span>
            <p className="font-normal mt-4">Sell your products to crores of customers at 0% commission</p>
            <div className="flex items-center mt-7">
              <p className="pr-7 border-e h-5 flex items-center text-base font-medium"><span className="mr-2 rounded-full w-5 h-5 text-center text-black bg-green-400"><IoMdCheckmark className="mx-auto mt-0.5"/></span>Grow your business 10x</p>
              <p className="px-6 border-e h-5 flex items-center text-base font-medium"><span className="mr-2 rounded-full w-5 h-5 text-center text-black bg-green-400"><IoMdCheckmark className="mx-auto mt-0.5"/></span>Enjoy 100% Profit</p>
              <p className="pl-7 flex items-center text-base font-medium"><span className="mr-2 rounded-full w-5 h-5 text-center text-black bg-green-400"><IoMdCheckmark className="mx-auto mt-0.5"/></span>See all over India</p>
            </div>
            <div className="mt-6 ">
              <button className="p-2.5 rounded font-bold bg-white text-lg text-fuchsia-700">
              Sign up now 
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
