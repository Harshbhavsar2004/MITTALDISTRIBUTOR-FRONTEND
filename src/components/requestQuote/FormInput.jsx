import * as React from "react";

function FormInput({ id, placeholder, type }) {
  const baseClasses =
    "px-9 py-5 bg-white rounded-[30px] max-md:px-5 max-md:max-w-full";

  return (
    <div className={`${type !== "textarea" ? "mt-5" : "mt-5"}`}>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          className={`${baseClasses} pt-6 pb-24 w-full`}
          aria-label={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className={`${baseClasses} w-full`}
          aria-label={placeholder}
        />
      )}
    </div>
  );
}

export default FormInput;
