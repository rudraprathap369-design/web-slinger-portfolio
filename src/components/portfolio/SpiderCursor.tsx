import { useEffect, useState } from "react";

const SpiderCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer);

    if (!finePointer) return;

    document.body.style.cursor = "none";

    const handleMove = (event: MouseEvent) => setMouse({ x: event.clientX, y: event.clientY });
    let frame = 0;

    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.18,
        y: prev.y + (mouse.y - prev.y) * 0.18,
      }));
      frame = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    frame = window.requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMove);
      window.cancelAnimationFrame(frame);
    };
  }, [mouse.x, mouse.y]);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor-ring" style={{ transform: `translate3d(${trail.x - 20}px, ${trail.y - 20}px, 0)` }} />
      <div className="cursor-core" style={{ transform: `translate3d(${mouse.x - 5}px, ${mouse.y - 5}px, 0)` }} />
    </>
  );
};

export default SpiderCursor;