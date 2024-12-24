import { useState } from "react";
import calender_icon from "../assets/icons/calendericon.svg";
import prev from "../assets/icons/prev.svg";
import next from "../assets/icons/next.svg";
import TimeSelectionCard from "./TimeSelectionCard";

interface SlotData {
  id: number;
  date: string;
  day: string;
  slots: number;
  isAvailable: boolean;
}

const timeSlots: SlotData[] = [
  { id: 1, date: "10 Oct", day: "Mon", slots: 2, isAvailable: true },
  { id: 2, date: "11 Oct", day: "Tue", slots: 12, isAvailable: true },
  { id: 3, date: "12 Oct", day: "Wed", slots: 1, isAvailable: false },
  { id: 4, date: "13 Oct", day: "Thu", slots: 5, isAvailable: true },
  { id: 5, date: "14 Oct", day: "Fri", slots: 15, isAvailable: true },
];

function TimeSlotSection() {
  const [sessionMode, setSessionMode] = useState<number | undefined>(1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSessionModeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSessionMode(Number(e.currentTarget.id));
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < timeSlots.length - 3) {
      // Adjust based on how many visible slots you want at once
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getSlotColor = (slots: number) => {
    if (slots > 10) {
      return "text-[#3A643B]"; // Green if slots > 10
    } else if (slots >= 3) {
      return "text-[#F1B93A]"; // Yellow if slots are between 3 and 10
    } else {
      return "text-[#D5512E]"; // Red if slots < 3
    }
  };

  return (
    <div className="mt-10 px-2">
      <div className="flex items-center gap-1">
        <h3 className="font-medium text-base">Pick a time slot</h3>
        <hr className="flex-1" />
        <img
          src={calender_icon}
          alt="calendar"
          className="border rounded-full p-2 border-black/20"
        />
      </div>
      <div className="flex gap-2 items-center mt-10 justify-center border border-[#E1E1E1] p-5 rounded-xl">
        <button onClick={handlePrevClick} disabled={currentIndex === 0}>
          <img
            className="text-center w-7 h-7 p-1 border rounded-full"
            src={prev}
            alt="left"
          />
        </button>

        <div className="flex gap-3 items-center justify-center overflow-hidden max-w-md">
          <div
            className="flex transition-transform duration-300 gap-5"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / timeSlots.length)
              }%)`,
            }}
          >
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                id={String(slot.id)}
                onClick={handleSessionModeChange}
                className={
                  sessionMode === slot.id
                    ? "text-center p-3 rounded-md font-light border text-[#3A643B] border-[#3A643B85] bg-[#F2FBF2] w-32"
                    : "text-center p-3 rounded-md font-light border border-[#E5E5E5] w-32"
                }
              >
                <h6>{`${slot.day}, ${slot.date}`}</h6>
                <p
                  className={`text-sm mt-1 font-medium ${getSlotColor(
                    slot.slots
                  )}`}
                >
                  {!slot.isAvailable
                    ? "Not Available"
                    : `${slot.slots} ${slot.slots > 1 ? "slots" : "slot"}`}
                </p>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNextClick}
          disabled={currentIndex >= timeSlots.length - 3}
        >
          <img
            className="text-center w-7 h-7 p-1 border rounded-full"
            src={next}
            alt="right"
          />
        </button>
      </div>

      <TimeSelectionCard />
      <TimeSelectionCard />

      <div className="p-4">
        <button className="bg-[#3A643B] hover:bg-white hover:text-black hover:border transition-all text-white p-3 rounded-lg w-full">
          Make an Appointment
        </button>
      </div>
    </div>
  );
}

export default TimeSlotSection;
