import AboutMeCard from "../components/AboutMeCard";
import AppointmentDesc from "../components/AppoinmentDesc";
import ConsernCard from "../components/ConsernCard";
import FeaturedReview from "../components/FeaturedReview";
import Navbar from "../components/Navbar";
import SpecializationCard from "../components/SpecializationCard";
import TopProfile from "../components/TopProfile";
import WorkExpCard from "../components/WorkExpCard";
const appointmentData = {
  appointmentFees: 699.0,
  sessions: [
    {
      id: 1,
      title: "In-clinic",
      duration: "45-mins",
    },
    {
      id: 2,
      title: "Video",
      duration: "45-mins",
    },
    {
      id: 3,
      title: "Chat",
      duration: "10-mins",
    },
  ],
};

function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl my-16 mx-auto ">
        <TopProfile />
        <div className="flex gap-9 mt-10">
          <div className="flex-1 p-1 flex flex-col gap-5">
            <AboutMeCard
              title="A Little About Me"
              description="Hello, I am Dr. Bruce Willis, a Gynaecologist at Sanjivni Hospital, Surat. I love to work with all my hospital staff and senior doctors. I completed my graduation in Gynaecological Medicine from..."
              languages={["English", "Hindi", "Telugu"]}
            />
            <SpecializationCard />
            <ConsernCard />
            <WorkExpCard />
            <FeaturedReview />
          </div>
          <div className="flex-1">
            <AppointmentDesc appointmentData={appointmentData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
