import React, { useState } from "react";

interface TimeSlotData {
  session: string;
  timeSlots: string[];
}

const TimeSelectionCard: React.FC = () => {
  const timeSlotData: TimeSlotData = {
    session: "morning",
    timeSlots: [
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
    ],
  };

  // State to track the selected button
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedSlot(id);
  };

  return (
    <div className="p-4 mx-auto">
      <h2 className="text-lg font-medium mb-4 px-4">
        Session: {timeSlotData.session}
      </h2>
      <div className="flex gap-4 flex-wrap">
        {timeSlotData.timeSlots.map((time, index) => {
          const id = `${timeSlotData.session}-${index}`;
          const isSelected = selectedSlot === id;

          return (
            <button
              key={id}
              id={id}
              onClick={() => handleSelect(id)}
              className={`border border-[#EBEBEB] p-5 rounded-2xl font-light capitalize transition-all ${
                isSelected && "bg-[#3A643B] text-white"
              }`}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSelectionCard;
