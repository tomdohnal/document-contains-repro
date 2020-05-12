import Head from "next/head";
import React, { useRef, useEffect } from "react";

export default function Home() {
  const ref = useRef(null);
  useEffect(() => {
    console.log(document.body.contains(ref.current)); // works fine even in IE 11
    console.log(document.contains(ref.current)); // fails in IE 11
  }, []);

  return <div ref={ref} className="container"></div>;
}
