import React from 'react'
import trithonprize from '../assets/trithonprize.jpg'
import trithontimeline from '../assets/trithontimelinewithlogo.jpg'
import { GiPodiumWinner, GiPodiumSecond, GiPodiumThird } from "react-icons/gi";
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import DESC1240 from '../assets/DESC1240.jpeg'
import DESC1241 from '../assets/DESC1241.jpeg'

const year = new Date().getFullYear()
const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-4 justify-center px-4 sm:px-6 lg:px-8">

        {/* Winning Prize Section */}
        <section id="" className="w-full md:min-h-[90vh] flex justify-center items-center mt-5">
          <div className="flex flex-col justify-center items-center gap-5 text-yellow-100 font-bold">
            <h2 className="text-3xl md:text-4xl text-center">Winning Prize</h2>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
              <img src={trithonprize} alt="First Prize" className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-[70%] flex flex-col justify-center items-center">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-center">Prizes to be won</h1>
              <div className="flex justify-center items-center gap-5 md:gap-20 mt-6">
                <PrizeCard icon={<GiPodiumSecond className="text-7xl sm:text-9xl text-zinc-400" />} prize="₹20,000" position="2nd" />
                <PrizeCard icon={<GiPodiumWinner className="text-7xl sm:text-9xl text-[#fdc620]" />} prize="₹30,000" position="1st" />
                <PrizeCard icon={<GiPodiumThird className="text-7xl sm:text-9xl text-orange-400" />} prize="₹10,000" position="3rd" />
              </div>
              <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-10 mt-5 bg-slate-300 text-stone-700 rounded-lg p-4 text-center">
                <PrizeText text="4th Place: ₹6,000" />
                <PrizeText text="5th Place: ₹4,000" />
                <PrizeText text="Next 5 Positions: ₹3,000" />
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2'>
                  <div className='w-full bg-orange-500 text-white py-2 px-4 rounded-lg md:text-3xl'>Special award: Hero of Trithon ₹5,000</div>
                  <div className='w-full md:hidden bg-orange-500 text-white py-2 px-4 rounded-lg md:text-3xl'>Special gift worth:  ₹10,000</div>
                  <div className='w-full hidden md:block bg-orange-500 text-white py-2 px-4 rounded-lg md:text-3xl'>Special gift worth:  <br />₹10,000</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* What is Trithon Section */}
        <SectionContainer
          title="What is Trithon 2025?"
          link="/about"
          linkText="Know more"
          style={{ backgroundImage: `url(${DESC1240})` }}
        >
          <p>
            This is an inter-college level coding challenge that identifies students from different colleges with innovative ideas to serve the benefit of humanity.
            It is a multi-level challenge with rejection at each level. It’s a non-stop product development competition, where problem statements are posed to technology students for innovative solutions.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Harness creativity & expertise of students</li>
            <li>Build funnel for new Startup company</li>
            <li>Crowdsource solutions for improving governance and quality of life</li>
            <li>Get a chance to win exciting cash prizes</li>
          </ul>
          {/* <h4 className="mt-6 text-lg sm:text-3xl font-extrabold bg-gradient-to-r bg-clip-text  text-transparent from-[#9dffff] via-[#ffff11] to-[#ff8411] animate-txt tracking-mwider">
            HACKATHON THEME: Technology Intervention for a Sustainable Future
          </h4> */}
        </SectionContainer>

        {/* Hackathon Track Section */}
        <SectionContainer title="Hackathon Info" background="bg-slate-950/50 rounded-lg" style={{ backgroundImage: `url(${DESC1241})` }} className="bg-cover bg-center" reverse={true}>
          <div className="bg-violet-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400">
              Trithon 2025 (Open Innovation) <br />
              <span className="text-white text-lg">Date: 8th & 9th March 2025</span>
            </h3>
            <p className="mt-4 text-gray-300">
              This will be an open hackathon meant for boys and girls, and will be a <b>continuous 24-hour</b> event starting from 9 AM. The problem statement will be under the overall theme of this event.
            </p>
            <a
              href="https://forms.gle/XFU8hw1LrZBsPwNx9"
              target="_blank"
              className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
            >
              Register
            </a>
          </div>
        </SectionContainer>
        <div className='w-full h-full md:min-h-[90vh] my-5 rounded-lg overflow-hidden flex flex-col justify-center items-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-center text-white mb-2'>Trithon {year} Timeline</h1>
          <div className='w-full md:w-[70%] h-full md:h-[35%] my-5 rounded-lg overflow-hidden'>
            <img src={trithontimeline} alt="Trithon Timeline" className="border w-full h-full object-contain" />
          </div>
        </div>
        <h1 className='text-3xl md:text-5xl font-bold text-center text-white mb-2'>Trithon Gallery</h1>
        <Gallery />
      </div>
    </>
  )
}

const PrizeCard = ({ icon, prize, position }) => (
  <div className="flex flex-col justify-center items-center">
    {icon}
    <h2 className='text-lg sm:text-xl'>{position}</h2>
    <h1 className="text-2xl sm:text-3xl">{prize}</h1>
  </div>
);

// Prize Text Component
const PrizeText = ({ text }) => <div className="text-lg sm:text-2xl font-bold">{text}</div>;

// Section Container Component
const SectionContainer = ({
  title,
  children,
  link,
  linkText,
  style = {},
  background = "bg-gray-900/0 rounded-lg",
  reverse = false
}) => (
  <section
    className={`${background} relative text-white py-12 px-4 sm:px-6 md:px-8 mb-10 w-full min-h-[90vh] bg-cover bg-center overflow-hidden flex items-center`}
    style={style}
  >
    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Content on top */}
    <div className={`relative z-10 max-w-[90%] md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg 
      ${reverse ? "md:[direction:rtl]" : "md:[direction:ltr]"}
    `}>
      <div className="flex flex-col justify-center">
        <h2 className={`text-3xl sm:text-4xl font-extrabold leading-tight text-center ${reverse ? "md:text-right" : "md:text-left"}`}>
          {title}
        </h2>
        {link && (
          <a
            href={link}
            target="_blank"
            className="w-fit mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            {linkText}
          </a>
        )}
      </div>
      <div className="text-lg leading-relaxed bg-slate-600 p-4 sm:p-6 rounded-lg">
        {children}
      </div>
    </div>
  </section>
);

export default Home