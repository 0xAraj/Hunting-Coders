import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  };

  return (
    <>
      <div>
        <h2 className="text-center text-3xl font-bold my-7">Contact Us</h2>
        <form
          action="https://formspree.io/f/meqwvawr"
          method="POST"
          className="max-w-lg mx-auto"
          onSubmit={submitHandler}
        >
          <div className="my-3">
            <label htmlFor="name" className="text-lg">
              Name :
            </label>
            <input
              className="py-1 px-2 border-black border-2 rounded-md w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
              name="name"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              className="py-1 px-2 border-black border-2 rounded-md w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="abc@gmail.com"
              name="email"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="phone" className="text-lg">
              Phone
            </label>
            <input
              className="py-1 px-2 border-black border-2 rounded-md w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="993xxxx4xx"
              name="phone"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="message" className="text-lg">
              Message
            </label>
            <textarea
              className="py-1 px-2 border-black border-2 rounded-md w-full"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Message..."
              name="message"
              required
            />
          </div>
          <button className="border-2 border-black py-1 px-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
