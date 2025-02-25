import React from 'react'
import ShortlistedTeams from '../../data/shortlistedteams'
import WaitingListTeams from '../../data/waitinglistteams'

const Results = () => {
  return (
    <main id="main" className="site-main w-full px-4 md:px-8 lg:px-16 py-8">
      <section className="bg-gray-900 rounded-lg py-4">
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
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                </tr>
              </thead>
              <tbody>
                {
                  ShortlistedTeams.map((team, index) => {
                    return (
                      <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-lg text-yellow-100">
                        <td className="px-6 py-4">
                          {team.sl}
                        </td>
                        <td className="px-6 py-4">
                          {team.teamName}
                        </td>
                        <td className="px-6 py-4">
                          {team.teamLeader}
                        </td>
                        <td className="px-6 py-4">
                          {team.mailId}
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 rounded-lg py-4 mt-5">
        <div className="container mx-auto text-center my-5">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">TEAMS ON THE WAITING LIST</h3>
        </div>
        <div className="container mx-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                </tr>
              </thead>
              <tbody>
                {
                  WaitingListTeams.map((team, index) => {
                    return (
                      <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-lg text-yellow-100">
                        <td className="px-6 py-4">
                          {team.sl}
                        </td>
                        <td className="px-6 py-4">
                          {team.teamName}
                        </td>
                        <td className="px-6 py-4">
                          {team.teamLeader}
                        </td>
                        <td className="px-6 py-4">
                          {team.mailId}
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Results