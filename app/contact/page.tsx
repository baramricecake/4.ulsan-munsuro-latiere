import ContactForm from '../../components/ContactForm';
import SubVisual from '../../components/SubVisual';
import { Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center pb-20">
      <div className="w-full max-w-[768px]">
        <SubVisual title="문의하기" sub="관심고객 등록 및 분양 상담" />
        <div className="px-4 py-8">
          <a
            href="tel:1811-0432"
            className="w-full flex items-center justify-center gap-2 bg-[#1C2E50] text-white py-4 rounded-xl font-black text-lg mb-6 hover:bg-[#B89A5A] transition active:scale-95"
          >
            <Phone className="w-5 h-5" />
            1811-0432 분양 상담
          </a>
          <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
