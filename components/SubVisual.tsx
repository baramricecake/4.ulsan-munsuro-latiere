interface SubVisualProps {
  title: string;
  sub?: string;
}

export default function SubVisual({ title, sub }: SubVisualProps) {
  return (
    <div className="w-full relative h-[160px] md:h-[220px] flex flex-col justify-center items-center bg-[#1C2E50] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C2E50] to-[#0d1a30]" />
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
      />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="px-3 py-1 border border-[#B89A5A]/50 rounded-full text-[#B89A5A] text-[10px] font-bold tracking-[0.2em] mb-3">
          문수로 라티에르 673
        </div>
        <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight">{title}</h1>
        {sub && <p className="text-white/60 text-sm mt-2">{sub}</p>}
        <div className="w-8 h-0.5 bg-[#B89A5A] mt-4 rounded-full" />
      </div>
    </div>
  );
}
