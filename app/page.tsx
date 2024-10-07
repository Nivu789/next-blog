import Image from "next/image";
import Featured from "./components/homePage/Featured";
import Browse from "./components/homePage/Browse";
import Authors from "./components/homePage/Authors";
import NewsLetter from "./components/homePage/NewsLetter";

export default function Home() {
  return (
    <>
    <Featured/>
    <Browse/>
    <Authors/>
    <NewsLetter/>
    </>
  );
}
