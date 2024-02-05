import React from "react";
import Footer from "@/components/Footer";

export default function language() {
  return (
    <div className="bg-gray-50">
      <div className="flex">
        <div className="w-2/3 p-12">
          <h1 className="text-3xl font-bold mb-4 ">Learning German Language</h1>
          <p className=" indent-4 text-lg">
            Learning the language of the country you live in is super important.
            It helps you find jobs easily, understand rental agreements, and
            communicate/make friends. When you speak the local language, getting
            around, shopping, and dealing with everyday struggles become much
            simpler.{" "}
          </p>
          <p className="mb-8 indent-4 text-lg">
            {" "}
            It's not just about words; it's about feeling at home and connecting
            with the people around you. So, if you're in a new place, learning
            the language is like having a super useful tool for your everyday
            life and making your new home truly feel like home.
          </p>
          
            <div>
              <h1 className="text-3xl font-bold pt-8 mt-12 mb-4">
                What are your Options?
              </h1>
              <ul className="list-disc ml-6 text-lg">
                <li className="mb-6 font-bold ">
                  An Integration Course
                  <p className="text-gray-600 font-semibold">
                    With integration courses you will learn German language as
                    well as more about people and culture. To get more
                    information about integration courses visit the official
                    website of a course provider{" "}
                    <a
                      className="text-amber-400"
                      href="https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html"
                    >
                      BAMF (Federal Office for Migration and Refugees).
                    </a>
                  </p>
                </li>
                <li className="mb-6 font-bold">
                  Free or Paid Online Classes
                  <p className="text-gray-600 font-semibold">
                    There are many language schools that teach German, one of
                    them is:
                    <a
                      className="text-amber-400"
                      href="https://www.goethe.de/de/spr/kur/doln/doi.html"
                    >
                      {" "}
                      Goethe Institut
                    </a>{" "}
                    or{" "}
                    <a
                      className="text-amber-400"
                      href="https://www.volkshochschule.de/"
                    >
                      {" "}
                      Volkschochschul{" "}
                    </a>
                    There are multiple apps and opportunities to start slowly
                    with some free apps{" "}
                    <a
                      className="text-amber-400"
                      href="https://www.duolingo.com/"
                    >
                      Duolingo
                    </a>
                    or free videos on{" "}
                    <a
                      className="text-amber-400"
                      href="https://www.youtube.com/watch?v=RuGmc662HDg&list=PLF9mJC4RrjIhS4MMm0x72-qWEn1LRvPuW"
                    >
                      YouTube
                    </a>
                  </p>
                </li>
                <li className="mb-6 font-bold">
                  Hands-on Experience with Volunteer Native Speakers
                  <p className="text-gray-600 font-semibold">
                    Immerse yourself in the language by interacting with native
                    speakers through volunteer opportunities.Check for events
                    happening around you{" "}
                    <a
                      className="text-amber-400"
                      href="https://www.eventim.de/"
                    >
                      {" "}
                      Eventim{" "}
                    </a>
                    or keep an eye of local events happening on social media.
                  </p>
                </li>
              </ul>
            </div>
        </div>

        <div className="w-1/3 p-8">
          <div className="bg-gray-200 p-4">
            <h2 className="text-xl font-semibold mb-2">Useful Links</h2>
            <ul>
              <li>
                <a
                  href="https://www.goethe.de/en/spr/kur/tsd.html"
                  className="text-blue-800 hover:text-amber-400 "
                >
                  Test Your German
                </a>
              </li>
              <li>
                <a
                  href="https://learngerman.dw.com/en/learn-german/s-9528"
                  className="text-blue-800 hover:text-amber-400"
                >
                  Learn with Deutsche Welle
                </a>
              </li>
              <li>
                <a
                  href="https://www.esl-languages.com/en/online-language-tests/german-test"
                  className="text-blue-800 hover:text-amber-400"
                >
                  ESL Language School
                </a>
              </li>
              <li>
                <a
                  href="https://germania-akademie.de/en/info-registration/levels/"
                  className="text-blue-800 hover:text-amber-400"
                >
                  Course Level Description and placement Test
                </a>
              </li>
              <li>
                <a
                  href="https://www.die-deutschule.de/en/online-german-course/"
                  className="text-blue-800 hover:text-amber-400"
                >
                  Online German Course with die deutSCHule
                </a>
              </li>
              <li>
                <a
                  href="https://alison.com/tag/german-language"
                  className="text-blue-800 hover:text-amber-400"
                >
                  Free German Course with Alison
                </a>
              </li>
            </ul>
          </div>
          <img
          src="https://img.freepik.com/free-photo/unrecognizable-woman-sitting-desk-indoors-writing-planner_1098-17626.jpg?w=360&t=st=1707134189~exp=1707134789~hmac=9261cbb7abf3983598f7b2bde03a1d19760215a0e004fd5a6ea56c067e505de7" 
          className="w-fit h-fit mt-4"
          alt="a person sitting at the desk writing notes"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
