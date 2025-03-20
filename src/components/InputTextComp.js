import React from "react";

export const InputTextComp = ({
  placeholder,
  label,
  value,
  type,
  onChange = () => { },
  required = false,
  requireText = false,
}) => {
  return (
    <div>
      {requireText ? (
        <div className="flex items-center">
          <p className="text-black font-Nunito font-extrabold text-[1rem]">{label}</p>
          <p className="text-red-500 ml-2 font-Nunito font-bold italic text-sm">{`(Required)`}</p>
        </div>
      ) : (
        <div className="flex items-center font-Nunito font-extrabold text-[1rem]">
          <p className="text-sm mb-1">{label}</p>
          {required ? <p className="text-red-500 ml-2">*</p> : null}
        </div>
      )}

      <div className="flex items-center border border-[#686868E0] h-[45px] px-3">
        <input
          className="outline-none border-none w-full"
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={(text) => {
            onChange(text?.target?.value);
          }}
        />
      </div>
    </div>
  );
};
