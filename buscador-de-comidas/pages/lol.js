import { useRouter } from "next/router";
import React from "react";

const Lol = () => {
  const router = useRouter();
  const { text } = router.query;
  return <h1>{text}</h1>;
};

export default Lol;
