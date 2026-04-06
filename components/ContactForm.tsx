"use client";

const ContactForm = () => (
  <form action="https://formspree.io/f/mgoneoel" method="POST" target="_blank" className="space-y-5">
    <div className="space-y-5 text-left">
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
          이름 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="홍길동"
          style={{ color: '#000', WebkitTextFillColor: '#000' }}
          className="w-full px-4 py-3 bg-white text-black font-semibold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#B89A5A] focus:border-[#B89A5A] outline-none text-base transition-shadow"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
          연락처 <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="010-0000-0000"
          style={{ color: '#000', WebkitTextFillColor: '#000' }}
          className="w-full px-4 py-3 bg-white text-black font-semibold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#B89A5A] focus:border-[#B89A5A] outline-none text-base transition-shadow"
        />
      </div>

      <div>
        <label htmlFor="birthdate" className="block text-sm font-bold text-gray-900 mb-2">
          생년월일 <span className="text-red-500">*</span>
          <span className="ml-1 text-xs text-gray-400 font-normal">(6자리, 예: 810505)</span>
        </label>
        <input
          type="text"
          id="birthdate"
          name="birthdate"
          required
          maxLength={6}
          placeholder="810505"
          inputMode="numeric"
          pattern="[0-9]{6}"
          style={{ color: '#000', WebkitTextFillColor: '#000' }}
          className="w-full px-4 py-3 bg-white text-black font-semibold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#B89A5A] focus:border-[#B89A5A] outline-none text-base transition-shadow tracking-widest"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-bold text-gray-900 mb-2">
          거주지 주소 <span className="text-red-500">*</span>
          <span className="ml-1 text-xs text-gray-400 font-normal">(동까지, 예: 남구 신정동)</span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          placeholder="남구 신정동"
          style={{ color: '#000', WebkitTextFillColor: '#000' }}
          className="w-full px-4 py-3 bg-white text-black font-semibold rounded-md border border-gray-300 focus:ring-2 focus:ring-[#B89A5A] focus:border-[#B89A5A] outline-none text-base transition-shadow"
        />
      </div>
    </div>

    <div className="bg-gray-50 border border-gray-200 p-4 text-xs text-gray-600 overflow-y-auto h-32 text-left leading-relaxed">
      <p className="font-bold text-gray-800 mb-1">개인정보 수집 및 이용 동의</p>
      <p className="mb-2">문수로 라티에르 673 관심고객 등록을 위해 아래와 같이 개인정보를 수집·이용합니다.</p>
      <p className="mb-1"><span className="font-bold">수집항목:</span> 이름, 연락처, 생년월일, 거주지 주소</p>
      <p className="mb-1"><span className="font-bold">이용목적:</span> 분양 정보 안내, 방문 상담 예약, 마케팅 활용</p>
      <p className="mb-1"><span className="font-bold">보유기간:</span> 목적 달성 후 즉시 파기 (법령에 따라 필요 시 예외)</p>
      <p><span className="font-bold">제3자 제공:</span> 사업주체 및 공식 분양대행사에 제공될 수 있으며, 동의 거부 시 등록이 제한될 수 있습니다.</p>
    </div>

    <div className="flex items-start px-1 text-left">
      <input type="checkbox" id="privacy-agree" required className="mt-1 mr-2 cursor-pointer w-4 h-4 accent-[#B89A5A]" />
      <label htmlFor="privacy-agree" className="text-sm font-bold text-gray-700 cursor-pointer select-none">
        개인정보 수집 및 이용에 동의합니다. (필수)
      </label>
    </div>

    <div className="pt-2">
      <button
        type="submit"
        className="w-full flex justify-center py-4 px-4 font-bold text-white bg-[#1C2E50] hover:bg-[#B89A5A] transition transform hover:-translate-y-1 shadow-md rounded-md text-lg"
      >
        관심고객 등록하고 특별 혜택받기
      </button>
    </div>
  </form>
);

export default ContactForm;
