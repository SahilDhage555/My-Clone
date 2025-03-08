import React, { useState } from "react";
import logo from "../Images/meeshoLogo.svg";
import { CiSearch } from "react-icons/ci";
import { TfiMobile } from "react-icons/tfi";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import playstore from "../Images/playstore-download.png";
import appstore from "../Images/appstore-download.png";
import { Link } from "react-router-dom";
import NavbarCategory from "./NavbarCategory";

function Navbar() {
  const [isDownloadHovered, setDownloadHovered] = useState(false);
  const [isProfileHovered, setProfileHovered] = useState(false);
  
  return (
    <nav className="font-medium z-10 text-gray-700 w-full top-0 fixed bg-white ">
      <div className="flex px-4 items-center justify-between border-b border-gray-400">
        <div className="flex-shrink-0 my-3">
          <Link to="/">
          <img src={logo} alt="Meesho Logo" className="w-40" />
          </Link>
        </div>
        <div className="flex items-center border border-black rounded-md py-1 px-2 bg-white font-normal my-3 mx-3 w-80">
          <CiSearch className="text-gray-400 mr-2 text-3xl" />
          <input
            type="text"
            name="search"
            placeholder="Try Saree, Kurti or Search by Product Code"
            className="outline-none py-0.5 pe-3 w-full"
          />
        </div>
        <div className="flex font-normal text-gray-900 justify-between items-center gap-6 px-2 ">
          <div
            className={`flex gap-2 py-3 items-center ${
              isDownloadHovered ? "hoverBtn" : ""
            } hover:text-fuchsia-900 w-28 border-b-2 border-white hover:border-fuchsia-800`}
            onMouseEnter={() => setDownloadHovered(true)}
            onMouseLeave={() => setDownloadHovered(false)}
          >
            <TfiMobile className="text-xl " />
            <p>Download App</p>
          </div>

          <div className="border-l-2 h-10"></div>

          <div className="w-20 cursor-pointer">
            <p>Become a Supplier</p>
          </div>

          <div className="ms-6 border-l-2 h-10"></div>

          <div className="cursor-pointer">
            <p>Newsroom</p>
          </div>

          <div className="border-l-2 h-10"></div>
        </div>
        <div
          className={`flex-col ${
            isProfileHovered ? "hoverBtn" : ""
          } font-normal text-gray-900 text-lg me-3 px-2 py-3 hover:text-fuchsia-800 border-b-2 border-white hover:border-fuchsia-800`}
          onMouseEnter={() => setProfileHovered(true)}
          onMouseLeave={() => setProfileHovered(false)}
        >
          <HiOutlineUser className="m-auto text-xl" />
          <p>Profile</p>
        </div>
        <div className="flex-col font-normal text-gray-900 text-lg pe-3 cursor-pointer ">
          <Link to="/signup">
          <BsCart2 className="m-auto text-xl" />
          Cart 
          </Link>
        </div>
      </div>

      <div>
        {isDownloadHovered && (
          <div
            className="start-2/4 absolute bg-white w-[200px] -ms-[65px] p-4 rounded-b-lg border-x border-b border-gray-400 shadow-lg"
            onMouseEnter={() => setDownloadHovered(true)}
            onMouseLeave={() => setDownloadHovered(false)}
          >
            <p>Download From</p>
            <div className="my-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow"
                target="blank"
              >
                <img src={playstore} alt="" />
              </a>
            </div>
            <div className="my-4">
              <a
                href="https://apps.apple.com/us/app/meesho-online-shopping/id1457958492"
                target="blank"
              >
                <img src={appstore} alt="" />
              </a>
            </div>
          </div>
        )}

        {isProfileHovered && (
          <div
            className="right-3 absolute bg-white w-56 -ms-5 p-3 rounded-b-lg border-x border-b border-gray-400 shadow-lg"
            onMouseEnter={() => setProfileHovered(true)}
            onMouseLeave={() => setProfileHovered(false)}
          >
            <h2>Hello User</h2>
            <p className="text-xs font-normal">To access your Meesho account</p>
            <div className="w-full bg-fuchsia-700 text-white text-lg my-2 py-2     text-center cursor-pointer rounded">
              <Link to="/signup">
                <p>Sign Up</p>
              </Link>
            </div>
            <div className="border-gray-400 border"></div>
            <div className="flex items-center gap-3 my-3 text-lg cursor-pointer">
              <HiOutlineShoppingBag />
              <Link to='/signup' className="font-semibold text-gray-900">My Orders</Link>
            </div>
            <div className="border-gray-300 border"></div>
            <div className="mt-3 mx-3 text-lg cursor-pointer">
              <p className="font-semibold text-gray-900">Delete Account</p>
            </div>
          </div>
        )}
      </div>
        
        <NavbarCategory />
        
    </nav>
  );
}

export default Navbar;
