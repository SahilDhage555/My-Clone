import React, { useState } from "react";
import logo from "../Images/meeshoLogo.svg";
import { CiSearch } from "react-icons/ci";
import { TfiMobile } from "react-icons/tfi";
import playstore from "../Images/playstore-download.png";
import appstore from "../Images/appstore-download.png";
import headerImg from "../Images/signUp Header.webp";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [isDownloadHovered, setDownloadHovered] = useState(false);
  const [phone, setPhone] = useState("");
  return (
    <div className="">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-400">
        <div className="flex justify-between items-center px-4 py-1">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src={logo} alt="" className="w-[160px] h-[36]" />
            </Link>
            <div className="flex items-center border border-black rounded-md py-1 px-2 bg-white font-normal my-3 mx-3 w-80">
              <CiSearch className="text-gray-400 mr-2 text-3xl" />
              <input
                type="text"
                name="search"
                placeholder="Try Saree, Kurti or Search by Product Code"
                aria-label="Search Products"
                className="outline-none py-0.5 pe-3 w-full"
              />
            </div>
          </div>
          <div>
            <div className="flex font-normal text-gray-900 justify-between cursor-pointer items-center gap-6 px-2 ">
              <div
                className={`flex gap-2 py-3 items-center ${
                  isDownloadHovered ? "hoverBtn" : ""
                } hover:text-fuchsia-900 font-semibold border-b-2 border-white hover:border-fuchsia-800`}
                onMouseEnter={() => setDownloadHovered(true)}
                onMouseLeave={() => setDownloadHovered(false)}
              >
                <TfiMobile className="text-xl " />
                <p>Download App</p>
              </div>

              <div className="border-l-2 h-10"></div>

              <div className="font-semibold cursor-pointer">
                <p>Become a Supplier</p>
              </div>

              <div className="ms-6 border-l-2 h-10"></div>

              <div className="font-semibold cursor-pointer">
                <p>Newsroom</p>
              </div>
            </div>
          </div>
          {isDownloadHovered && (
            <div
              className="start-2/4 top-[72px] z-10 absolute bg-white w-48 ms-14 p-3 rounded-b-lg border-x border-b border-gray-400 shadow-lg"
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
        </div>
      </nav>
      <div className="bg-pink-100 absolute pt-[85px] w-full flex justify-center items-center py-4">
      <div className="rounded-lg border border-gray-200 bg-white ">
        <img
          src={headerImg}
          alt="Meesho Logo"
          className="bg-cover object-cover rounded-t-lg w-[400px] h-[200px]"
        />
        <div className="mt-6 px-12">
          <h1 className="font-semibold text-lg ">Sign Up to view your profile</h1>

          {/* Phone Number Input */}
          <div className="mt-4 flex items-center relative">
            {/* Country Code */}
            <div className="flex flex-col w-[60px] h-[56px] me-2">
              <span className="text-gray-400 text-xs">Country</span>
              <span className="pb-1 text-sm">🇮🇳 +91</span>
              <div className="border border-gray-300"></div>
            </div>

            {/* Input Box with Floating Label */}
            <div className="relative flex flex-col w-[230px]">
              {/* Label (Moves up when user types) */}
              <label
                htmlFor="phoneNo"
                className={`absolute left-0 text-fuchsia-700 text-xs font-semibold transition-all duration-300 ${
                  phone
                    ? "transform -translate-y-4 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
              >
                Phone Number
              </label>

              {/* Phone Number Input */}
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                pattern="[0-9]{10}"
                maxLength="10"
                placeholder="Phone Number"
                className={`outline-none -pt-2 w-full bg-transparent border-b border-gray-400 ${phone ?"border-fuchsia-700" : "" } `}
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[40px] text-white font-semibold rounded mt-4 bg-fuchsia-700"
          >
            <span>Continue</span>
          </button>
        </div>

        <div className="w-[210px] mx-auto mt-4 mb-4">
          <p className="text-gray-400 text-xs font-semibold cursor-pointer">
            By continuing, you agree to Meesho’s <br />
            <span className="text-fuchsia-700">Terms & Conditions</span> and
            <span className="text-fuchsia-700"> Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
