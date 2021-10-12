import Link from "next/link";
import Header from "../components/Header";
import ListadoPlatos from "../components/ListadoPlatos";

export default function Home() {
  return (
    <>
      <Header />
      <ListadoPlatos />
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
