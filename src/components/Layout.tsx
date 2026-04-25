import { useEffect, useState, ReactNode } from "react";
import Lenis from "lenis";

export function Layout({ children }: { children: ReactNode }) {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = () => {
      const hoveredElements = document.querySelectorAll(":hover");
      let hoveringClickable = false;
      hoveredElements.forEach((el) => {
        const tag = el.tagName.toLowerCase();
        if (tag === "a" || tag === "button" || tag === "input" || tag === "textarea" || el.classList.contains("clickable")) {
          hoveringClickable = true;
        }
      });
      setIsHovering(hoveringClickable);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", updateHoverState);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", updateHoverState);
    };
  }, []);

  return (
    <>
      <div className="grain-overlay" />
      <div
        className={`custom-cursor hidden md:block ${isHovering ? "hover" : ""}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <main className="relative min-h-screen bg-obsidian text-white overflow-x-hidden selection:bg-gold selection:text-obsidian">
        {children}
      </main>
    </>
  );
}
