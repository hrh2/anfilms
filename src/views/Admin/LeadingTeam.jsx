import React from 'react';
import { team } from "../../data/data";

const LeadershipTeam = () => {
    return (
        <div className="flex flex-col items-center justify-center p-2">
            <h1 className="text-3xl font-bold mb-4">Leading Board</h1>
            {team.map((member, index) => (
                <div key={index+member.position} className="max-w-full md:w-[70%] w-full bg-white shadow-md rounded-lg p-6 mb-4">
                    <div className="flex items-center mb-4">
                        {member.icon}
                        <h2 className="text-xl font-semibold">{member.position}</h2>
                    </div>
                    {member.name && <p className="text-gray-700 mb-4"><span className="font-semibold">Name:</span> {member.name}</p>}
                    <div className="mb-4">
                        <p className="text-gray-700 font-semibold mb-2">Responsibilities:</p>
                        <ul className="list-disc list-inside">
                            {member.responsibilities.map((responsibility, index) => (
                                <li key={index} className="text-gray-600">{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LeadershipTeam;
