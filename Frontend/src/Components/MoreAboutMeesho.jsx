import React, { useContext, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FooterContext } from "../Contexts/FooterContext";

const MoreAboutMeesho = () => {
  const [isOpen, setIsOpen] = useState(true); // ✅ Open by default
  const { footerData, loading } = useContext(FooterContext); // Use Context

  if (loading) return <p>Loading footer...</p>;
  if (!footerData) return <p>No footer data available.</p>;
  console.log(footerData); // ✅ Check if footerData is an array

  return (
    <div className="w-[92%] bg-white px-4 py-2 border rounded border-gray-400">
      {/* 🔹 Toggle Button */}
      <div
        className="w-full cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)} // ✅ Toggle state on click
      >
        <h1 className="font-semibold text-gray-700">More About Meesho</h1>
        {isOpen ? (
          <IoIosArrowUp className="text-lg" />
        ) : (
          <IoIosArrowDown className="text-lg" />
        )}
      </div>

      {/* 🔹 Content Section (Only Show When isOpen is True) */}
      {isOpen && (
        <>
          <div className="border-b my-2 border-gray-400"></div>
          <div className="flex gap-3 flex-col pt-1 transition-all duration-300 ease-in-out">
            {footerData.map((item, index) => (
              <div key={index}>
                <h1
                  className={`font-semibold footerLink text-gray-800 text-xl leading-9`}
                  dangerouslySetInnerHTML={{ __html: item.headline }}
                />

                <div>
                  <h1
                    className={`font-semibold footerLink text-gray-800 text-[15px] leading-9`}
                    dangerouslySetInnerHTML={{ __html: item.subHeadline }}
                  />

                  <p
                    className={`text-[12px] footerLink text-gray-600 font-medium `}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MoreAboutMeesho;
