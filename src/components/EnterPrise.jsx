import React from "react";


const EnterPrise = () => {
  return (
    <div className="container mx-auto py-16 bg-[#2B1E59] ">
      <div className="text-center text-[#FFFFFF]">
        <h1 className="font_Poppins font-bold text-3xl ">
          Enterprise grade SLA
        </h1>
        <p className="font_Heebo py-4">
          Trusted by leading SaaS companies across different industries such as
          Fintech, HRIS, Accounting and more.
        </p>
      </div>
      <div className="grid grid-cols-3 text-[#FFFFFF] py-8">
        <div className="flex flex-col text-center items-center justify-center gap-2">
          <div className="flex items-center   ">
            <p>
              <span className="text-4xl">&lt;30Sec</span>
            </p>
          </div>
          <p>Invoice processing time reduced to &lt;30 seconds</p>
        </div>
        <div className="flex flex-col text-center items-center justify-center gap-2">
            <div className="text-4xl">
              65%
            </div>
            <p>Cost reduction due to accounts payable automation</p>

        </div>
        <div className="flex flex-col text-center items-center justify-center gap-2">
            <div className="text-4xl">
              99%
            </div>
            <p>Touchless processing using smart validation rules</p>

        </div>
      </div>
    </div>
  );
};

export default EnterPrise;
