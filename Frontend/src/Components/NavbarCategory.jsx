import React, { useState } from "react";

const NavbarCategory = () => {
  const [isEthnicHovered, setEthnicHovered] = useState(false);
  const [isWesternHovered, setWesternHovered] = useState(false);
  const [isMenHovered, setMenHovered] = useState(false);
  const [isKidsHovered, setKidsHovered] = useState(false);
  const [isHomeHovered, setHomeHovered] = useState(false);
  const [isBeautyHovered, setBeautyHovered] = useState(false);
  const [isJewelleryHovered, setJewelleryHovered] = useState(false);
  const [isBagsHovered, setBagsHovered] = useState(false);
  const [isElectronicsHovered, setElectronicsHovered] = useState(false);
  const [isSportsHovered, setSportsHovered] = useState(false);
  const [isCarsHovered, setCarsHovered] = useState(false);
  const [isStationeryHovered, setStationeryHovered] = useState(false);
  const [isPetsHovered, setPetsHovered] = useState(false);
  const [isFoodsHovered, setFoodsHovered] = useState(false);
  const [isMusicalHovered, setMusicalHovered] = useState(false);
  const [isBooksHovered, setBooksHovered] = useState(false);

  return (
    <div>
      <div className=" w-screen border-b border-black font-medium px-2 overflow-hidden">
        <div className="flex overflow-x-auto text-sm hide-scrollbar me-3 whitespace-nowrap scroll-smooth">
          <div
            className={`category ${
              isEthnicHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setEthnicHovered(true)}
            onMouseLeave={() => setEthnicHovered(false)}
          >
            <p className="">Women Ethnic</p>
          </div>
          <div
            className={`category ${
              isWesternHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setWesternHovered(true)}
            onMouseLeave={() => setWesternHovered(false)}
          >
            <p>Women Western</p>
          </div>
          <div
            className={`px-5 category ${
              isMenHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setMenHovered(true)}
            onMouseLeave={() => setMenHovered(false)}
          >
            <p>Men</p>
          </div>
          <div
            className={`px-5 category ${
              isKidsHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setKidsHovered(true)}
            onMouseLeave={() => setKidsHovered(false)}
          >
            <p>Kids</p>
          </div>
          <div
            className={`category ${
              isHomeHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setHomeHovered(true)}
            onMouseLeave={() => setHomeHovered(false)}
          >
            <p>Home & Kitchen</p>
          </div>
          <div
            className={`category ${
              isBeautyHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setBeautyHovered(true)}
            onMouseLeave={() => setBeautyHovered(false)}
          >
            <p>Beauty & Health</p>
          </div>
          <div
            className={`category ${
              isJewelleryHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setJewelleryHovered(true)}
            onMouseLeave={() => setJewelleryHovered(false)}
          >
            <p>Jewellery & Accessories</p>
          </div>
          <div
            className={`category ${
              isBagsHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setBagsHovered(true)}
            onMouseLeave={() => setBagsHovered(false)}
          >
            <p>Bags & Footwear</p>
          </div>
          <div
            className={`category ${
              isElectronicsHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setElectronicsHovered(true)}
            onMouseLeave={() => setElectronicsHovered(false)}
          >
            <p>Electronics</p>
          </div>
          <div
            className={`category ${
              isSportsHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setSportsHovered(true)}
            onMouseLeave={() => setSportsHovered(false)}
          >
            <p>Sports & Fitness</p>
          </div>
          <div
            className={`category ${
              isCarsHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setCarsHovered(true)}
            onMouseLeave={() => setCarsHovered(false)}
          >
            <p>Car & Motorbike</p>
          </div>
          <div
            className={`category ${
              isStationeryHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setStationeryHovered(true)}
            onMouseLeave={() => setStationeryHovered(false)}
          >
            <p>Office Supplies & Stationery</p>
          </div>
          <div
            className={`category ${
              isPetsHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setPetsHovered(true)}
            onMouseLeave={() => setPetsHovered(false)}
          >
            <p>Pet Supplies</p>
          </div>
          <div
            className={`category ${
              isFoodsHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setFoodsHovered(true)}
            onMouseLeave={() => setFoodsHovered(false)}
          >
            <p>Food & Drinks</p>
          </div>
          <div
            className={`category ${
              isMusicalHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setMusicalHovered(true)}
            onMouseLeave={() => setMusicalHovered(false)}
          >
            <p>Musical Instruments</p>
          </div>
          <div
            className={`category ${
              isBooksHovered ? "hoverCate" : ""
            } border-fuchsia-800`}
            onMouseEnter={() => setBooksHovered(true)}
            onMouseLeave={() => setBooksHovered(false)}
          >
            <p>Books</p>
          </div>
        </div>
      </div>

      {/* Menu section displayed on hover */}
      {isEthnicHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setEthnicHovered(true)}
          onMouseLeave={() => setEthnicHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Sarees</h3>
            <div className="text-gray-500 text-sm leading-7">
              <span className="listItem">
                <a href="#">All Sarees</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Silk Sarees</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Banarasi Silk Sarees</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Cotton Sarees</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Georgette Sarees</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Chiffon Sarees</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Heavy Work Sarees</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Net Sarees</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Kurtis</h3>
            <div className="text-gray-500 text-sm leading-7 font-medium">
              <span className="listItem">
                <a href="#">All Kurtis</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Anarkali Kurtis</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Rayon Kurtis</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Cotton Kurtis</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Chikankari Kurtis</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Kurta Sets</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">All Kurta Sets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Kurta Palazzo Sets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Rayon Kurta Sets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Kurta Pant Sets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Cotton Kurta Sets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Sharara Sets</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Dupatta Sets</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Cotton Sets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Rayon Sets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Printed Sets</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Suits & Dress Material</h3>
            <div className="text-gray-500 text-sm leading-7">
              <span className="listItem">
                <a href="#">All Suits & Dress Material</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Cotton Suits</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Embroidered Suits</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Crepe Suits</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Silk Suits</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Patiala Suits</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Lehengas</h3>
            <div className="text-gray-500 font-medium text-sm leading-7">
              <span className="listItem">
                <a href="#">Lehenga Cholis</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Net Lehenga</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Bridal Lehenga</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Other Ethnic</h3>
            <div className="text-gray-500 text-sm leading-7">
              <span className="listItem">
                <a href="#">Blouses</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Dupattas</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Lehanga</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Gown</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Silk Suits</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Islamic Fashion</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Petticoats</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isWesternHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setWesternHovered(true)}
          onMouseLeave={() => setWesternHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Topwear</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">All Topwear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Tops</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Dresses</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">T-shirts</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Jumpsuits</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Bottomwear</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">All Bottomwear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Jeans & Jeggings</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Palazzos</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Shorts</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Skirts</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Innerwear</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Bra</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Women Innerwear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Briefs</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Sleepwear</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Nightsuits</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Women Nightdress</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Maternity Wear</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">All Maternity & Feedingwear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Maternity Kurtis & Dresses</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Sports Wear</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">All Women Sportwear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Sports Bra</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isMenHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setMenHovered(true)}
          onMouseLeave={() => setMenHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Top Wear</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">All Top Wear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Tshirts</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Shirts</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Winter Wear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Jackets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Sweater and Sweatshirts</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Bottom Wear</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Track Pants</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">All Bottomwear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Jeans</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Trousers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Shorts</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Men Accessories</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">All Men Accessories</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Watches</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Belts & Wallets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Jewellery</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Bags</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Men Footwear</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Men Footwear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Casual Shoes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Sports Shoes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Flip Flops & Sandals</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Formal Shoes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Loafers</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Ethnic Wear</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Kurtas Sets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Ethnic Jackets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Bottomwear</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Inner & Sleep Wear</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">All Inner & Sleep Wear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Boxers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Underwears</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isKidsHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setKidsHovered(true)}
          onMouseLeave={() => setKidsHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Boys & Girls 2+ Years</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Dresses</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Boys Sets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Girls Sets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Ethnicwear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Nightwear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Winter Wear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Top Wear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Bottomwear</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Infant 0-2 Years</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Rompers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Baby Sets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Ethnicwear</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Toys & Accessories</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Soft Toys</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Footwear</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Stationery</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Watches</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Bags & Backpacks</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Baby Care</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Baby Bedding & Accessories</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">All Baby Care</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Newborn Care</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isHomeHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setHomeHovered(true)}
          onMouseLeave={() => setHomeHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Kitchen & Appliances</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">View All</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Kitchen Tools</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Storage & Organizers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Appliances</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Cookware</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Dinnerware</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Bakeware</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Glasses & Barware</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Home Furnishing</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Bedsheets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Curtains & Sheers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Pillows, Cushions & Covers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Cushions & Cushion Covers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Carpets & Doormats</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Mattress Protectors</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Sofa & Diwan Sets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Towels & Bathrobes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Blankets, Quilts & Dohars</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Home Decor</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">All Home Decor</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Appliances Covers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Clocks</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Storage & Organizers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Showpieces</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Paintings & Photoframes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Stickers & Wallpapers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Lights</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Gifts & Mugs</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Kitchen & Dining</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Kitchen Storage</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Cookware & Bakeware</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Home Improvement</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">All Home Essentials</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Cleaning Supplies</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Gardening</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Bathroom Accessories</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Insect Protection</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Home Tools</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isBeautyHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setBeautyHovered(true)}
          onMouseLeave={() => setBeautyHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Makeup</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Face</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Eyes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Lips</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Nails</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Makeup Kits</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Brushes & Tools</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Makeup Accessories</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Skincare</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">View All</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Face Masks & Peels</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Facecare</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Haircare</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Bath & Shower</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Baby & Mom</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Baby Personal Care</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Mom Care</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Men's Care</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Beard Care</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Fragrances for Men</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Healthcare</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Ear Buds & Cleaners</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Condoms</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Sanitary Pads</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Dental Care</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Weight Management</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Health Monitors</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isJewelleryHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setJewelleryHovered(true)}
          onMouseLeave={() => setJewelleryHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Jewellery</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">All Jewellery</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Jewellery Set</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Earrings & Studs</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Mangalsutras</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Bangles</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Necklaces</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Rings</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Kamarbandh & Maangtika</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Anklets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Men Jewellery</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Oxidised</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Men Accessories</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">View All</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Watches</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Belts & Wallets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Caps & Hats</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Women Accessory</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Watches</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Hair Accessories</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Sunglasses</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Socks</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Scarves and Stoles</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isBagsHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setBagsHovered(true)}
          onMouseLeave={() => setBagsHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Women Bags</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">All Women Bags</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Handbags</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Clutches</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Slingbags</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Wallets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Backpacks</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Men Bags</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Men Wallets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Crossbody Bags & Sling Bags</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Waist Bags</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Travel Bags, Luggage and Accessories</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">View All</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Duffel & Trolley Bags</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Men Footwear</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Sports Shoes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Casual Shoes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Formal Shoes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Sandals</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Loafers</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Women Footwear</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Flats</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">View All</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Bellies</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Heels and Sandals</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Boots</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Flipflops & Slippers</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Kids Footwear</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">View All</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Boys Shoes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Girls Shoes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Casual Shoes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Flipflops & Slippers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Sandals</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isElectronicsHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setElectronicsHovered(true)}
          onMouseLeave={() => setElectronicsHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Audio</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Bluetooth Headphones & Earphones</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Wired Headphones & Earphones</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Speakers</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Mobile & Accessories</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Smartwatches</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Mobile Holders</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Mobile Cases and Covers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Mobile Chargers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Mobile & Accessories - View All</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5">
            <h3 className="listHead">Smart Wearables</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">VR Box</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Tripod</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Microphone</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Photo & Video Accessories</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isSportsHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseLeave={() => setSportsHovered(false)}
          onMouseEnter={() => setSportsHovered(true)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Fitness</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Yoga</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Hand Grip Strengthener</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Tummy Trimmers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Skipping Ropes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Sweat Belts</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Sports</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Badminton</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Skating</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Football</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Cricket</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isCarsHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setCarsHovered(true)}
          onMouseLeave={() => setCarsHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Car Accessories</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Car Covers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Interior Accessories</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Car Mobile Holders</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Car Repair Assistance</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Motorbike Accessories</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">Helmets</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Bike Accessories</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Bike LED Lights</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Safety Gear & Clothing</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isStationeryHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setStationeryHovered(true)}
          onMouseLeave={() => setStationeryHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Office Supplies & Stationery</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Diaries & Notebooks</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Adhesives & Tapes</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Files & Desk Organizers</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Pens & Pencils</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Paintings & Photoframes</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isPetsHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setPetsHovered(true)}
          onMouseLeave={() => setPetsHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Pet Supplies</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Pet Toys</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Pet Grooming</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Pet Food</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Pet Clothing</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Pet Health</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isFoodsHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setFoodsHovered(true)}
          onMouseLeave={() => setFoodsHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Food & Drinks</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Dry Fruits</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Tea</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Masalas</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Coffee</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Ready to Cook</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isMusicalHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setMusicalHovered(true)}
          onMouseLeave={() => setMusicalHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Musical Instruments</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">String Instruments</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Musical Accessories</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Wind Instruments</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">All Musical Instruments</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}

      {isBooksHovered && (
        <div
          className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
          onMouseEnter={() => setBooksHovered(true)}
          onMouseLeave={() => setBooksHovered(false)}
        >
          <div className="py-2 px-5">
            <h3 className="listHead">Fiction & Non-Fiction</h3>
            <div className="text-gray-500 leading-7 text-sm">
              <span className="listItem">
                <a href="#">Children's Books</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Self Help Books</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Novels</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Economics & Commerce</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Religious Books</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">View All Books</a>
              </span>
              <br />
            </div>
          </div>
          <div className="py-2 px-5 bg-slate-100 rounded-lg">
            <h3 className="listHead">Academic Books</h3>
            <div className="text-gray-500 font-medium leading-7 text-sm">
              <span className="listItem">
                <a href="#">School Textbooks & Guides</a>
              </span>
              <br />
              <span className="listItem">
                <a href="#">Reference Books</a>
              </span>
              <br />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarCategory;

// import React, { useState } from "react";

// const categories = [
//   {
//     name: "Women Ethnic",
//     key: "isEthnicHovered",
//     subcategories: [
//       {
//         title: "Sarees",
//         items: [
//           "All Sarees",
//           "Silk Sarees",
//           "Banarasi Silk Sarees",
//           "Cotton Sarees",
//           "Georgette Sarees",
//           "Chiffon Sarees",
//           "Heavy Work Sarees",
//           "Net Sarees",
//         ],
//       },
//       {
//         title: "Kurtis",
//         items: [
//           "All Kurtis",
//           "Anarkali Kurtis",
//           "Rayon Kurtis",
//           "Cotton Kurtis",
//           "Chikankari Kurtis",
//         ],
//       },
//       {
//         title: "Kurta Sets",
//         items: [
//           "All Kurta Sets",
//           "Kurta Palazzo Sets",
//           "Rayon Kurta Sets",
//           "Kurta Pant Sets",
//           "Cotton Kurta Sets",
//           "Sharara Sets",
//         ],
//       },
//       {
//         title: "Dupatta Sets",
//         items: ["Cotton Sets", "Rayon Sets", "Printed Sets"],
//       },
//       {
//         title: "Suits & Dress Material",
//         items: [
//           "All Suits & Dress Material",
//           "Cotton Suits",
//           "Embroidered Suits",
//           "Crepe Suits",
//           "Silk Suits",
//           "Patiala Suits",
//         ],
//       },
//       {
//         title: "Lehengas",
//         items: [
//           "Lehenga Cholis",
//           "Net Lehenga",
//           "Bridal Lehenga"
//         ]
//       },
//       {
//         title: "Other Ethnic",
//         items: [
//           "Blouses",
//           "Dupattas",
//           "Lehanga",
//           "Gown",
//           "Skirts & Bottomwear",
//           "Islamic Fashion",
//           "Petticoats"
//         ]
//       }
      
//     ],
//   },
//   {
//     name: "Women Western",
//     key: "isWesternHovered",
//     subcategories: [
//       {
//         title: "Topwear",
//         items: ["All Topwear", "Tops", "Dresses", "T-shirts", "Jumpsuits"],
//       },
//       {
//         title: "Bottomwear",
//         items: [
//           "All Bottomwear",
//           "Jeans & Jeggings",
//           "Palazzos",
//           "Shorts",
//           "Skirts",
//         ],
//       },
//       {
//         title: "Innerwear",
//         items: [
//           "Bra",
//           "Women Innerwear",
//           "Briefs"
//         ]
//       },
//       {
//         title: "Sleepwear",
//         items: [
//           "Nightsuits",
//           "Women Nightdress"
//         ]
//       },
//       {
//         title: "Maternity Wear",
//         items: [
//           "All Maternity & Feedingwear",
//           "Maternity Kurtis & Dresses"
//         ]
//       },
//       {
//         title: "Sports Wear",
//         items: [
//           "All Women Sportwear",
//           "Sports Bra"
//         ]
//       }
      
//     ],
//   },
//   {
//     name: "Men",
//     key: "isMenHovered",
//     subcategories: [
//       {
//         title: "Top Wear",
//         items: [
//           "All Top Wear",
//           "Tshirts",
//           "Shirts",
//           "Winter Wear",
//           "Jackets",
//           "Sweater and Sweatshirts",
//         ],
//       },
//       {
//         title: "Bottom Wear",
//         items: ["Track Pants", "All Bottomwear", "Jeans", "Trousers", "Shorts"],
//       },
//       {
//         title: "Men Accessories",
//         items: [
//           "All Men Accessories",
//           "Watches",
//           "Belts & Wallets",
//           "Jewellery",
//           "Bags"
//         ]
//       },
//       {
//         title: "Men Footwear",
//         items: [
//           "Men Footwear",
//           "Casual Shoes",
//           "Sports Shoes",
//           "Flip Flops & Sandals",
//           "Formal Shoes",
//           "Loafers"
//         ]
//       },
//       {
//         title: "Ethnic Wear",
//         items: [
//           "Kurtas Sets",
//           "Ethnic Jackets",
//           "Bottomwear"
//         ]
//       },
//       {
//         title: "Inner & Sleep Wear",
//         items: [
//           "All Inner & Sleep Wear",
//           "Boxers",
//           "Underwears"
//         ]
//       }
      
//     ],
//   },
//   {
//     name: "Kids",
//     key: "isKidsHovered",
//     subcategories: [
//       {
//         title: "Boys & Girls 2+ Years",
//         items: [
//           "Dresses",
//           "Boys Sets",
//           "Girls Sets",
//           "Ethnicwear",
//           "Nightwear",
//           "Winter Wear",
//           "Top Wear",
//           "Bottomwear"
//         ]
//       },
//       {
//         title: "Infant 0-2 Years",
//         items: [
//           "Rompers",
//           "Baby Sets",
//           "Ethnicwear"
//         ]
//       },
//       {
//         title: "Toys & Accessories",
//         items: [
//           "Soft Toys",
//           "Footwear",
//           "Stationery",
//           "Watches",
//           "Bags & Backpacks"
//         ]
//       },
//       {
//         title: "Baby Care",
//         items: [
//           "Baby Bedding & Accessories",
//           "All Baby Care",
//           "Newborn Care"
//         ]
//       }
//     ]
//   },
//   {
//     name: "Home & Kitchen",
//     key: "isHomeHovered",
//     subcategories: [
//       {
//         title: "Kitchen & Appliances",
//         items: [
//           "View All",
//           "Kitchen Tools",
//           "Storage & Organizers",
//           "Appliances",
//           "Cookware",
//           "Dinnerware",
//           "Bakeware",
//           "Glasses & Barware"
//         ]
//       },
//       {
//         title: "Home Furnishing",
//         items: [
//           "Bedsheets",
//           "Curtains & Sheers",
//           "Pillows, Cushions & Covers",
//           "Cushions & Cushion Covers",
//           "Carpets & Doormats",
//           "Mattress Protectors",
//           "Sofa & Diwan Sets",
//           "Towels & Bathrobes",
//           "Blankets, Quilts & Dohars"
//         ]
//       },
//       {
//         title: "Home Decor",
//         items: [
//           "All Home Decor",
//           "Appliances Covers",
//           "Clocks",
//           "Storage & Organizers",
//           "Showpieces",
//           "Paintings & Photoframes",
//           "Stickers & Wallpapers",
//           "Lights",
//           "Gifts & Mugs"
//         ]
//       },
//       {
//         title: "Kitchen & Dining",
//         items: [
//           "Kitchen Storage",
//           "Cookware & Bakeware"
//         ]
//       },
//       {
//         title: "Home Improvement",
//         items: [
//           "All Home Essentials",
//           "Cleaning Supplies",
//           "Gardening",
//           "Bathroom Accessories",
//           "Insect Protection",
//           "Home Tools"
//         ]
//       }
//     ]
//   },
  
  
// ];

// const NavbarCategory = () => {
//   const [hoveredCategory, setHoveredCategory] = useState(null);

//   return (
//     <div>
//       {/* Navigation Bar */}
//       <div className="w-screen border-b border-black font-medium px-2 overflow-hidden">
//         <div className="flex overflow-x-auto text-sm hide-scrollbar me-3 whitespace-nowrap scroll-smooth">
//           {categories.map((category) => (
//             <div
//               key={category.key}
//               className={`category ${
//                 hoveredCategory === category.key ? "hoverCate" : ""
//               }`}
//               onMouseEnter={() => setHoveredCategory(category.key)}
//               onMouseLeave={() => setHoveredCategory(null)}
//             >
//               <p>{category.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dynamic Hover Menu */}
//       {categories.map(
//         (category) =>
//           hoveredCategory === category.key && (
//             <div
//               key={category.key}
//               className="flex hoverCategory w-100 mx-5 list-none border-x border-b border-gray-400 shadow-lg"
//               onMouseEnter={() => setHoveredCategory(category.key)}
//               onMouseLeave={() => setHoveredCategory(null)}
//             >
//               {category.subcategories.map((sub, index) => (
//                 <div
//                   key={sub.title}
//                   className={`py-2 px-5 ${
//                     index % 2 !== 0 ? "bg-slate-100 rounded-lg" : ""
//                   }`}
//                 >
//                   <h3 className="listHead">{sub.title}</h3>
//                   <div className="text-gray-500 text-sm leading-7">
//                     {sub.items.map((item) => (
//                       <>
//                         <span key={item} className="listItem">
//                           <a href="#">{item}</a>
//                         </span>
//                         <br />
//                       </>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )
//       )}
//     </div>
//   );
// };

// export default NavbarCategory;
