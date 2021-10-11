import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Link
        href={{
          pathname: "/lol",
          query: { text: "eeeee" },
        }}
      >
        asd
      </Link>
    </>
  );
}
