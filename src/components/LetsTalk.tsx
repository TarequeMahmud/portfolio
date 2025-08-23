"use client";

const LetsTalk = () => {
  return (
    <div
      className="w-[80%] flex flex-col items-center py-16  text-white"
      id="letstalk"
    >
      <h1 className="text-3xl font-bold mt-5">LET&#39;S TALK:</h1>
      <p className="text-gray-300 text-center max-w-xl">
        Feel free to reach out to me directly or send a message using the form
        below.
      </p>
      <hr className="w-full mt-4  mb-8" />

      {/* Form */}
      <form className="w-full max-w-3xl flex flex-col gap-4 p-6 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-2xl shadow-lg">
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded-lg bg-black/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg bg-black/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="p-3 rounded-lg bg-black/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default LetsTalk;
