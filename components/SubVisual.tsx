interface SubVisualProps {
  title: string;
  sub?: string;
}

export default function SubVisual({ title, sub }: SubVisualProps) {
  return (
    <div className="w-full relative overflow-hidden bg-[#1C2E50]"
      style={{ background: 'linear-gradient(135deg, #1C2E50 0%, #0d1a30 100%)' }}>
      {/* 격자 패턴 */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 50%), repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '30px 30px' }}
      />
      <div className="relative px-6 pt-10 pb-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/site/logo-light.png" alt="라티에르 673" className="h-[16px] w-auto object-contain mb-5 opacity-60" />
        {sub && (
          <p className="text-[9px] tracking-[0.25em] text-[#B89A5A] font-bold mb-2">{sub}</p>
        )}
        <h1 className="text-[28px] font-black text-white tracking-tight">{title}</h1>
        <div className="w-6 h-[2px] bg-[#B89A5A] mt-4" />
      </div>
    </div>
  );
}
