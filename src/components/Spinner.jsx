"use client";
import React, { useEffect, useState } from "react";

export default function Spinner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center"
      id="spinner"
    >
      <div className="spinner-grow text-primary" role="status"></div>
    </div>
  );
}
