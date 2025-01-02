import React, { useState } from "react";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
      setStatus({ success: false, message: "All fields are mandatory." });
      return;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
      setStatus({ success: false, message: "Please enter a valid email address." });
      return;
    }

    // Phone number validation
    if (!/^\d{10}$/.test(formDetails.phone)) {
      setStatus({ success: false, message: "Phone number must be exactly 10 digits." });
      return;
    }

    setButtonText("Sending...");

    // Prepare form data for Web3Forms
    const formData = {
      access_key: "438660e6-f6b8-42e9-906f-ae47e766c881", // Replace with your Web3Forms access key
      name: `${formDetails.firstName} ${formDetails.lastName}`,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());

    setButtonText("Send");
    setFormDetails(formInitialDetails);

    if (res.success) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="First Name"
            value={formDetails.firstName}
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
            required
          />
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Last Name"
            value={formDetails.lastName}
            onChange={(e) => onFormUpdate("lastName", e.target.value)}
            required
          />
        </div>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email Address"
          value={formDetails.email}
          onChange={(e) => onFormUpdate("email", e.target.value)}
          required
          pattern="\S+@\S+\.\S+"
        />
        <input
          className="p-2 bg-[#ccd6f6]"
          type="tel"
          placeholder="Phone No."
          value={formDetails.phone}
          onChange={(e) => onFormUpdate("phone", e.target.value)}
          required
          pattern="^\d{10}$"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 mt-4"
          rows="10"
          placeholder="Message"
          value={formDetails.message}
          onChange={(e) => onFormUpdate("message", e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          {buttonText}
        </button>
        {status.message && (
          <p
            className={
              status.success === false
                ? "text-red-500 text-center"
                : "text-green-500 text-center"
            }
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
