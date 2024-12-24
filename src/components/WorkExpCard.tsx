import WorkHome from "../assets/icons/home-work.svg";
function WorkExpCard() {
  return (
    <div className="border border-[#DCDCDC] rounded-lg">
      <div className="bg-[#F4F7EC] px-8 py-5  items-center flex justify-between">
        <h4 className="text-lg text-[#313131]">My Work Experience</h4>
      </div>
      <div className="px-8 py-4 mb-5 ">
        <h3 className="font-medium uppercase text-[#3A643B] mb-5">
          I have been in practice for : 7+ Years
        </h3>
        <hr className="w-[70%]" />
        <div className="mt-5 flex items-center gap-3">
          <div className="bg-[#F7F7FC] w-fit p-3 rounded-sm">
            <img src={WorkHome} alt="" className="text-violet-600" />
          </div>
          <div className="flex justify-between flex-1 max-w-[70%]">
            <div>
              <h3 className="capitalize">Midtown Medical Clinic</h3>
              <p className="text-[#33354880]">Senior doctor</p>
            </div>
            <p className="w-32 uppercase text-[#333548B5]">2016-present</p>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <div className="bg-[#F7F7FC] w-fit p-3 rounded-sm">
            <img src={WorkHome} alt="" className="text-violet-600" />
          </div>
          <div className="flex justify-between flex-1 max-w-[70%]">
            <div>
              <h3 className="capitalize">Midtown Medical Clinic</h3>
              <p className="text-[#33354880]">Senior doctor</p>
            </div>
            <p className="w-32 uppercase text-[#333548B5]">2016-2015</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WorkExpCard;
