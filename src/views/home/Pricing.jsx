import React from 'react'
import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
<div class="flex lg:flex-row flex-col lg:justify-center items-center  font-sans bg-slate-100 py-4">
  <div class="lg:w-[23rem] bg-white w-full border-2 lg:border-r-0 border-gray-200 p-5 rounded-2xl lg:rounded-r-none">
    <div class="pb-3 mb-4 border-b border-gray-200">
      <div class="text-xs text-slate-800 mb-2">START</div>
      <h2 class="text-5xl m-0 font-normal">Free</h2>
    </div>
    <div class="flex items-center mb-2">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Basic Content Access
    </div>
    <div class="flex items-center mb-2">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>
      User Profile Creation
    </div>
    <div class="flex items-center mb-5">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Limited Advertising
    </div>
    <div class="flex items-center mb-5">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Community Engagement
    </div>
    <div class="mt-auto w-full">
      <Link to={`/auth/signup`} title='Signup for Free' class="bg-white hover:bg-teal-300 rounded-xl cursor-pointer text-white py-2 border-none w-full flex items-center px-3">
        Get Free
        <svg class="ml-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75"></path>
        </svg>
      </Link>
      <div class="text-xs invisible mt-3 text-slate-600 line-height-2">Literally you probably haven't heard of them jean shorts.</div>
    </div>
  </div>
  <div class="lg:w-[23rem] bg-white w-full lg:my-0 my-4 border-2 border-gray-200 p-5 rounded-2xl lg:rounded-r-none lg:shadow-8">
    <div class="pb-3 mb-4 border-b border-gray-200">
      <div class="text-xs text-slate-800 mb-2">PRO</div>
      <div class="flex items-center">
        <h2 class="text-5xl m-0 font-normal">$1</h2>
        <span class="text-slate-300 ml-1">/mo</span>
      </div>
    </div>
    <div class="flex items-center mb-2">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Advanced Content Library
    </div>
    <div class="flex items-center mb-2">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>
        Enhanced User Experience
    </div>
    <div class="flex items-center mb-2">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Priority Video Requests

    </div>
    <div class="flex items-center mb-2">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Advanced Analytics

    </div>
    <div class="flex items-center mb-2">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Analytics
    </div>
    <div class="flex items-center mb-5">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Advertising Features
    </div>
    <div class="flex items-center mb-5">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Dedicated Support
    </div>
    <div class="mt-auto w-full">
      <Link to={`/auth/signup`} title='Signup for Free'  class="bg-teal-500 rounded-xl cursor-pointer text-white py-2 border-none w-full flex items-center px-3">
        Get Pro
        <svg class="ml-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75"></path>
        </svg>
      </Link>
      <div class="text-xs #invisible mt-3 text-slate-600 line-height-2">For now you can access them for free just Signup.</div>
    </div>
  </div>
  <div class="lg:w-[23rem] bg-white w-full border-2 lg:border-l-0 border-gray-200 p-5 rounded-2xl #lg:rounded-l-none">
    <div class="pb-3 mb-4 border-b border-gray-200">
      <div class="text-xs text-slate-800 mb-2">ENTERPRISE</div>
      <div class="flex items-center">
        <h2 class="text-5xl m-0 font-normal">$5</h2>
        <span class="text-slate-300 ml-1">/mo</span>
      </div>
    </div>
    <div class="flex items-center mb-5">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Content creation
    </div>
    <div class="flex items-center mb-2">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Custom Content Solutions
    </div>
    <div class="flex items-center mb-2">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>
      White Labeling
    </div>
    <div class="flex items-center mb-5">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Access to AI support
    </div>
    <div class="flex items-center mb-5">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Enterprise Security
    </div>
    <div class="flex items-center mb-5">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Scalability and Performance
    </div>
    <div class="flex items-center mb-5 font-bold">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>More and Advanced Advertising
    </div>
    <div class="flex items-center mb-5 font-bold">
      <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
      </svg>Strategic Partnerships
    </div>
    <div class="mt-auto w-full">
      <button class="bg-white hover:bg-teal-700 #transition-colors transition-[2s] rounded-xl cursor-pointer text-white py-2 border-none w-full flex items-center px-3">
        Get Enterprise
        <svg class="ml-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75"></path>
        </svg>
      </button>
      <div class="text-xs mt-3 invisible text-slate-600 line-height-2">Litably haven't heard of them jean shorts.</div>
    </div>
  </div>
</div>
  )
}
