import React from 'react'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube, IoLogoFacebook, } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='bottom-0 z-50 w-full h-20 bg-zinc-200/70 backdrop-blur-lg text-slate-900'>
      <div className=" flex flex-col justify-center items-center pt-3">
        <div className="w-[90%] flex flex-row justify-between">
          <div className="text-2xl text-center font-extrabold">
            <div>Trithon {year}</div>
          </div>
          <div className='flex justify-center items-center gap-3 p-1'>
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
        <div className="font-semibold">
          <p className='text-center'>&copy; {year} Trident Hackathon Club.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer