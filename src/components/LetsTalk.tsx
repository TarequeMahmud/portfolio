"use client";

import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const LetsTalk = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/email-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Something went wrong. Please retry later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="letstalk"
      className="w-[90%] sm:w-[85%] md:w-[80%] max-w-4xl mx-auto flex flex-col items-center py-10 sm:py-14 text-white"
    >
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-3 mb-2 tracking-wide">
        LET&#39;S TALK
      </h1>
      <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg max-w-2xl px-2">
        Feel free to reach out to me directly or send a message using the form
        below.
      </p>
      <hr className="w-full mt-4 mb-8 border-gray-600" />

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="
          w-full 
          flex flex-col gap-4 
          p-4 sm:p-6 md:p-8 
          bg-linear-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] 
          rounded-2xl shadow-lg
        "
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="
            w-full p-3 sm:p-4 rounded-lg 
            bg-black/20 
            placeholder-gray-400 text-white 
            focus:outline-none focus:ring-2 focus:ring-cyan-500
            text-sm sm:text-base
          "
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="
            w-full p-3 sm:p-4 rounded-lg 
            bg-black/20 
            placeholder-gray-400 text-white 
            focus:outline-none focus:ring-2 focus:ring-cyan-500
            text-sm sm:text-base
          "
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="
            w-full p-3 sm:p-4 rounded-lg 
            bg-black/20 
            placeholder-gray-400 text-white 
            focus:outline-none focus:ring-2 focus:ring-cyan-500
            text-sm sm:text-base
          "
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`
            flex justify-center items-center gap-2 
            py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold
            transition-transform active:scale-95
            ${loading
              ? "bg-indigo-500 cursor-not-allowed"
              : "bg-linear-to-r from-cyan-500 to-blue-600 hover:opacity-90"
            }
          `}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin h-5 w-5" />
              <span>Sending…</span>
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {/* Status Message */}
        {status && (
          <p
            className={`text-center mt-3 text-sm sm:text-base ${status.includes("✅")
              ? "text-green-400"
              : status.includes("❌")
                ? "text-red-400"
                : "text-yellow-400"
              }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default LetsTalk;
