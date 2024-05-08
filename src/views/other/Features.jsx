import React from 'react'
import { features } from '../../data/data'
import {Link} from 'react-router-dom'                                                                    

export default function Features() {
  return (
    <div className="container  mx-auto bg-[#000000b9] p-4 rounded-md">
      <section className="mb-16">
        <h2 className="mb-12 text-center text-3xl font-bold !text-[#ffffffea]">
          Why is it so great?
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="w-full">
            <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg !shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/textures/full/98.jpg" className="w-full" alt=''/>
              <Link href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                  <div className="flex h-full items-center justify-center">
                    <div className="px-6 py-12 text-center !text-white md:px-12">
                      <h3 className="mb-6 text-2xl font-bold uppercase">
                       Dive into the World of Cinematic Marvels
                        <u className="text-[hsl(127,66%,46%)]"> Now</u>
                      </h3>
                      <p className="text-[hsl(210,12%,80%)]">
                      Explore the boundless universe of movie CGI, mesmerizing VFX, and expertly crafted video editing. Our platform transports you to realms where imagination knows no bounds. Delve into captivating narratives, mind-bending visual effects, and awe-inspiring cinematography that redefine the art of storytelling. Embark on an exhilarating journey through the magic of cinema, where each frame unveils a new adventure and every scene ignites the imagination. Join us as we celebrate the artistry, innovation, and sheer brilliance of cinematic masterpieces.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='grid grid-flow-row gap-4'>
          {features.map((feature)=>(
            <div className="w-full">
            <div className=" flex gap-4">
              <div className="shrink-0">
                <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg !bg-[hsl(204,23%,30%)] !text-white">
                  {feature.icon}
                </div>
              </div>
              <div className="ml-4 grow !text-white">
                <p className="mb-1 font-bold">{feature.title}</p>
                <p className="text-gray-500 !text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
          ))}
          </div>
        </div>
      </section>
    </div>
    )
}
