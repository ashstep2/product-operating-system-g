export default function DemoLabel({ text = "Demo Data" }: { text?: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-600 border border-amber-200">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      {text}
    </span>
  );
}
