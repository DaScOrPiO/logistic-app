import Header from "./landingPage/header";
import Section1 from "./landingPage/section1";
import Section2 from "./landingPage/section2";
import Section3 from "./landingPage/section3";

export default function homepage() {
  return (
    <div className="homepage-contents w-full">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
