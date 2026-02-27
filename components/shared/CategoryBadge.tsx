import { Category } from "@/lib/types";
import { CATEGORY_META } from "@/lib/constants";

export default function CategoryBadge({ category }: { category: Category }) {
  const meta = CATEGORY_META[category];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${meta.bgLight} ${meta.textColor}`}>
      {meta.label}
    </span>
  );
}
