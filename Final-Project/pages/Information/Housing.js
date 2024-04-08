
import BreadCrumbs from "@/Components/BreadCrumbs";
import Footer from "@/Components/Footer";

export default function Housing() {
  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Information", url: "/Information" },
    { name: "Housing", url: "/Information/Housing" },
  ];
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="bg-gray-50">
        <div className="flex">
          <div className="w-2/3 p-12">
            <h1 className="text-3xl font-bold mb-4 ">
              Finding a home in Germany
            </h1>
            <p className=" indent-4 text-lg">
              Finding your home base is very important. It is a place where you
              can retreat and feel safe. It is not only essential to have a home
              but it also needs to be well adjusted to your needs and income.
              There are many factors that can influence that and almost all of
              them depends you. It is not typical in germany that flats and
              houses have any furniture at all, not even a kitchen. That ist
              important to have in mind when looking for a new place to stay. .A
              handy solution for getting settled or finding permanent housing is
              Zwischenmiete meaning subrenting places of people who
              will not use their premises for a certain amount of time e.g.
              traveling abroad{" "}
            </p>
            <p className="mb-2 indent-4 text-lg">
              {" "}
              Below you will find some tips and tricks to find a nice place to
              settle down as well as some advice on what to prepare to have a
              change to get a place you are looking for.
            </p>

            <div>
              <h1 className="text-3xl font-bold pt-8 mt-12 mb-4">
                There is no place like Home
              </h1>
              <ul className="list-disc ml-6 text-lg">
                <li className="mb-6 font-bold ">
                  What is required?
                  <p className="text-gray-900 font-medium font-normal">
                    The documents that are needed to rent a place are
                    <span className="font-semibold">
                      {" "}
                      proof of income, Schufa report, residence permit,
                      Wohnberechtigungsschein (WBS) and Führungszeugnis.
                    </span>
                  </p>
                </li>
                <li className="mb-6 font-bold">
                  Where to look for homes?
                  <p className="text-gray-900 font-medium font-normal">
                    Online! The biggest source of available apartments you can
                    find online, one of them is {""}
                    <a
                      className="text-amber-400"
                      href="https://www.immobilienscout24.de/wohnen/mietwohnungen.html"
                      target="_blank"
                    >
                      ImmoScout24
                    </a>
                    apartments as well as furniture, jobs and other gadgets can
                    be found on{" "}
                    <a
                      className="text-amber-400"
                      href="https://www.kleinanzeigen.de/"
                      target="_blank"
                    >
                      ebay kleinanzeigen
                    </a>
                    In your local area you can alway look for walk in
                    companies that will provide you with some choice of
                    affordable places, and keep you informed if something pops
                    up.
                  </p>
                </li>
                <li className="mb-6 font-bold">
                  Financial Support
                  <p className="text-gray-900 font-medium font-normal">
                    For people with low income will also find a solution to
                    their problems with german Government and laws. People
                    without an income can find solution with{" "}
                    <a
                      className="text-amber-400"
                      href="https://www.arbeitsagentur.de/en"
                      target="_blank"
                    >
                      Arbeitsagentur
                    </a>{" "}
                    and apply for arbeitslosengeld. Social housing is also one
                    of the opportunities that families with low income can rely
                    on. Those are payed by the state depending on you status.
                    Housing benefit such as{" "}
                    <a
                      className="text-amber-400"
                      href="https://sozialplattform.de/en/content/housing-benefit-wohngeld"
                      target="_blank"
                    >
                      Wohngeld
                    </a>
                    is also provided for individuals or families with low
                    income.
                  </p>
                </li>
                <li className="mb-6 font-bold">
                  Other financial help available
                  <p className="text-gray-900 font-medium font-normal">
                    <span className="font-semibold"> BaFöG </span> is a
                    financial support you can apply for while still in school or
                    university. You apply for ist at the
                    <span className="font-semibold">
                      {" "}
                      Amt für Ausbildungsförderung
                    </span>{" "}
                    when in school, and
                    <span className="font-semibold"> Studentenwerk </span>
                    when in University{" "}
                    <span className="font-semibold"> BaB </span> is a finacial
                    support for people in apprenticeships without or with low
                    income, your apply for it in your local{" "}
                    <span className="font-semibold">
                      Arbeitsagentur Bürgergeld
                    </span>{" "}
                    is financial support for non- or low-income people to secure
                    the minimal living circumstances. The local{" "}
                    <span className="font-semibold">Jobcenter</span> is the
                    place for to apply.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/3 p-8">
            <div className="bg-gray-200 p-4">
              <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
              <ul>
                <li className="mb-1">
                  <a
                    href="https://handbookgermany.de/en/live"
                    className="text-blue-800 hover:text-amber-400 "
                    target="_blank"
                  >
                    Handbook Germany living
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://handbookgermany.de/en/rights-laws"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                  >
                    Handbook Germany- rights and laws
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.bmwsb.bund.de/Webs/BMWSB/DE/themen/stadt-wohnen/wohnraumfoerderung/wohngeld/wohngeldrechner-2023-artikel.html"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                  >
                    Wohngeld calculator
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://sozialplattform.de/en/content/housing"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                  >
                    Sozial Platform - Housing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.immowelt.de/"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                  >
                    Immowelt apartment search
                  </a>
                </li>
              </ul>
            </div>
            <img
              src="https://img.freepik.com/free-photo/old-residential-building-sunny-day-barcelona-spain_1268-18021.jpg?w=360&t=st=1707299322~exp=1707299922~hmac=3af733e8343cbd69d8d5229e772bd4842d065868958d1bb7bc0af7cc39e8ae91"
              className="w-fit h-fit mt-4"
              alt="a person sitting at the desk writing notes"
            />
          </div>
        </div>

      </div>
      <Footer/>
    </>
  );
}
