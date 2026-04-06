import SubVisual from '../../components/SubVisual';

export default function LocationPage() {
  return (
    <div className="w-full flex flex-col pb-24">
      <SubVisual title="입지환경" sub="LOCATION" />

      {/* 타이틀 텍스트 이미지 */}
      <div className="px-6 py-4 bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/location/title.jpg" alt="울산 최고의 입지" className="w-full h-auto block rounded-lg" />
      </div>

      {/* 트램 노선 지도 */}
      <div className="px-6 py-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/location/map.jpg" alt="트램 노선도" className="w-full h-auto block rounded-lg" />
      </div>

      {/* 프리미엄 입지 카드 */}
      <div className="px-6 py-4 bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/location/premium.jpg" alt="프리미엄 입지" className="w-full h-auto block rounded-lg" />
      </div>

      {/* 주소 정보 */}
      <div className="px-6 py-8 bg-white">
        <p className="text-[9px] tracking-[0.3em] text-[#B89A5A] font-bold mb-4">ADDRESS</p>
        <div className="flex flex-col divide-y divide-gray-100">
          {[
            { label: '사업지', value: '울산광역시 남구 신정동 673-1번지 일원' },
            { label: '모델하우스', value: '울산 남구 신정동 1268-2' },
          ].map((row) => (
            <div key={row.label} className="flex gap-4 py-3.5">
              <span className="text-[11px] text-gray-400 font-medium w-20 flex-shrink-0 pt-0.5">{row.label}</span>
              <span className="text-[13px] font-bold text-[#1C2E50] leading-snug">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
