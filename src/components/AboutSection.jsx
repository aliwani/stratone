import aboutImg from "@/assets/test/aboutimg.png";
import teamMembers from "../data/Team";
import SectionHeader from "./resuables/SectionHeader";
import Header from "./resuables/Header";
function AboutSection() {

  return (
    <section className="bg-[#111111]  flex flex-col gap-10 md:gap-18 xl:gap-20   w-full py-30 md:py-38 xl:py-50 px-5 md:px-7.5 xl:px-10 border-box overflow-hidden">
      <SectionHeader Num="[01]" Text="Built on vision" />
      <div className="relative  flex flex-col items-center justify-center">
        <Header heading="about stratone" />
        <div className="md:w-95 xl:w-125  flex flex-col items-center justify-center gap-5">
          <div className="hidden md:block h-10 w-full"></div>
          <div className="pt-5 md:pt-0 h-full  w-full">
            <img src={aboutImg} alt="" className="h-full w-full" />
          </div>
          <p className="font-clashRegular antialiased mb-3 tracking-wider text-white/90 leading-none px-7 md:px-0 text-[20px] text-wrap  text-center">
            Stratone is a full-service creative agency built for brands that
            refuse to be ordinary. We combine strategic thinking with bold
            execution to craft identities, digital experiences, and
            high-performing assets from websites and Shopify stores to video
            content and marketing campaigns. Founded on the belief that every
            brand deserves world-class creative work, our team brings together
            developers, designers, editors, and strategists who are obsessed
            with one thing: building your brand from the ground up and making it
            impossible to ignore.
          </p>
          <div className="font-clashSemi  tracking-wider  uppercase flex flex-wrap justify-center items-center gap-5 w-full leading-none  text-white text-[16px] md:text-lg">
            <a href="">Instagram.</a>
            <a href="">Facebook.</a>
            <a href="">Linked In.</a>
            <a href="">X</a>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <span className="font-clashSemi pt-5 text-white text-[16px] md:text-lg uppercase">
              Our team
            </span>
            <div className="bg-white grid grid-cols-2 md:flex py-0.5 px-0.5 gap-0.5 w-full h-full ">
              {teamMembers.slice(2, 6).map((team, idx) => {
                return (
                  <div
                    key={idx}
                    className="h-[clamp(10rem,68vw,390px)] overflow-x-hidden w-full md:w-19 md:h-20 xl:w-25 xl:h-26 bg-black"
                  >
                    <img
                      className="h-full md:h-35  w-full object-cover "
                      src={team.image}
                      alt=""
                    />
                  </div>
                );
              })}

              <div className="cursor-pointer hidden md:flex px-2 h-6  md:w-19 md:h-20 text-xl flex-col  xl:w-24 xl:h-26 rounded-lg text-white uppercase font-Meduim w-full items-center justify-center bg-black">
                <span>View </span>
                <span>team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
