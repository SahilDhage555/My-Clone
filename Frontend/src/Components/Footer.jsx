import React from "react";
import playstore from "../Images/playstore-download.png";
import appstore from "../Images/appstore-download.png";
import facebookIcon from "../Images/facebookIcon.webp";
import instaIcon from "../Images/instagramIcon.webp";
import youtubeIcon from "../Images/youtubeIcon.webp";
import linkedinIcon from "../Images/linkedinIcon.webp";
import twitterIcon from "../Images/twitterIcon.webp";
import MoreAboutMeesho from "./MoreAboutMeesho"; 

const Footer = () => {
  
  return (
    <div className="mt-5">
      <div className="flex justify-center items-center flex-col gap-8 py-6 bg-slate-100">
        {/* 🔹 Top Section - Branding & Download Links */}
        <div className="flex gap-4 mb-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-[27px] font-semibold text-gray-700">
              Shop Non-Stop on Meesho
            </h1>
            <p className="w-64 text-sm text-gray-700">
              Trusted by more than 1 Crore Indians.  
              Cash on Delivery | Free Delivery
            </p>
            <div className="flex gap-2">
              <a href="https://play.google.com/store/apps/details?id=com.meesho.supply" target="_blank">
                <img src={playstore} alt="Play Store" className="w-[140px]" />
              </a>
              <a href="https://apps.apple.com/us/app/meesho-online-shopping/id1457958492" target="_blank">
                <img src={appstore} alt="App Store" className="w-[140px]" />
              </a>
            </div>
          </div>

          {/* 🔹 Footer Navigation Links */}
          <div className="flex flex-col font-medium gap-2 text-gray-700 leading-6 w-[120px]">
            <a href="https://www.meesho.io/jobs">Careers</a>
            <a href="https://supplier.meesho.com/">Become a Supplier</a>
            <a href="https://www.meesho.com/legal/hall-of-fame?embed=true">Hall of Fame</a>
            <a href="https://www.meesho.com/sitemap">Sitemap</a>
          </div>

          <div className="flex flex-col gap-3 text-gray-700 font-medium">
            <a href="https://www.meesho.com/legal?embed=true">Legal & Policies</a>
            <a href="https://www.meesho.io/blog">Meesho Tech Blog</a>
            <a href="https://www.meesho.com/notices_and_returns?embed=true">Notices & Returns</a>
          </div>

          {/* 🔹 Social Media Icons */}
          <div>
            <h1 className="text-[17px] font-semibold">Reach out to us</h1>
            <div className="mt-3 flex gap-3">
              <a href="https://www.facebook.com/meeshosupply" target="_blank">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/meeshoapp/" target="_blank">
                <img src={instaIcon} alt="Instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UCaGHIRKYUYlaI_ZAt2hxpjw" target="_blank">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
              <a href="https://www.linkedin.com/company/meesho" target="_blank">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://x.com/Meesho_Official/?mx=2" target="_blank">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>

          {/* 🔹 Contact Information */}
          <div className="w-[220px]">
            <h1 className="text-[17px] font-semibold">Contact Us</h1>
            <p className="text-[10.5px] text-gray-700">
              Fashnear Technologies Pvt. Ltd. <br />
              CIN: U74900KA2015PTC082263 <br />
              3rd Floor, Wing-E, Helios Business Park,  
              Kadubeesanahalli Village, Varthur Hobli,  
              Outer Ring Road, Bellandur, Bangalore, India, 560103 <br />
              <strong>Email:</strong> query@meesho.com <br />
              © 2015-2025 Meesho.com
            </p>
          </div>
        </div>

        {/* 🔹 More About Meesho Section (Dropdown) */}
        <MoreAboutMeesho />
      </div>
    </div>
  );
};

export default Footer;
