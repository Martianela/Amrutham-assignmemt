import womentHealth from "../assets/image/women_health.png";
import skinCare from "../assets/image/skink_care.png";
import immunity from "../assets/image/immunity.png";
import hairCare from "../assets/image/hair_care.png";
function SpecializationCard() {
  return (
    <>
      <div className="border border-[#DCDCDC] rounded-lg max-w-2xl">
        <div className="bg-[#F4F7EC] px-8 py-5 flex items-center justify-between">
          <h4 className="text-lg text-[#313131] capitalize">I Specialize In</h4>
        </div>
        <div className="px-8 py-4 flex gap-4">
          <div>
            <img src={womentHealth} alt="" className="w-24 h-24 rounded-lg" />
            <p className="capitalize mt-1 text-center">women Health</p>
          </div>
          <div>
            <img src={skinCare} alt="" className="w-24 h-24 rounded-lg" />
            <p className="capitalize mt-1 text-center">women Health</p>
          </div>
          <div>
            <img src={immunity} alt="" className="w-24 h-24 rounded-lg" />
            <p className="capitalize mt-1 text-center">women Health</p>
          </div>
          <div>
            <img src={hairCare} alt="" className="w-24 h-24 rounded-lg" />
            <p className="capitalize mt-1 text-center">women Health</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecializationCard;
