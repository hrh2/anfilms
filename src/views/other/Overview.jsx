import React from 'react'
import { overview } from '../../data/data'
import {Link} from 'react-router-dom'                                                                    

export default function Overview() {
  return (
<div className="container mx-auto bg-[#00000090] rounded-xl">
  <section className="md:p-5 p-2">
    <h2 className="text-center text-3xl font-bold text-[#fff]">
      Our Co<span className='text-green-600'>ntent</span>
    </h2>
    <div className="grid gap-6 lg:grid-cols-3 p-4">
      {overview.map((component)=>(
        <div
          key={component.id}
        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg !shadow-black/20 bg-[50%]"
        data-te-ripple-init data-te-ripple-color="dark">
        <img src={component.image}
          className="w-full align-middle transition duration-300 ease-linear"  alt=''/>
        <Link to={`/${component.link}`}>
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
            <div className="flex h-full items-end justify-start">
              <h5 className="m-6 text-lg font-bold !text-white p-2 px-4 bg-[#000000a7] rounded-md">
                {component.title}
              </h5>
            </div>
          </div>
          <div>
            <div
              className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
            </div>
          </div>
        </Link>
      </div>
      ))}
    </div>
  </section>
</div>)
}
