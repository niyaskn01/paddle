import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918089352660" // ✅ replace with your WhatsApp number (with country code, no + or spaces)
      target="_blank"
      rel="noopener noreferrer"
      // className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all z-50 flex items-center justify-center"
      className="fixed bottom-4 left-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all z-50 flex items-center justify-center animate-sway"

    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default WhatsAppButton;
