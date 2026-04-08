import ContactForm from '../../components/ContactForm';
import SubVisual from '../../components/SubVisual';
import { Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col pb-24">
      <SubVisual title="문의하기" sub="CONTACT" />
      <div className="max-w-[1200px] mx-auto px-6 py-8 w-full">
        <a
          href="tel:1811-0432"
          className="w-full flex items-center justify-center gap-2 bg-[#B89A5A] text-white py-4 rounded-lg font-black text-base mb-6 hover:bg-[#a38448] transition"
        >
          <Phone className="w-4 h-4" />
          1811-0432 분양 상담
        </a>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
