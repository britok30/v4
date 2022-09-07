import React, { useState, useEffect } from "react";

export const Footer = () => {
  const [date, setDate] = useState<number>();

  const getYear = () => {
    setDate(new Date().getFullYear());
  };

  useEffect(() => {
    getYear();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center text-white text-xs my-10 font-light">
      <p>&copy; {date} | Designed & built by Kelvin Brito</p>
      <p>
        Made with
        <span className="mx-2" role="img" aria-label="emoji">
          ❤️
        </span>
        with React, Next.js, TypeScript & Tailwind
      </p>
    </div>
  );
};
