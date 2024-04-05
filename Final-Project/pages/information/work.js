import React from "react";
import Footer from "@/components/Footer";
import BreadCrumbs from "@/components/BreadCrumbs";

export default function Work() {
  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Information", url: "/information" },
    { name: "work", url: "/information/work" },
  ];

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="bg-gray-50">
        <div className="flex">
          <div className="w-2/3 p-12">
            <h1 className="text-3xl font-bold mb-4 ">Can I work in Germany?</h1>
            <p className="text-lg">
  Working in Germany depends on your nationality:{" "}
  <span className="font-semibold">EU/EEA Nationals: </span>
              No work permit needed, unrestricted access to the job market.
              <span className="font-semibold">Third-country Nationals: </span>
              Need a residence permit explicitly allowing work. Check with local
              immigration authorities.{" "}
              <span className="font-semibold">Asylum Seekers: </span> Can obtain
              a work permit under specific conditions while awaiting a decision
              on international protection. There are couple residence titles an
              immigrant can obtain:{" "}
              <span className="font-semibold">Residence Permit: </span>
              Temporary, extendable.
              <span className="font-semibold">Settlement Permit: </span>No time
              limit, specific requirements.
              <span className="font-semibold">EU Blue Card: </span>
              Time-limited, requires a job offer in a highly-skilled role with
              appropriate qualifications and payment.{" "}
              <span className="font-semibold">
    Permanent Residence Permit - EU:
  </span>{" "}
              No time limit, specific requirements. For detailed information,
              visit the Federal Office for Migration and Refugees.
              Make-it-in-Germany provides resources in multiple languages for
              academics and professionals seeking to work in Germany.{" "}
            </p>
            <p className="mb-2 text-lg indent-4">
              {" "}
              Below you will find some tips and tricks to find a nice place to
              settle down as well as some advice on what to prepare to have a
              chance to get a place you are looking for.
            </p>

            <div>
              <h1 className="text-3xl font-bold pt-8 mt-12 mb-4">
                Trainings, Studying and Internships
              </h1>
              <ul className="list-disc ml-6 text-lg">
                <li className="mb-6 font-bold ">
                  Vocational Training
                  <p className="text-gray-900 font-medium font-normal">
                    Vocational training in Germany, known for its dual system
                    with theoretical and practical components, offering work in
                    healthcare, mechanical engineering, and electronics. EU
                    nationals can pursue vocational training without a permit,
                    non EU individuals need a residence permit. Getting such
                    training needs to be secured early on as you need to get
                    approved by the Federal Employment Agency.
                  </p>
                </li>
                <li className="mb-6 font-bold">
                  Internships
                  <p className="text-gray-900 font-medium font-normal">
                    All the essential information about Internships you will
                    find on a website{" "}
                    <a
                      className="text-amber-400"
                      href="https://handbookgermany.de/en/internship#:~:text=In%20order%20to%20obtain%20the,you%20can%20start%20an%20internship."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HandBookGermany
                    </a>{" "}
                    to summarize To get permission from the Immigration Office,
                    first, you need to find a company willing to take you as an
                    intern. After that, you must apply for a special work permit
                    for that internship. If you are still in the process of
                    seeking asylum, you have to get a work permit from the
                    Immigration Office before you can start the internship.
                  </p>
                </li>
                <li className="mb-6 font-bold">
                  Studying
                  <p className="text-gray-900 font-medium font-normal">
                    Germany offers diverse higher education options, including
                    universities, colleges/universities of applied sciences, and
                    music/art colleges. Prospective students need a university
                    entrance qualification, assessed by international academic
                    offices. A language test is usually required for admission.
                    Seeking information from career centers, employment
                    agencies, and engaging with students is advised for a
                    well-rounded understanding of available opportunities.
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
                    href="https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EU-Blue Card
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.make-it-in-germany.com/en/visa-residence/living-permanently/settlement-permit"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Settlement Permit
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.make-it-in-germany.com/en/looking-for-foreign-professionals/entering/visa-requirements"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visa requirements
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.make-it-in-germany.com/en/looking-for-foreign-professionals/entering/german-work-visa"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Work Visa
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.study-in-germany.de/en/plan-your-studies/requirements/entrance-qualification/"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University Entrance qualification
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.make-it-in-germany.com/en/looking-for-foreign-professionals/support/projects"
                    className="text-blue-800 hover:text-amber-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Foreign Professionals
                  </a>
                </li>
              </ul>
            </div>
            <img
              src="https://img.freepik.com/free-photo/beautiful-young-woman-home-office-working-from-home-teleworking-concept_144627-46786.jpg?w=360&t=st=1710147835~exp=1710148435~hmac=08ddb730683df936abe8a7864b5536e27ab3e6223173debd8b0d088397aaf412"
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
