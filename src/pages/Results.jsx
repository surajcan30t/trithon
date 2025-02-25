import React from 'react'
import ShortlistedTeams from '../../data/shortlistedteams'
import WaitingListTeams from '../../data/waitinglistteams'

const Results = () => {
  return (
    <main id="main" className="site-main w-full px-4 md:px-8 lg:px-16 py-8">
      <section className="bg-gray-900 rounded-lg px-3 md:px-0 py-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Shortlisted Teams for Trithon 2025</h2>
        </div>

        <div className="container mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-100 text-pretty mt-4 max-w-3xl mx-auto p-1 md:p-0">
            We extend our sincere gratitude to all 350+ applicants for their enthusiastic participation in Trithon 2025. The overwhelming response made the shortlisting process a challenging but rewarding task. Our dedicated panel of five industry experts meticulously reviewed each application, and while many were highly impressive, we were faced with the difficult decision of selecting a limited number of teams for the final round. Congratulations to the shortlisted teams! For those who were not selected this time, we appreciate your efforts and encourage you to participate in future Trithon events. <br />
            <br />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">Selection Criteria</h3>
            <div className='text-start text-blue-200'>
              <ol>
                <li className="disc my-2">
                  1.	Alignment with Trithon Theme: How well the proposed problem aligned with the overall theme of Trithon 2025.
                </li>
                <li className="disc my-2">
                  2.	Problem Statement Quality: The clarity, conciseness, and impact of the defined problem statement.
                </li>
                <li className="disc my-2">
                  3.	Proposed Solution Quality: The innovativeness, effectiveness, and completeness of the proposed solution.
                </li>
                <li className="disc my-2">
                  4.	Solution Feasibility: The practicality and viability of implementing the proposed solution within the given timeframe and resources.
                </li>
                <li className="disc my-2">
                  5.	Presentation Clarity: The overall clarity and organization of the application, including the presentation of the problem, solution, and feasibility.
                </li>
              </ol>
            </div>
          </p>
        </div>

      </section>

      <section className="bg-gray-900 rounded-lg py-4 mt-5">
        <div className="container mx-auto text-center my-5">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">LIST OF FINALISTS</h3>
        </div>
        <div className="container mx-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
              <thead className="text-lg  uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Sl. No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Team Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Team Leader Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Team Leader Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    College Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  ShortlistedTeams.map((team, index) => {
                    return (
                      <tr key={index} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700 text-lg text-yellow-100">
                        <td className="px-6 py-4">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4">
                          {team.teamName}
                        </td>
                        <td className="px-6 py-4 capitalize">
                          {team.teamLeader}
                        </td>
                        <td className="px-6 py-4">
                          {team.mailId}
                        </td>
                        <td className="px-6 py-4 capitalize">
                          {team.clgName}
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-3 md:px-0 rounded-lg py-4 mt-5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Instructions to the finalists</h2>
        </div>

        <div className="container mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-100 text-pretty mt-4 max-w-3xl mx-auto p-1 md:p-0">
            All the shortlisted Teams participating in TRITHON 2025 should make a short video with your teammates along with your project Mentor/Guide/HOD/Deans/Principal and share on or before 1st March 2025 with below mentioned content and guidelines. <br />
            <br />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">Video should contain the following:-</h3>
            <div className='text-start text-blue-200'>
              <ol>
                <li className="disc my-2">
                  1. About your team and your Institute .
                </li>
                <li className="disc my-2">
                  2. Students  excitement about coming to Trident Group Of Institutions , Bhubaneswar for participation in TRITHON 2025.
                </li>
                <li className="disc my-2">
                  3. Explain your project and creativity.
                </li>
                <li className="disc my-2">
                  4. Give your Consent for Participation .
                </li>
                <li className="disc my-2">
                  5. Explain your Technology and Innovation on your project.
                </li>

              </ol>
            </div>
            <br />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">Guidelines for the Video:-</h3>
            <div className='text-start text-blue-200'>
              <ol>
                <li className="disc my-2">
                  1. Video should not be more than 45 secs.
                </li>
                <li className="disc my-2">
                  2. Video should be 4:3 i.e. in vertical manner not in horizontal
                </li>
                <li className="disc my-2">
                  3. Video quality should be in HD having 1080P.
                </li>
                <li className="disc my-2">
                  4. Video should be send by the Team Leader on or before 1st March 2025.
                </li>

              </ol>
            </div>
            <div className='mt-5 text-yellow-200'>
              Please share on WhatsApp(9439177066 - Aditya Sir) along with Team name and Serial No(As mentioned in shortlisted result published in website).
            </div>
            <br />
            <br />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">Rules And Regulations:-</h3>
            <div className='text-start text-blue-200'>
              <ol>
                <li className="disc my-2">
                  1. Teams must have exactly 6 members, including at least 1 girl student.
                </li>
                <li className="disc my-2">
                  2. Team members should try to wear a same color T-shirts  (Optional).
                </li>
              </ol>
            </div>
            <br />
            <br />
            <div className='mt-5 text-yellow-300'>
              (NOTE:- IF A TEAM IS NOT ABLE TO SEND THE VIDEO on or before 1st March 2025 THEN THE NEXT WAIT LISTED TEAM WILL GET SHORTLISTED. THIS VIDEO WILL BE PUBLISHED IN TRITHON SOCIAL MEDIA LINKS)
            </div>
          </p>
        </div>

      </section>
    </main>
  )
}

export default Results