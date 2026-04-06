import SubVisual from '../../components/SubVisual';

export default function BusinessPage() {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      <div className="w-full max-w-[768px]">
        <SubVisual title="사업안내" sub="BUSINESS OVERVIEW" />

        {/* 사업 개요 이미지 (CG 조감도) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/site/business/business_01.png"
          alt="문수로 라티에르 673 조감도"
          className="w-full h-auto block"
        />

        {/* 사업 정보 테이블 이미지 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/site/business/business_02.png"
          alt="문수로 라티에르 673 사업 정보"
          className="w-full h-auto block"
        />

        {/* 주요 정보 UI 카드 */}
        <div className="px-6 py-10 bg-white">
          <p className="text-[10px] tracking-[0.25em] text-[#B89A5A] font-bold mb-5">PROJECT INFO</p>
          <div className="flex flex-col divide-y divide-gray-100">
            {[
              { label: '단지명', value: '문수로 라티에르 673' },
              { label: '대지위치', value: '울산광역시 남구 신정동 673-1번지 일원' },
              { label: '아파트', value: '199세대 (84A·B·C㎡ / 104㎡)' },
              { label: '오피스텔', value: '35실 (110㎡)' },
              { label: '시행사', value: '(주)구전개발' },
              { label: '사업자번호', value: '792-81-02085' },
              { label: '문의전화', value: '1811-0432' },
            ].map((row) => (
              <div key={row.label} className="flex gap-4 py-3.5">
                <span className="text-xs text-gray-400 font-medium w-24 flex-shrink-0">{row.label}</span>
                <span className="text-sm font-bold text-[#1C2E50] leading-snug">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
