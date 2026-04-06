import SubVisual from '../../components/SubVisual';

const images = [
  '/site/business/business_01.png',
  '/site/business/business_02.png',
];

export default function BusinessPage() {
  return (
    <div className="w-full flex flex-col items-center pb-20">
      <div className="w-full max-w-[768px]">
        <SubVisual title="사업안내" sub="문수로 라티에르 673 사업 개요" />
        <div className="flex flex-col">
          {images.map((src, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={idx} src={src} alt={`사업안내 ${idx + 1}`} className="w-full h-auto block" />
          ))}
        </div>
      </div>
    </div>
  );
}
