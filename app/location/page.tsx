import SubVisual from '../../components/SubVisual';

const highlights = [
  { icon: '🚊', label: '트램역', value: '공업로터리역 (2029예정)', sub: '도보 이동권' },
  { icon: '🏫', label: '학세권', value: '울산여고 · 서여중', sub: '트램 4~6분' },
  { icon: '🌳', label: '숲세권', value: '울산대공원', sub: '태화강국가정원' },
  { icon: '🏬', label: '인프라', value: '백화점 · 대형마트', sub: '종합병원 인접' },
];

export default function LocationPage() {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      <div className="w-full max-w-[768px]">
        <SubVisual title="입지환경" sub="LOCATION" />

        {/* 입지 소개 텍스트 */}
        <div className="px-6 py-10 bg-white text-center">
          <p className="text-[10px] tracking-[0.25em] text-[#B89A5A] font-bold mb-3">PREMIUM LOCATION</p>
          <h2 className="text-[18px] font-black text-[#1C2E50] leading-snug mb-3">
            울산 최고의 입지,<br />옥신정이 더욱 새로워집니다
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            명문 학군과 풍부한 학원이 밀집된 옥신정에<br />
            울산 1호 트램역이 들어섭니다.
          </p>
        </div>

        {/* 지도 이미지 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/site/location/location_01.png"
          alt="문수로 라티에르 673 위치"
          className="w-full h-auto block"
        />

        {/* 입지 하이라이트 카드 */}
        <div className="px-6 py-8 bg-[#f8f7f5]">
          <p className="text-[10px] tracking-[0.25em] text-[#B89A5A] font-bold mb-5">HIGHLIGHTS</p>
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((h) => (
              <div key={h.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">{h.icon}</div>
                <p className="text-[10px] text-gray-400 font-medium mb-0.5">{h.label}</p>
                <p className="text-sm font-black text-[#1C2E50] leading-tight">{h.value}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 주소 */}
        <div className="px-6 py-8 bg-white">
          <p className="text-[10px] tracking-[0.25em] text-[#B89A5A] font-bold mb-4">ADDRESS</p>
          <div className="flex flex-col divide-y divide-gray-100">
            <div className="flex gap-4 py-3.5">
              <span className="text-xs text-gray-400 font-medium w-20 flex-shrink-0">사업지</span>
              <span className="text-sm font-bold text-[#1C2E50] leading-snug">울산광역시 남구 신정동 673-1번지 일원</span>
            </div>
            <div className="flex gap-4 py-3.5">
              <span className="text-xs text-gray-400 font-medium w-20 flex-shrink-0">모델하우스</span>
              <span className="text-sm font-bold text-[#1C2E50]">울산 남구 신정동 1268-2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
