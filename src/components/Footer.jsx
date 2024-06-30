import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { LiaFileSolid, LiaFlagUsaSolid } from "react-icons/lia";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="container mx-auto py-8 bg-[#2B1E59]">
      <div className="grid grid-cols-4">
        <div className="flex flex-col gap-4">
          <img
            className="h-[50px] w-[148px]"
            src="images/doculogo.svg"
            alt="logo"
          ></img>
          <p className="font_Heebo text-[#FFFFFF] text-sm opacity-[70%]">
            Aspire is a team of AI Nerds, headquartered in USA.
          </p>
          <div className="font_Heebo flex gap-3 items-center">
            <AiOutlineMail className="text-[#ffffff6d]" />
            <span className="font_Heebo text-[#FFFFFF] opacity-[70%]">
              info@domainocr.com
            </span>
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <h2 className="font_Poppins text-[#FFFFFF] text-xl">Use Cases</h2>
          <div className="font_Heebo text-[#FFFFFF] opacity-[70%] text-sm pt-5">
            <ul>
              <li>Expense Management</li>
              <li>Invoice Management</li>
              <li>KYC / AML</li>
              <li>Containers</li>
              <li>Car Insurance</li>
              <li>Loan Application</li>
              <li>License Plates</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <h2 className="font_Poppins text-[#FFFFFF] text-xl">Company</h2>
          <div className="font_Heebo text-[#FFFFFF] opacity-[70%] text-sm pt-5">
            <ul>
              <li>About</li>
              <li>Documentation</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col pt-4 gap-5">
          <h2 className="font_Poppins text-[#FFFFFF] text-xl">Get in Touch</h2>
          <div className="font_Heebo flex flex-col gap-1">
            <div className="flex gap-3 text-[#FFFFFF] opacity-[70%]">
              <LiaFlagUsaSolid />
              <span className="text-sm">
                8 The Green, Suite B, Dover, Delaware USA, 19901
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#FFFFFF] opacity-[70%]">
              <FiPhoneCall />
              <span className="text-sm">+1 302 261 2617</span>
            </div>
          </div>
          <div className="font_Heebo flex flex-col gap-1">
            <div className="flex gap-3 text-[#FFFFFF] opacity-[70%]">
              <LiaFlagUsaSolid />
              <span className="text-sm">
                402, Vishwa Complex, Navrangpura, Ahmedabad, Gujarat - 380009
              </span>
            </div>
            <div className="flex items-center gap-3 text-[#FFFFFF] opacity-[70%]">
              <FiPhoneCall />
              <span className="text-sm">+91 799 007 3201</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <hr className="text-[#FFFFFF] opacity-[20%]"></hr>
      </div>
      <div className="flex justify-between items-center">
        <p className="font_Heebo text-[#FFFFFF]">© Aspire Softserv 2023 all rights reserved</p>
        <div className="flex gap-2">
          <div className="h-[50px] w-[50px] bg-[#40346a] flex items-center justify-center rounded-[50%]">
            <FaTwitter className="text-[#FFFFFF] text-[25px]" />
          </div>
          <div className="h-[50px] w-[50px] bg-[#40346a] flex items-center justify-center rounded-[50%]">
            <FaYoutube className="text-[#FFFFFF] text-[25px]" />
          </div>
          <div className="h-[50px] w-[50px] bg-[#FFFFFF] flex items-center justify-center rounded-[50%]">
            <FaLinkedinIn className="text-[#9F77EB] text-[25px]" />
          </div>
          <div className="h-[50px] w-[50px] bg-[#40346a] flex items-center justify-center rounded-[50%]">
            <FaFacebookF className="text-[#FFFFFF] text-[25px]" />
          </div>
          <div className="h-[50px] w-[50px] bg-[#40346a] flex items-center justify-center rounded-[50%]">
            <FaInstagram className="text-[#FFFFFF] text-[25px]" />
          </div>
          <div className="h-[50px] w-[50px] bg-[#40346a] flex items-center justify-center rounded-[50%]">
            <FaPinterestP className="text-[#FFFFFF] text-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
