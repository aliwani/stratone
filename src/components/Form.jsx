import React, { useState } from "react";
import FormBtn from "./resuables/FormBtn";
import { motion } from "framer-motion";

function Form() {
  // 1. Har field ka state banaya
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleForm(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 h-157 bg-white p-0.5"
    >
      <form
        onSubmit={handleForm}
        className="w-full h-full flex flex-col gap-5 text-white p-5 md:p-7.5 xl:p-12.5 text-lg font-clashRegular tracking-wider font-meduim rounded-2xl bg-[#111111]"
      >
        <div className="flex flex-col gap-2">
          {/* htmlFor — React mein for ki jagah htmlFor likhte hain */}
          <label htmlFor="name">Name*</label>
          <input
            className="placeholder:text-sm py-2 font-clashMeduim px-4 rounded-sm bg-[#202020]"
            placeholder="Riley Brooks"
            type="text"
            id="name"
            name="name" // 5. name attribute zaroori hai handleChange ke liye
            value={form.name} // 6. controlled input — state se value aati hai
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email address*</label>
          <input
            className="placeholder:text-sm py-2 font-clashMeduim px-4 rounded-sm bg-[#202020]"
            placeholder="example@example.com"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject">Subject*</label>
          <input
            className="placeholder:text-sm py-2 font-clashMeduim px-4 rounded-sm bg-[#202020]"
            placeholder="What's the subject"
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            className="placeholder:text-sm py-2 font-clashMeduim px-4 h-25 rounded-sm bg-[#202020]"
            placeholder="Tell us the purpose"
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        {/* 7. Status messages */}
        {status === "success" && (
          <p className="text-green-400 text-sm">
            Message submitted succesfully! will contact you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm">
            Something went wrong! Try again.
          </p>
        )}

        {/* 8. Button disable hoga jab loading ho */}
        <FormBtn
          text={status === "loading" ? "Submitting..." : "Submit"}
          disabled={status === "loading"}
        />
      </form>
    </motion.div>
  );
}

export default Form;
