import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube, IoLogoFacebook, } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import TrithonGuidelines from '/TrithonGuidelines.docx?url'
import { TiArrowRightThick } from "react-icons/ti";
import trithonlogo from '../assets/trithon.png'


const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Register', href: '/register' },
  { name: 'Invitee Views', href: '/inviteeviews' },
  { name: 'Contact Us', href: '/contact-us' },
]

const updates = [
  { text: 'Registration starts on 25th January 2025' },
  { text: 'Registration extended till 21st February 2025 end of the day' },
  { text: 'Shortlisting of teams on 22nd February 2025' },
]


const Navbar = () => {
  const path = window.location.pathname
  return (
    <>
      <nav className='flex w-full fixed top-5 left-1/2 -translate-x-1/2 z-50 flex-col max-w-[93%] mx-auto px-4 sm:px-6 lg:px-8 bg-zinc-200/70 backdrop-blur-xl saturate-200 rounded-md'>
        <div className='w-full flex flex-col md:flex-row md:p-1 gap-1'>
          <div className='md:w-3/4 flex flex-row p-1 items-center bg-red-500 rounded-lg'>
            <div className='bg-red-500 text-white flex p-1 md:px-5 justify-center rounded-md items-center font-extrabold text-xl'>News: </div>
            <marquee behavior="scroll" direction="left">
              <div className='flex flex-row gap-3'>
                {updates.map((update, index) => (
                  <div className='text-red-50 font-semibold text-xl' key={index}><div className='flex flex-row justify-center items-center'><TiArrowRightThick />{update.text}</div></div>
                ))}
              </div>
            </marquee>
          </div>
          <div className='hidden md:w-1/4 md:flex justify-center items-center gap-9 md:p-3'>
            <a href="https://www.linkedin.com/in/trident-hackathon-club/" target='_blank'>
              <IoLogoLinkedin className='text-2xl text-gray-900 hover:text-gray-700' />
            </a>
            <a href="https://www.instagram.com/tridenthackathonclub/" target='_blank'>
              <IoLogoInstagram className='text-2xl text-gray-900 hover:text-gray-700' />
            </a>
            <a href="https://www.youtube.com/channel/UC9LwUD7Ll1ErF1DLpWfFtUQ" target='_blank'>
              <IoLogoYoutube className='text-2xl text-gray-900 hover:text-gray-700' />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100088839415019" target='_blank'>
              <IoLogoFacebook className='text-2xl text-gray-900 hover:text-gray-700' />
            </a>
            <a href="https://twitter.com/TGI_Hackathon" target='_blank'>
              <RiTwitterXLine className='text-2xl text-gray-900 hover:text-gray-700' />
            </a>
          </div>
        </div>
        <div className="sticky top-0 flex h-14 items-center justify-between gap-4">
          <div className='relative w-28 h-12 md:w-40 md:h-12 overflow-hidden'>
            <a href="/">
              <img src={trithonlogo} className='w-40 h-full object-cover' />
            </a>
          </div>
          <menu className='hidden font-extrabold md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
            {
              links.map((link, index) => (
                <a key={index} href={link.href}
                  className={`
                                ${path === link.href ? 'text-white bg-teal-800 px-5 py-2 rounded-lg' : 'text-gray-700 hover:text-gray-900'}
                                `}
                >
                  {link.name}
                </a>
              ))
            }
            <a key='5' href={TrithonGuidelines} target='_blank' className='text-gray-700 hover:text-gray-900'>
              Guidelines
            </a>
          </menu>
          <div className="focus:bg-none md:hidden p-2">
            <Menubutton path={path} />
          </div>
        </div>

      </nav>
    </>
  )
}

function Menubutton({ path }) {
  const [sidebar, setSidebar] = useState(false);
  const toggleShow = () => {
    setTimeout(() => {
      setSidebar(!sidebar);
    }, 300);

  };


  return (
    <div onClick={toggleShow}>
      <button className="text-xl text-gray-950" onClick={toggleShow}>
        <RxHamburgerMenu />
      </button>
      <div
        className={`${!sidebar ? "translate-x-full transition duration-500 ease-in-out" : "-translate-x-100 transition duration-500 ease-in-out"
          } absolute flex flex-col justify-center bg-[#030513] text-[#e7fddd] items-center -top-16 -right-8 p-1 w-screen h-[100vh] rounded-xl`}
      >
        <span onClick={toggleShow} className="absolute top-3 right-5 text-xl">
          <AiOutlineClose />
        </span>


        <ul className="flex flex-col justify-center gap-14 items-center top-0 text-xl w-full">
          {
            links.map((link, index) => (
              <a key={index} href={link.href}
                className={`
                                ${path === link.href ? 'w-full text-white bg-teal-800 px-5 text-center py-2 rounded-lg' : 'w-full text-center text-gray-600 hover:text-gray-900'}
                                `}
              >
                {link.name}
              </a>
            ))
          }
          <a key='5' href={TrithonGuidelines} target='_blank' className='text-gray-600 hover:text-gray-900'>
            Guidelines
          </a>
        </ul>

        <div className='absolute top-[calc(100vh-10rem)] flex md:hdden justify-center items-center gap-9'>
            <a href="https://www.linkedin.com/in/trident-hackathon-club/" target='_blank'>
              <IoLogoLinkedin className='text-2xl text-gray-400 hover:text-gray-700' />
            </a>
            <a href="https://www.instagram.com/tridenthackathonclub/" target='_blank'>
              <IoLogoInstagram className='text-2xl text-gray-400 hover:text-gray-700' />
            </a>
            <a href="https://www.youtube.com/channel/UC9LwUD7Ll1ErF1DLpWfFtUQ" target='_blank'>
              <IoLogoYoutube className='text-2xl text-gray-400 hover:text-gray-700' />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100088839415019" target='_blank'>
              <IoLogoFacebook className='text-2xl text-gray-400 hover:text-gray-700' />
            </a>
            <a href="https://twitter.com/TGI_Hackathon" target='_blank'>
              <RiTwitterXLine className='text-2xl text-gray-400 hover:text-gray-700' />
            </a>
          </div>
      </div>
    </div>
  );
}

export default Navbar