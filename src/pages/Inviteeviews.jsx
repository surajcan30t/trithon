import React from 'react'
import riet from '../assets/RIET.jpg';
import aryan from '../assets/aryan.jpg';
import bec from '../assets/bec.jpg';
import card1 from '../assets/card-1.jpg';
import card10 from '../assets/card-10.jpg';
import card11 from '../assets/card-11.jpg';
import card12 from '../assets/card-12.jpg';
import card13 from '../assets/card-13.jpg';
import card14 from '../assets/card-14.jpg';
import card2 from '../assets/card-2.jpg';
import card3 from '../assets/card-3.jpg';
import card4 from '../assets/card-4.jpg';
import card6 from '../assets/card-6.jpg';
import card7 from '../assets/card-7.jpg';
import card8 from '../assets/card-8.jpg';
import card9 from '../assets/card-9.jpg';
import centurian from '../assets/centurian.jpg';
import driems from '../assets/driems.jpg';
import driems1 from '../assets/driems1.jpg';
import ein from '../assets/ein.jpg';
import gift from '../assets/gift.jpg';
import gita from '../assets/gita.jpg';
import hitech from '../assets/hitech.jpg';
import imit from '../assets/imit.jpg';
import ipsr from '../assets/ipsr.jpg';
import iter from '../assets/iter.jpg';
import iter1 from '../assets/iter1.jpg';
import kiit from '../assets/kiit.jpg';
import kmbb from '../assets/kmbb.jpg';
import miet from '../assets/miet.jpg';
import nislogo from '../assets/nislogo.jpg';
import oec from '../assets/oec.jpg';
import ouat from '../assets/ouat.jpg';
import rcm from '../assets/rcm.jpg';
import rec from '../assets/rec.jpg';
import shibani from '../assets/shibani.jpg';
import spintronic from '../assets/spintronic.jpg';
import trident from '../assets/trident.png';
import trithon from '../assets/trithon.png';
import xuv from '../assets/xuv.jpg';
import Navbar from '../components/Navbar'

const inviteeviews = [
  {
    "name": "Prof Dr. Tripti Swarnkar",
    "title": "HOD CA",
    "institution": "Institute of Technical Education & Research",
    "location": "Bhubaneswar, Odisha",
    "quote": "It's a good platform. It gives opportunity to young innovative minds. My best wishes for the success of the program.",
    "image": iter1
  },
  {
    "name": "Asso. Prof. Sradhanjali Mohapatra",
    "title": "School of Electronics",
    "institution": "KIIT University",
    "location": "Bhubaneswar, Odisha",
    "quote": "When you are enthusiastic about what you do, then something is guaranteed to happen, i.e., you feel a +ve energy which will simplify any problem.",
    "image": kiit
  },
  {
    "name": "Prof. A. K. Ray",
    "title": "Dean",
    "institution": "KIIT, School of Electronics",
    "location": "Bhubaneswar, Odisha",
    "quote": "More participation will ensure success & mind-blowing results for TRITHON.",
    "image": card12
  },
  // the above data as on 1 11 2023
  {
    "name": "Dr. Ajit K Pradhan",
    "title": "HOD CS & IT",
    "institution": "Institute of Technical Education & Research",
    "location": "Bhubaneswar, Odisha",
    "quote": "Trithon will provide a platform for young programmers' skill exploration. All the best for the participants.",
    "image": card1
  },
  {
    "name": "Dr. Sujata Chakravarty",
    "title": "HOD CS & IT",
    "institution": "Centurian University of Technology And Management",
    "location": "Bhubaneswar, Odisha",
    "quote": "Wish a great success of the event.",
    "image": centurian
  },
  {
    "name": "Dr. S K Bisoi",
    "title": "Dean",
    "institution": "C V RAMAN COLLEGE OF ENGINEERING",
    "location": "Bhubaneswar, Odisha",
    "quote": "It is a nice platform for students to showcase their talents.",
    "image": card7
  },
  {
    "name": "Satyabrata Maity",
    "title": "Asst. Prof",
    "institution": "SIKSHA 'O' ANUSANDHAN",
    "location": "Bhubaneswar, Odisha",
    "quote": "Hackathon is a nice platform to provide better opportunities to learn programming. It's also helping to enhance programming skills.",
    "image": iter
  },
  {
    "name": "Prof. Surajit Mohanty",
    "title": "Dept. CS & IT",
    "institution": "DRIEMS",
    "location": "Cuttack, Odisha",
    "quote": "Organizing such an event fulfills the gap between institute and industry requirements and also creates positiveness among the students.",
    "image": driems1
  },
  {
    "name": "Dr. Pradyumna Kumar Tripathy",
    "title": "HOD, Computer Science",
    "institution": "Silicon Institute of Technology",
    "location": "Bhubaneswar, Odisha",
    "quote": "It is a great initiative from a team of dedicated members from Trident. I wish the event to be a grand success.",
    "image": card13
  },
  {
    "name": "Tarini Prasad Panigrahy",
    "title": "Asso. Prof. HOD CSE",
    "institution": "Gandhi Institute for Technological Advancement",
    "location": "Bhubaneswar, Odisha",
    "quote": "Nice attempt.",
    "image": card3
  },
  {
    "name": "Mr. R N Sahu",
    "title": "Principal",
    "institution": "College of IT & Management Education",
    "location": "Bhubaneswar, Odisha",
    "quote": "Good initiative. Should continue every year.",
    "image": card6
  },
  {
    "name": "",
    "title": "College of Engineering",
    "location": "Bhubaneswar, Odisha",
    "quote": "All the best for grand success of the fest.",
    "image": card14
  },
  {
    "name": "Dr. Sasanka Sekhar Kanungo",
    "title": "HOD CSE",
    "institution": "Radhakrishna Institute of Technology and Engineering",
    "location": "Bhubaneswar, Odisha",
    "quote": "Wishing all the best for all the participants of Trithon. May the best group win and achieve success in their life through this event.",
    "image": riet
  },
  {
    "name": "Dr. Subendhu Prasad Sahoo",
    "title": "HOD CS & IT",
    "institution": "Einstein Academy of Technology and Management",
    "location": "Bhubaneswar, Odisha",
    "quote": "Good platform for all bright students.",
    "image": ein
  },
  {
    "name": "Dr. S.N. Patnaik",
    "title": "HOD CS & IT",
    "institution": "Hi-Tech College of Engineering",
    "location": "Bhubaneswar, Odisha",
    "quote": "Go Ahead. Do such activities.",
    "image": hitech
  },
  {
    "name": "Dr. M.K. Rout",
    "title": "Principal",
    "institution": "Gandhi Institute of Technological Advancement",
    "location": "Bhubaneswar, Odisha",
    "quote": "All the best.",
    "image": gita
  },
  {
    "name": "Dr. S. K. Dixit",
    "title": "NIIS Institute of Business Administration",
    "location": "Bhubaneswar, Odisha",
    "quote": "Best Wishes for Successful and Disciplined Performance of the Event. 'JAI HO.'",
    "image": nislogo
  },
  {
    "name": "Dr. S. S. Khuntia",
    "title": "Vice Principal",
    "institution": "Gandhi Institute of Excellent Technocrats",
    "location": "Bhubaneswar, Odisha",
    "quote": "All good wishes for (TRITHON). A mind-blowing session for Technocrats.",
    "image": card2
  },
  {
    "name": "Prof. Priyadarsan Patra",
    "title": "DEAN of Computer Science Engineering",
    "institution": "Xavier University, Jatani",
    "location": "Bhubaneswar, Odisha",
    "quote": "It's a great effort in developing the all important talent of building and coding system. Our best wishes to the Trithon team!",
    "image": xuv
  },
  {
    "name": "Prof. Suryakanta Mahapatra",
    "title": "Principal UG Professional Wing",
    "institution": "NIIS Institute of Information Science & Management",
    "location": "Bhubaneswar, Odisha",
    "quote": "This event i.e. TRITHON is the best one for our state and also this initiation of this program is the biggest one.",
    "image": card4
  },
  {
    "name": "Rayaguru A.K Das",
    "title": "HOD",
    "institution": "The Institute of Management and Information Technology",
    "location": "Cuttack, Odisha",
    "quote": "Congratulations for organising such an event. All the best for the event.",
    "image": imit
  },
  {
    "name": "Er. Deepneel Majumdar",
    "title": "HOD, Computer Science & IT",
    "institution": "Orissa Engineering College",
    "location": "Bhubaneswar, Odisha",
    "quote": "It is a great initiative to unlock the true potential of a technocrat. Excellent platform to showcase skills. I wish all the best to the organizers to make it a grand success.",
    "image": oec
  },
  {
    "name": "Mr. Nayan Ranjan Paul",
    "title": "HOD, CSE",
    "institution": "KMBB College of Engineering & Technology",
    "location": "Bhubaneswar, Odisha",
    "quote": "I wish best of luck to all participants of TRITHON.",
    "image": kmbb
  },
  {
    "name": "Prof. Dr. Jyoti Prasad Patra",
    "title": "Principal",
    "institution": "Shibani Institute of Technology Education",
    "location": "Khurda, Odisha",
    "quote": "Best wishes for TRITHON At Trident. Let the spirit progress to take our country technically self-sustainable. Thanks",
    "image": shibani
  },
  {
    "name": "Prof. Chandan Kumar Panda",
    "title": "HOD, CSE",
    "institution": "ARYAN Institute of Engineering & Technology",
    "location": "Bhubaneswar, Odisha",
    "quote": "My best wishes with the group of faculties and students who have shown their immense interest to go through TRITHON. We on behalf of AIET, BBSR are ready to provide our support to such type of innovative ideas and to make it a grand success.",
    "image": aryan
  },
  {
    "name": "Dr. S.K. Mishra",
    "title": "Principal",
    "institution": "Gandhi Institute for Technology",
    "location": "Bhubaneswar, Odisha",
    "quote": "All the Best.",
    "image": gift
  },
  {
    "name": "Prof. P.K. Nayak",
    "title": "In-Charge",
    "institution": "Spintronic Technology & Advance Research",
    "location": "Bhubaneswar, Odisha",
    "quote": "Best wishes for grand success of TRITHON.",
    "image": spintronic
  },
  {
    "name": "Prof. Rajeev Agarwal",
    "title": "HOD, Computer Science",
    "institution": "DRIEMS Autonomous Engineering College",
    "location": "Bhubaneswar, Odisha",
    "quote": "I wish the entire team a great success and I will make sure that at least 2 teams from my college will participate.",
    "image": driems
  },
  {
    "name": "Dr. Basanti Rout",
    "title": "Principal",
    "institution": "Oxford College",
    "location": "Bhubaneswar, Odisha",
    "quote": "It is a nice step for cultivating innovative technical brains. Our institute wishes you for success. We will also motivate our students to become a part of your programme.",
    "image": card8
  },
  {
    "name": "Mr. Uttam Kumar Jena",
    "title": "HOD, Computer Science",
    "institution": "Raajdhani Engineering College",
    "location": "Bhubaneswar, Odisha",
    "quote": "Today's Generation Students should learn things in a positive direction. All the best for the program to be conducted.",
    "image": rec
  },
  {
    "name": "",
    "title": "Asst. Prof. & TPO",
    "institution": "United School of Business Management",
    "location": "Bhubaneswar, Odisha",
    "quote": "Excellent initiative for younger generation to contribute to the development of society.",
    "image": card10
  },
  {
    "name": "Dr. Jogeswari Rout",
    "title": "Principal",
    "institution": "Synergy College",
    "location": "Bhubaneswar, Odisha",
    "quote": "Good initiation. Keep it up.",
    "image": card9
  },
  {
    "name": "Mr. Bana Bihari Mishra",
    "title": "Chief Co-ordinator",
    "institution": "East College",
    "location": "Bhubaneswar, Odisha",
    "quote": "Very good college.",
    "image": card11
  },
  {
    "name": "Dr. Subrat P. Mishra",
    "title": "DEAN",
    "institution": "Regional College of Management",
    "location": "Bhubaneswar, Odisha",
    "quote": "My good wishes on the new initiatives.",
    "image": rcm
  },
  {
    "name": "Mr. A. Dash",
    "title": "HOD, CSA, CPGS",
    "institution": "Odisha University of Agriculture & Technology",
    "location": "Bhubaneswar, Odisha",
    "quote": "With Good Wishes from Dept. of CSA, CPGS, OUAT, BBSR.",
    "image": ouat
  },
  {
    "name": "Mr. Manas Kumar Swain",
    "title": "Asst. Prof.",
    "institution": "Bhubaneswar Engineering College",
    "location": "Khurda, Odisha",
    "quote": "All the best for Trithon-19",
    "image": bec
  },
  {
    "name": "Dr. A.K. Mishra",
    "title": "Principal",
    "institution": "Institute of Professional Studies & Research",
    "location": "Cuttack, Odisha",
    "quote": "All the Best",
    "image": ipsr
  },
  {
    "name": "Mr. B.K. Gouda",
    "title": "Principal",
    "institution": "Mahavir Institute of Engineering and Technology",
    "location": "Bhubaneswar, Odisha",
    "quote": "Best wishes to Trident students. All the best.",
    "image": miet
  }
]


const Inviteeviews = () => {
  return (
    <>
      <main id="main" className="site-main w-full px-4 md:px-8 lg:px-16 py-8">
        <section className="bg-gray-900 rounded-lg py-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Invitee Views</h2>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-center gap-6 p-1">
            {
              inviteeviews.map((inviteeview, index) => {
                return (
                  <Card key={index} {...inviteeview} />)
              }
              )
            }
          </div>
          <div className='text-sm bg-yellow-100 flex justify-center'>
            <h1 className='text-black'>**The above data as per 1/11/2023**</h1>
          </div>
        </section>
      </main>
    </>
  )
}

function Card({ name, title, institution, location, quote, image }) {
  return (
    <div className="bg-stone-300/10 flex flex-col justify-start items-center rounded-lg shadow-lg p-6">
      <div className='w-40 h-40 rounded-xl overflow-hidden'>
        <img src={image} alt={name} className='w-full h-full object-cover' />
      </div>
      <h2 className="text-purple-400 text-xl font-semibold mt-4">{name ? name : ''}</h2>
      <p className="text-gray-50 font-medium">{title}</p>
      <p className="text-gray-200 text-center">{institution}, {location}</p>
      <p className="text-gray-300 italic mt-3">"{quote}"</p>
    </div>
  );
}

export default Inviteeviews