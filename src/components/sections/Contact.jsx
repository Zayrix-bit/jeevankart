"use client";

import { useState } from "react";
import FadeUp from "@/components/animations/FadeUp";
import Toast from "@/components/Toast";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [toast, setToast] = useState(null);

  async function handleSubmit(formData) {
    setIsPending(true);
    setToast(null);
    const result = await sendEmail(formData);
    if (result.success) {
      setToast({ type: "success", message: "Message sent successfully!" });
      document.getElementById('contact-form').reset();
    } else {
      setToast({ type: "error", message: "Something went wrong. Try again." });
    }
    setIsPending(false);
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-40 bg-transparent relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp delay={0.1}>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-[20px] font-medium tracking-widest text-white uppercase opacity-90">Let&apos;s Work Together</h2>
            <p className="mt-3 sm:mt-4 text-sm lg:text-[14px] text-slate-400 px-4 sm:px-0 leading-loose opacity-80 font-light">
              Have a project in mind? Reach out and let&apos;s chat about how we can make it happen.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-white/10 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Contact Info Sidebar */}
              <div className="bg-black/40 border-b md:border-b-0 md:border-r border-white/10 p-5 sm:p-8 md:col-span-2 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 tracking-wide">Contact Info</h3>
                  <p className="text-slate-400 mb-6 text-xs sm:text-[13px] leading-relaxed opacity-80 font-light">
                    Fill out the form and I will get back to you within 24 hours.
                  </p>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-center text-slate-300 text-xs sm:text-sm">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-white" />
                      <span>jeevankart.in@gmail.com</span>
                    </div>
                    <div className="flex items-center text-slate-300 text-xs sm:text-sm">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-white" />
                      <span>+91 9873828153</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <a href="https://wa.me/919873828153?text=Hi%20Ritesh%2C%20I%20have%20a%20project%20to%20discuss" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full bg-white text-black py-2.5 px-5 rounded-full font-semibold transition-all hover:bg-slate-200 hover:scale-105 outline-none text-xs sm:text-sm">
                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                    WhatsApp Me
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="p-5 sm:p-8 md:col-span-3">
                <form id="contact-form" className="space-y-4 sm:space-y-5" action={handleSubmit}>
                  <input type="hidden" name="_subject" value="New Contact from Jeevankart Portfolio" />
                  <div>
                    <label htmlFor="name" className="block text-[10px] sm:text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-3 py-2.5 rounded-xl border border-white/10 focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all outline-none bg-black/40 text-white placeholder-slate-600 text-xs sm:text-sm" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] sm:text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-3 py-2.5 rounded-xl border border-white/10 focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all outline-none bg-black/40 text-white placeholder-slate-600 text-xs sm:text-sm" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[10px] sm:text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Your Message</label>
                    <textarea id="message" name="message" rows="3" required className="w-full px-3 py-2.5 rounded-xl border border-white/10 focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all outline-none bg-black/40 text-white placeholder-slate-600 resize-none text-xs sm:text-sm" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isPending}
                    className={`w-full flex items-center justify-center gap-2 font-semibold py-2.5 sm:py-3 px-5 rounded-xl transition-all outline-none text-xs sm:text-sm cursor-pointer ${isPending ? 'bg-slate-300 text-black/50 cursor-not-allowed' : 'bg-white hover:bg-slate-200 text-black hover:scale-[1.02]'}`}
                  >
                    {isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Toast Popup */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}
