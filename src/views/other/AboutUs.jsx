import React from 'react'
import {teamates} from '../../data/data'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'

export default function AboutUs() {
  return (
    <div>
    <div className="container my-24 mx-auto md:px-6">
    <section className="mb-32 text-center">
    <h2 className="mb-12 text-3xl font-bold !text-white">
      Meet the <u className="text-green-600">Team</u>
    </h2>

    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      {teamates.map((member)=>(
            <div className="mb-6 lg:mb-0" key={member.id}>
            <div
              className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] !bg-gray-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img src={member.image} className="w-full rounded-t-lg" alt='' />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                </a>
                {member.svg}
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">{member.name}</h5>
                <p className="mb-4 text-gray-500 !text-gray-300">{member.title}</p>
                <ul className="mx-auto flex list-inside justify-center">
                  <Link to={`${member.social.instagram}`}  className="px-2">
                      <FaInstagram/>
                  </Link>
                  <Link to={`${member.social.twitter}`}  className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                      className="h-4 w-4 text-primary !text-primary-400">
                      <path fill="currentColor"
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </Link>
                  <Link to={`${member.social.linkedin}`} className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 text-primary !text-primary-400">
                      <path fill="currentColor"
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
      ))}
    </div>
  </section>
</div>
</div>
  )
}
