"use client";

import { useEffect } from "react";

export const PreLine = () => {
  useEffect(() => {
    // @ts-ignore
    import("preline");
  }, []);
  return <div></div>;
};
