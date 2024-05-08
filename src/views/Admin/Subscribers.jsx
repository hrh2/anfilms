import React from 'react'
import Subscribers from "../../components/Cards/Subscribers";
import Subscriptions from "../../components/Cards/Subscriptions";

export default function Subscriber() {
  return (
    <div className="main-content-holder p-4 grid md:grid-cols-2 grid-cols-1 gap-4">
        <Subscribers />
        <Subscriptions />
    </div>
  )
}
