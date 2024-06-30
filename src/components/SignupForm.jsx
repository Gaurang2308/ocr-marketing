import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";


const SignupForm = () => {
  return (
    <div className="container mx-auto py-16 bg-signup-background">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="font_Poppins text-4xl font-bold leading-loose">
              Sign up for a Demo Today
            </h1>
            <p className="font_Heebo">
              Please share your details for our subject matter experts to reach
              out to you for a demo
            </p>
          </div>
          <div className=" font_Heebo flex flex-col gap-4">
            <div className="text-[#868686] bg-[#FFFFFF29]">
              <input
                className="w-full py-2 px-2 border-[#868686] border-2 border-solid opacity-[40%] rounded"
                type="text"
                placeholder="Name*"
              ></input>
            </div>
            <div className="text-[#868686] bg-[#FFFFFF29]">
              <input
                className="w-full py-2 px-2 border-[#868686] border-2 border-solid opacity-[40%] rounded"
                type="text"
                placeholder="Official email id only*"
              ></input>
            </div>
            <div className="text-[#868686] bg-[#FFFFFF29]">
              <input
                className="w-full py-2 px-2 border-[#868686] border-2 border-solid opacity-[40%] rounded"
                type="text"
                placeholder="Company Name*"
              ></input>
            </div>
            <div className="text-[#868686] bg-[#FFFFFF29]">
              <input
                className="w-full py-2 px-2 border-[#868686] border-2 border-solid opacity-[40%] rounded"
                type="text"
                placeholder="Phone No*"
              ></input>
            </div>
            <div className="text-[#868686] bg-[#FFFFFF29]">
              <input
                className="w-full py-2 px-2 border-[#868686] border-2 border-solid opacity-[40%] rounded"
                type="text"
                placeholder="Country*"
              ></input>
            </div>
            <div className="flex gap-2">
              <input
                className="h-5 w-5 py-2 px-2"
                id="checkbox"
                type="checkbox"
                placeholder="Name*"
              />
              <label className="font_Heebo text-sm" for="checkbox">
                We will add your info to our CRM for contacting you regarding
                your request. For more info please consult our privacy policy
              </label>
            </div>
          </div>
          <div className="font_Heebo border-2 bg-[#9F77EB] w-max py-2 px-5 text-[#FFFFFF] my-5 border-solid rounded">
            <button>Submit Now</button>
          </div>
        </div>
        <div className="bg-[#FFFFFF] card text-center flex flex-col items-center gap-8 py-8">
          <RiDoubleQuotesL className="h-10 w-10 text-[#9F77EB] opacity-[60%]"/>
          <p>We will add your info to our CRM for contacting you regarding your request. For more info please consult our <b> privacy policy </b></p>
          <div>
            <img src="images/Ellipse 117.svg"></img>
          </div>
          <h3 className="text-[#9F77EB]">Eleanor Pena</h3>
          <span className="text-[#00000099]">Marketing Manager at Stiff</span>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
