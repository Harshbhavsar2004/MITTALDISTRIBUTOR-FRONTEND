import * as React from "react";
import FormInput from "./FormInput";

function RequestQuoteForm() {
  const formInputs = [
    { id: "name", placeholder: "Complete Name", type: "text" },
    { id: "email", placeholder: "Email Address", type: "email" },
    { id: "phone", placeholder: "Phone No", type: "tel" },
    { id: "message", placeholder: "Message", type: "textarea" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-10 w-full text-base bg-green-600 rounded-[30px] text-stone-500 max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      {formInputs.map((input) => (
        <FormInput key={input.id} {...input} />
      ))}
      <button
        type="submit"
        className="self-start px-12 py-5 mt-8 font-bold text-center text-white bg-red-600 rounded-[30px] max-md:px-5"
      >
        Send Message
      </button>
    </form>
  );
}

export default RequestQuoteForm;
