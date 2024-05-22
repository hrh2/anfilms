import React, { useState } from 'react';
import { iconsImgs } from "../../hooks/images";
// eslint-disable-next-line
import { budget } from "../../data/data";

const Subscribers = () => {
// eslint-disable-next-line
    const [subs, setSubs] = useState([]);

    return (
        <div className="grid-two-item grid-common grid-c4 h-[90%] overflow-y-scroll">
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Subscribers</h3>
                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} alt="" />
                </button>
            </div>
            <div className="grid-c-top text-silver-v1">
                <h2 className="lg-value">Total Cash</h2>
                <span className="lg-value">$ 0.00</span>
            </div>
            <div className="grid-c4-content bg-jet">
                {subs.length === 0 ? (
                    <p>No subscribers yet.</p>
                ) : (
                    <div className="grid-items">
                        {subs.map((sub) => (
                            <div className="grid-item" key={sub.id}>
                                <div className="grid-item-l">
                                    <div className="icon">
                                        <img src={iconsImgs.check} alt='' />
                                    </div>
                                    <p className="text text-silver-v1">{sub.title} <span>{sub.type}</span></p>
                                </div>
                                <div className="grid-item-r">
                                    <span className="text-silver-v1">$ {sub.amount}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Subscribers;
