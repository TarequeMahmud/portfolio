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

    const formData = new FormData(e.currentTarget);
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
      console.log(res);

      if (res.ok && result.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (err) {
      setStatus("Something went wrong.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-[80%] flex flex-col items-center py-16 text-white"
      id="letstalk"
    >
      <h1 className="text-3xl font-bold mt-5">LET&#39;S TALK:</h1>
      <p className="text-gray-300 text-center max-w-xl">
        Feel free to reach out to me directly or send a message using the form
        below.
      </p>
      <hr className="w-full mt-4 mb-8" />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl flex flex-col gap-4 p-6 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-2xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="p-3 rounded-lg bg-black/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 rounded-lg bg-black/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
          className="p-3 rounded-lg bg-black/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <button
          type="submit"
          disabled={loading}
          className={`flex justify-center items-center gap-2 ${
            loading
              ? "bg-indigo-500 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-500 to-blue-500"
          } text-white py-3 px-6 rounded-lg font-semibold transition-transform hover:scale-105`}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin h-5 w-5" />
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {status && <p className="text-center mt-2 text-sm">{status}</p>}
      </form>
    </div>
  );
};

export default LetsTalk;
