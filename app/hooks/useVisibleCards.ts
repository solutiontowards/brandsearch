"use client";

import { useEffect, useState } from "react";

export default function useVisibleCards() {
  const [visibleCards, setVisibleCards] = useState(5);

  useEffect(() => {
    const update = () => {
      setVisibleCards(window.innerWidth < 1500 ? 4 : 5);
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return visibleCards;
}