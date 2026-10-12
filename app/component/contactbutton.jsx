
import { Phone } from "lucide-react";

export default function ContactButton() {
  return (
    <button className="flex items-center gap-2 rounded-md bg-[#0F5132] px-5 py-3 text-white hover:bg-[#0B3D26]" id="contact">
      <Phone size={18} />
      Contact Us
    </button>
  );
}
