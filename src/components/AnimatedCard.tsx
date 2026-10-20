import { useRef, useState, useEffect, type ReactNode } from "react";

export const REVEAL_STYLES = [
  { anim: "reveal-left",  delay: "delay-0"   },
  { anim: "reveal-up",    delay: "delay-100" },
  { anim: "reveal-zoom",  delay: "delay-200" },
  { anim: "reveal-right", delay: "delay-300" },
];

interface AnimatedCardProps {
  children: ReactNode;
  animClass?: string;
  delayClass?: string;
  className?: string;
}

export function AnimatedCard({
  children,
  animClass = "reveal-up",
  delayClass = "delay-0",
  className = "",
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? `${animClass} ${delayClass}` : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
