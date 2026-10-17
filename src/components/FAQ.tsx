import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={i}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
            >
              <span className="font-semibold">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {open && <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
