import React from "react";

import pill from "../assets/icons/pill.svg";
import education from "../assets/icons/education.svg";
import chat from "../assets/icons/chat.svg";
export interface Doctor {
  name: string;
  image: string;
  rating: number;
  expertise: string;
  experience: number;
  languages: string[];
  videoConsultationFee: string;
  chatConsultationFee: string;
}

interface DoctoeDescCardProps {
  doctor: Doctor;
}

const DoctoeDescCard: React.FC<DoctoeDescCardProps> = ({ doctor }) => {
  return (
    <div className="bg-[#FFF7E2] border border-[#E3E3E3] shadow-lg p-7 px-10 flex flex-col gap-3 rounded-2xl w-[356px]">
      <div>
        <div>
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-36 h-36 rounded-full object-cover mx-auto"
          />
          <p className="flex gap-1 justify-center px-3 py-1 text-white bg-black rounded-full w-fit mx-auto relative bottom-5">
            <span>{doctor.rating}</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
                fill="yellow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17.75L7.65 20.42a1 1 0 01-1.45-1.05l1.07-4.62-3.58-3.3a1 1 0 01.57-1.76l4.69-.4 1.9-4.34c.17-.4.68-.4.84 0l1.9 4.34 4.69.4a1 1 0 01.57 1.76l-3.58 3.3 1.07 4.62a1 1 0 01-1.45 1.05L12 17.75z"
                />
              </svg>
            </span>
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-medium text-center">{doctor.name}</h2>
          <div>
            <div className="mx-auto w-fit mt-2">
              <p className="flex gap-3 items-center font-light text-[#646665] text-sm">
                <img src={pill} alt="Expertise" />
                <span>{doctor.expertise}</span>
              </p>
              <p className="flex gap-3 items-center font-light text-[#646665] text-sm mt-1">
                <img src={education} alt="Experience" />
                <span>{doctor.experience} years of Experience</span>
              </p>
              <p className="flex gap-3 items-center font-light text-[#646665] text-sm mt-1">
                <img src={chat} alt="Languages" />
                <span>Speaks: {doctor.languages.join(", ")}</span>
              </p>
            </div>
            <div className="flex gap-2 mt-4 justify-center text-[#3C3C3C]">
              <button className="border border-[#3A643B63] p-2 rounded-lg text-sm">
                <span className="">Video Consultation</span>
                <p className="font-bold text-[#3A643B]">
                  {doctor.videoConsultationFee}
                </p>
              </button>
              <button className="border border-[#3A643B63] p-2 rounded-lg text-sm">
                <span>Chat Consultation</span>
                <p className="font-bold text-[#3A643B]">
                  {doctor.chatConsultationFee}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="border border-[#3A643B] w-full py-2 bg-white text-[#3A643B] rounded-lg">
          View Profile
        </button>
        <button className="w-full bg-[#3A643B] text-white rounded-lg py-3 mt-2">
          Book a consultation
        </button>
      </div>
    </div>
  );
};

export default DoctoeDescCard;
