import SubVisual from '../../components/SubVisual';

export default function BusinessPage() {
  return (
    <div className="w-full flex flex-col pb-24">
      <SubVisual title="사업안내" sub="BUSINESS OVERVIEW" />

      {/* 사업개요 이미지 */}
      <div className="w-full py-4">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/business/overview.jpg"
            alt="문수로 라티에르 673 사업개요"
            className="w-full h-auto block rounded-lg"
          />
        </div>
      </div>

      {/* 주요 정보 카드 */}
      <div className="w-full bg-white py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[9px] tracking-[0.3em] text-[#B89A5A] font-bold mb-5">PROJECT INFO</p>
          <div className="flex flex-col divide-y divide-gray-100">
            {[
              { label: '단지명', value: '문수로 라티에르 673' },
              { label: '대지위치', value: '울산광역시 남구 신정동 673-1번지 일원' },
              { label: '아파트', value: '199세대 (84A·B·C㎡ / 104㎡)' },
              { label: '오피스텔', value: '35실 (110㎡)' },
              { label: '시행사', value: '(주)구전개발 · 792-81-02085' },
              { label: '문의전화', value: '1811-0432' },
            ].map((row) => (
              <div key={row.label} className="flex gap-4 py-3.5">
                <span className="text-[11px] text-gray-400 font-medium w-20 flex-shrink-0 pt-0.5">{row.label}</span>
                <span className="text-[13px] font-bold text-[#1C2E50] leading-snug">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
