import React from "react";
import Footer from "@/components/Footer";
import BreadCrumbs from "@/components/BreadCrumbs";

export default function Healthcare() {
  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Information", url: "/information" },
    { name: "HealthCare", url: "/information/healthcare" },
  ];
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="bg-gray-50">
        <div className="flex">
          <div className="w-2/3 p-12">
            <h1 className="text-3xl font-bold mb-4 ">Health Care in Germany</h1>
            <p className="indent-4 text-lg">
  Everyone has a right to basic healthcare no matter their financial
  status or immigration status. Virtually anyone can receive
  emergency treatment or simple doctor visit to receive medications.
  The most of the costs for the treatment are covered by your
  healthcare provider.{" "}
</p>
            <p className="mb-2 indent-4 text-lg">
              {" "}
              Not only physical health is valued in Germany. Mental illnesses
              also plays an important role in life and they are treated like so.
              They are also treated by the Doctors who often refer person
              further for more help on the issue.
            </p>

            <div>
              <h1 className="text-3xl font-bold pt-8 mt-12 mb-4">
                Healthcare System
              </h1>
              <ul className="list-disc ml-6 text-lg">
                <li className="mb-6 font-bold ">
                  Early Detection Program (Children)
                  <p className="text-gray-900 font-medium font-normal">
                    There are special programs put in place to help diagnose
                    sickness in children early, or to make sure a child is
                    developing properly. To put it simply those are regular
                    check-ups know under U-Untersuchungen. You can more about
                    this topic here:{" "}
                    <a
                      className="text-amber-400"
                      href="https://www.bundesgesundheitsministerium.de/themen/praevention/kindergesundheit"
                      target="_blank"
                    >
                      Kindergesundheit
                    </a>
                    . <br /> Woman aged 20 and men age 35 can ask their doctors
                    about early cancer detection program. Above age 35 it is
                    recommended to visit your Doctor for general checkup at
                    least once a year including dentist, vaccinations and other
                    recommended specialists.
                  </p>
                </li>
                <li className="mb-6 font-bold">
                  Health insurance and costs
                  <p className="text-gray-900 font-medium font-normal">
                    The health insurance is mandatory for German residents.
                    Depending on the income you can choose to be insured with a
                    statutory health Insurance company or get yourself privet
                    health insurance. Regardless of insurance company you will
                    be issued a healthcare card, that will have you adress, name
                    and healthcare provider insurance number saved on the card.
                    The card is used at the Doctors and Hospitals as a proof of
                    insurance. <br />
                    Most residents are insured via statuatory health insurance.
                    This is paid for equally by the employer and the individual,
                    but will be taken away from you paycheck -before tax- as a
                    percentage of your income. Childrens statuatory health
                    insurance is for free (Familienversicherung), private
                    insurance requires ist own payment.
                  </p>
                </li>
                <li className="mb-6 font-bold">
                  Mental Health
                  <p className="text-gray-900 font-medium font-normal">
                    In Germany, mental health is openly discussed, and seeking
                    professional support during tough times is encouraged. Good
                    mental health means coping well in times of stress and
                    crisis. Issues like sleep disorders and anxiety are normal
                    reactions to having too much on your plate. It is important
                    to remember reaching for help is not a weakness but
                    strength. Support from doctors and counseling services is
                    available, especially for those dealing with traumatic
                    experiences or adjusting to life in a new country.
                    Professional assistance can provide the needed guidance and
                    courage for a positive future.
                    <br />
                    However waiting times and long lines have tob e mentioned,
                    It can take up to a year to find a therapy spot. It is best
                    to talk to your resident healthcare provider about issues
                    first.
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
                    href="https://www.rki.de/EN/Home/homepage_node.html"
                    className="text-blue-800 hover:text-amber-400 "
                    target="_blank"
                  >
                    Robert Koch Institut-protecting and improving health
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.ueberleben.org/en/contact/contact-person/"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                  >
                    Help for victims of persecution and violence
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.aok.de/fm/en-uk/?s_kwcid=AL!10517!3!445355899131!p!!g!!aok%20contact&cid=aok;1;4;Zuwandererportal;1;42&cid=aok;1;4;zuwanderer-de;1;42;aok%20contact;445355899131;;202255004;15602260364;;kwd-633044953432;c;p&gclid=CjwKCAiA8YyuBhBSEiwA5R3-E2BbAXd2hrUQ0RSmQqVvbgzn9b1yvUN9I68Y2I96cJ4wDjKAD5dRaBoC13YQAvD_BwE"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                  >
                    Medical Insurance with AOK
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.kkh.de/englisch"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                  >
                    Medical Insurance with KKH
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://handbookgermany.de/en/health"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                  >
                    Handbook germany health
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.bundesgesundheitsministerium.de/en/topics/health-guide-for-asylum-seekers/initial-examination-and-medical-treatment-in-reception-centres.html"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                  >
                    Health guide for asylum seekers
                  </a>
                </li>
              </ul>
            </div>
            <img
              src="https://img.freepik.com/free-photo/medicine-uniform-healthcare-medical-workers-day-concept_185193-108329.jpg?w=360&t=st=1707291808~exp=1707292408~hmac=fcdd53055fca1df2d7ea082c98589e87782310bad1d4766942f0bed3e63857ce"
              className="w-fit h-fit mt-4"
              alt="a person sitting at the desk writing notes"
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
