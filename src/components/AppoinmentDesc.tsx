import { useState } from "react";
import TimeSlotSection from "./TimeSlotSection";
type SessionMode = {
  id: number;
  title: string;
  duration: string;
};

type AppointmentData = {
  appointmentFees: number;
  sessions: SessionMode[];
};

type AppointmentDescProps = {
  appointmentData: AppointmentData;
};

function AppointmentDesc({ appointmentData }: AppointmentDescProps) {
  const { appointmentFees, sessions } = appointmentData;
  const [sessionMode, setSessionMode] = useState<number>(sessions[0]?.id || 1);
  const handleSessionModeCHange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSessionMode(Number(e.currentTarget.id));
  };
  return (
    <div className="border border-[#DCDCDC] rounded-xl px-3 py-5">
      <h3 className="w-full flex justify-between border border-[#E2E2E2] px-6 py-3 rounded-lg">
        <span>Appointment Fee</span>
        <span>₹{appointmentFees}</span>
      </h3>
      <div className="mt-10 px-2">
        <div className="flex items-center gap-1">
          <h3 className="font-medium text-base">Select your mode of session</h3>
          <hr className="flex-1" />
        </div>
        <div className="flex gap-10 justify-center mt-10 w-full">
          {sessions.map((session) => (
            <button
              key={session.id}
              id={session.id.toString()}
              onClick={handleSessionModeCHange}
              className={
                sessionMode === session.id
                  ? "text-center px-10 rounded-md py-2 border text-[#3A643B] border-[#3A643B85] bg-[#F2FBF2]"
                  : "text-center px-10 rounded-md py-2 border border-[#E5E5E5]"
              }
            >
              <h6>{session.title}</h6>
              <p className="text-sm font-light mt-1">{session.duration}</p>
            </button>
          ))}
        </div>
        <TimeSlotSection />
      </div>
    </div>
  );
}
export default AppointmentDesc;
