import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
    <main id="main" className="site-main w-full px-4 md:px-8 lg:px-16 py-8">
      <section className="bg-gray-900 rounded-lg py-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Trithon 2025</h2>
        </div>
      
        <div className="container mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-100 mt-4 max-w-3xl mx-auto p-1 md:p-0">
            Trithon 2025 is an inter college level coding challenge which identifies students from different colleges with innovative ideas to serve for the benefit of humanity in general. There is no registration fee to participate in this challenge. It is a multi-level challenge, with rejection at each level. It's a non-stop product development competition, where problem statements are posed to technology students for innovative solutions. It can help to: <br />
            <br />
            <div className='text-start'>
              1. Harness creativity & expertise of students <br />
              2. Build funnel for new Startup company <br />
              3. Crowdsource solutions for improving governance and quality of life <br />
              4. Get chance to Win exciting cash prizes
            </div>
          </p>
        </div>
      </section>

      <section className="bg-gray-900 py-12">
        <div className="container mx-auto flex flex-wrap justify-center gap-6">
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg flex flex-col w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-xl font-semibold">Trithon 2025 (Open Innovation)</h3>
            <p className="mt-4">Date: 21st & 22nd February 2025</p>
            <p className="mt-4">This will be an open hackathon, a continuous uninterrupted 24-hour event starting at 11 AM, focusing on problem statements within the event’s theme.</p>
            <a href="https://forms.gle/XFU8hw1LrZBsPwNx9" target="_blank" className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md text-center hover:bg-green-600 font-bold">Register</a>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default About