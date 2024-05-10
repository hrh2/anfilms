import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile({user}) {
  return (
    <div className="md:w-full max-w-full px-3 lg-max:mt-6  my-4 ">
      <div className="relative flex flex-col h-full min-w-0 break-words  border-0 shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <div className="flex flex-wrap -mx-3">
            <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
              <h6 className="mb-0">Profile Information</h6>
            </div>
            <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
              <Link to="/admin" data-target="tooltip_trigger" data-placement="top">
                <i className="leading-normal fas fa-user-edit text-sm text-slate-400" aria-hidden="true"></i>
              </Link>
              <div data-target="tooltip" className="px-2 py-1 !text-center !text-white !bg-black rounded-lg text-sm " role="tooltip" data-popper-placement="top">
                Edit Profile
                <div className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow=""></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4">
          {/*<p className="leading-normal text-sm">Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>*/}
          <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"/>
          <ul className="flex flex-col pl-0 mb-0 rounded-lg">
            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal  border-0 rounded-t-lg text-sm text-inherit">
              <strong className="text-slate-700">Full Name:</strong> &nbsp; {user.name?user.name:`${user.firstName} ${user.lastName}`}
            </li>
            <li className="relative block px-4 py-2 pl-0 leading-normal  border-0 border-t-0 text-sm text-inherit">
              <strong className="text-slate-700">Mobile:</strong> &nbsp; {user.phone}
            </li>
            <li className="relative block px-4 py-2 pl-0 leading-normal  border-0 border-t-0 text-sm text-inherit">
              <strong className="text-slate-700">Email:</strong> &nbsp; {user.email}
            </li>
            <li className="relative block px-4 py-2 pl-0 leading-normal  border-0 border-t-0 text-sm text-inherit">
              <strong className="text-slate-700">Location:</strong> &nbsp; ...
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
