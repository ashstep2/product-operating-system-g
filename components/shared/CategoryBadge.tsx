import { Category } from "@/lib/types";
import { CATEGORY_META } from "@/lib/constants";

export default function CategoryBadge({ category }: { category: Category }) {
  const meta = CATEGORY_META[category];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium"
      style={{ color: meta.color, backgroundColor: meta.color + "10" }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: meta.color }} />
      {meta.label}
    </span>
  );
}
