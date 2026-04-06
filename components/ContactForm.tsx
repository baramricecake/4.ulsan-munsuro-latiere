"use client";

const inputClass =
  "w-full px-4 py-3 bg-white text-black placeholder:text-gray-400 font-medium rounded-md border border-gray-200 focus:ring-2 focus:ring-[#B89A5A] focus:border-[#B89A5A] outline-none text-sm transition-shadow";

const ContactForm = () => (
  <form action="https://formspree.io/f/xaqlavga" method="POST" target="_blank" className="space-y-4">
    <div>
      <label className="block text-xs font-bold text-gray-700 mb-1.5">
        이름 <span className="text-red-400">*</span>
      </label>
      <input type="text" name="name" required placeholder="홍길동" className={inputClass} />
    </div>

    <div>
      <label className="block text-xs font-bold text-gray-700 mb-1.5">
        연락처 <span className="text-red-400">*</span>
      </label>
      <input type="tel" name="phone" required placeholder="010-0000-0000" inputMode="tel" className={inputClass} />
    </div>

    <div>
      <label className="block text-xs font-bold text-gray-700 mb-1.5">
        생년월일 <span className="text-red-400">*</span>
        <span className="ml-1 text-gray-400 font-normal">(6자리, 예: 810505)</span>
      </label>
      <input
        type="text"
        name="birthdate"
        required
        maxLength={6}
        placeholder="810505"
        inputMode="numeric"
        pattern="[0-9]{6}"
        className={inputClass + " tracking-widest"}
      />
    </div>

    <div>
      <label className="block text-xs font-bold text-gray-700 mb-1.5">
        거주지 주소 <span className="text-red-400">*</span>
        <span className="ml-1 text-gray-400 font-normal">(동까지, 예: 남구 신정동)</span>
      </label>
      <input type="text" name="address" required placeholder="남구 신정동" className={inputClass} />
    </div>

    {/* 개인정보 동의 */}
    <div className="bg-gray-50 rounded-lg p-3 text-[11px] text-gray-500 leading-relaxed h-24 overflow-y-auto border border-gray-100">
      <p className="font-bold text-gray-700 mb-1">개인정보 수집 및 이용 동의</p>
      <p className="mb-1"><b>수집항목:</b> 이름, 연락처, 생년월일, 거주지 주소</p>
      <p className="mb-1"><b>이용목적:</b> 분양 정보 안내, 방문 상담 예약, 마케팅 활용</p>
      <p className="mb-1"><b>보유기간:</b> 목적 달성 후 즉시 파기 (법령에 따라 필요 시 예외)</p>
      <p><b>제3자 제공:</b> 사업주체 및 공식 분양대행사에 제공될 수 있으며, 동의 거부 시 등록이 제한될 수 있습니다.</p>
    </div>

    <div className="flex items-center gap-2">
      <input type="checkbox" id="agree" required className="w-4 h-4 accent-[#B89A5A] cursor-pointer" />
      <label htmlFor="agree" className="text-xs font-bold text-gray-700 cursor-pointer">
        개인정보 수집 및 이용에 동의합니다. (필수)
      </label>
    </div>

    <button
      type="submit"
      className="w-full py-4 bg-[#B89A5A] text-white font-black text-sm rounded-lg hover:bg-[#a38448] transition-colors active:scale-[0.98]"
    >
      관심고객 등록하고 특별 혜택받기
    </button>
  </form>
);

export default ContactForm;
