import React from 'react'
import Navbar from '../components/Navbar'

const ContactUs = () => {
  return (
    <>
      <main id="main" className="site-main w-full px-4 md:px-8 lg:px-16 py-8">
        <section id="contact" class="bg-violet-200 rounded-lg text-black py-16 md:py-24">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-semibold text-center mb-8">Contact Us</h2>
            <div class="flex flex-col md:flex-row justify-center mb-8 space-y-8 md:space-y-0 md:space-x-8">
              <div class="contact-person text-center">
                <h3 class="text-xl font-semibold mb-3">Sumanta Sahoo</h3>
                <p class="mb-1">Email: <a href="mailto:sumanta@example.com" class="underline hover:no-underline">[email&#160;protected]</a></p>
                <p>Phone: +91 9437386374</p>
              </div>
              <div class="contact-person text-center">
                <h3 class="text-xl font-semibold mb-3">Aditya Narayan Das</h3>
                <p class="mb-1">Email: <a href="mailto:aditya@example.com" class="underline hover:no-underline">[email&#160;protected]</a></p>
                <p>Phone: +91 8249083661</p>
              </div>
            </div>
            <div class="flex justify-center">
              <iframe
                id="google-iframe"
                src="https://docs.google.com/forms/d/e/1FAIpQLSctl1H5JHNUcfL6uKdXX9DYXIOPlLLnhA43h2gk_KI7X7Nq5A/viewform?embedded=true"
                class="w-full aspect-video text-white"
                height="1000"
                frameborder="1"
                marginheight="0"
                marginwidth="0"
                onload="document.getElementById('iframe-loader').style.display = 'none';"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ContactUs