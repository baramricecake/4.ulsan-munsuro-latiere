import SubVisual from '../../components/SubVisual';

const images = [
  '/site/location/location_01.png',
  '/site/location/location_02.png',
  '/site/location/location_03.png',
];

export default function LocationPage() {
  return (
    <div className="w-full flex flex-col items-center pb-20">
      <div className="w-full max-w-[768px]">
        <SubVisual title="입지환경" sub="탁월한 입지가 만드는 삶의 가치" />
        <div className="flex flex-col">
          {images.map((src, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={idx} src={src} alt={`입지환경 ${idx + 1}`} className="w-full h-auto block" />
          ))}
        </div>
      </div>
    </div>
  );
}
