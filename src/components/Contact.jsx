import React from 'react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been simulated.');
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 pt-8" id="contact">
      <div className="flex flex-col justify-center">
        <h2 className="text-[64px] font-black uppercase leading-tight mb-6">
          Let's build<br />together
        </h2>
        <p className="text-[16px] leading-6 max-w-md mb-8">
          Ready to collaborate on your next project or just want to say hi? My inbox is always open.
        </p>
        <div className="flex flex-col gap-4">
          <div className="bg-white text-black px-6 py-3 font-bold border-2 border-black hard-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100 flex items-center gap-2 w-fit">
            <span className="material-symbols-outlined">mail</span>
            <span className="font-bold">hanipanpangabekti@gmail.com</span>
          </div>
          <div className="bg-white text-black px-6 py-3 font-bold border-2 border-black hard-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100 flex items-center gap-2 w-fit">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/whatsapp.svg"
              alt="WhatsApp"
              className="w-5 h-5 object-contain"
            />
            <span className="font-bold">+62 858 7865 7632</span>
          </div>
        </div>
      </div>
      <div className="bg-primary-container border-2 border-black hard-shadow p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[14px] font-bold uppercase mb-2">Full Name</label>
            <input
              className="w-full bg-white border-2 border-black p-4 focus:outline-none focus:hard-shadow transition-all duration-100"
              placeholder="Enter your name"
              type="text"
              required
            />
          </div>
          <div>
            <label className="block text-[14px] font-bold uppercase mb-2">Email Address</label>
            <input
              className="w-full bg-white border-2 border-black p-4 focus:outline-none focus:hard-shadow transition-all duration-100"
              placeholder="your@email.com"
              type="email"
              required
            />
          </div>
          <div>
            <label className="block text-[14px] font-bold uppercase mb-2">Message</label>
            <textarea
              className="w-full bg-white border-2 border-black p-4 focus:outline-none focus:hard-shadow transition-all duration-100"
              placeholder="How can I help you?"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            className="w-full bg-black text-white p-4 font-black uppercase border-2 border-black hard-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100"
            type="submit"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}
