// "use client";
// import { FaWhatsapp } from "react-icons/fa";

// export default function WhatsAppButton() {
//   return (
//     <a
//       href="https://wa.me/923001234567" // ✅ yaha apna WhatsApp number daalna
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
//     >
//       <FaWhatsapp size={28} />
//     </a>
//   );
// }
"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href="https://wa.me/923704915368" // ✅ apna WhatsApp number daalna
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 
                   rounded-full shadow-lg
                   bg-gradient-to-r from-green-400 to-green-600 
                   text-white
                   transition-transform duration-300 
                   hover:scale-110 hover:animate-bounce"
      >
        {/* Icon */}
        <FaWhatsapp size={30} />

        {/* Outer Glow Ring */}
        <span className="absolute inset-0 rounded-full border-2 border-green-400 opacity-70 animate-ping"></span>
      </a>

      {/* Tooltip */}
      <span
        className="absolute right-20 w-37 bottom-4 opacity-0 group-hover:opacity-100 
                   bg-white/10 backdrop-blur-md text-white text-xs 
                   border border-white/20
                   rounded-lg px-3 py-1 shadow-lg 
                   transition-all duration-500"
      >
        💬 Chat on WhatsApp
      </span>

      {/* Notification Badge (Optional)
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 
                       flex items-center justify-center rounded-full shadow-md">
        1
      </span> */}
    </div>
  );
}
