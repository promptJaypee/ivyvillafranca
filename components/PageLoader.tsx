"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(true);

  // Show the loader for at least this long so it never just flashes
  const MIN_VISIBLE_MS = 500;

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);
      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  // Unmount the overlay after its fade-out transition finishes
  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(t);
    }
  }, [loading]);

  return (
    <>
      {mounted && <Loader visible={loading} />}
      {children}
    </>
  );
}
