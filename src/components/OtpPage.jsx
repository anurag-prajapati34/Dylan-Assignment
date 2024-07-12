import React from "react";

function OtpPage() {
  return (
    <div className="h-full w-full flex flex-col gap-8 ">
      <div className="w-full flex justify-between">
        <h1 className="requiredField text-xl font-semibold">Enter OTP sent on 999-999-9999</h1>{" "}
        <p className="underline underline-offset-2 cursor-pointer">Change</p>
      </div>

      <div className="w-full flex flex-col gap-4
      ">
      <input placeholder="0000" className="input-field"></input>
      <p className="underline underline-offset-2 text-end cursor-pointer">resend OTP</p>

      </div>
    </div>
  );
}

export default OtpPage;
