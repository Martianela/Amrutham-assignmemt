import topimg from "../assets/image/topsectionimg.png";
import profile from "../assets/image/profileimg.png";
function TopProfile() {
  return (
    <div className="overflow-hidden rounded-t-lg">
      <img src={topimg} alt="" className="w-full object-cover h-32" />
      <div className="bg-[#FFFBF2] border-[#D8D8D8] border rounded-b-sm">
        <div className="flex justify-between items-center p-6">
          <div className="flex gap-3 relative">
            <img
              src={profile}
              alt=""
              className="rounded-full w-32 h-32 absolute bottom-2 z-10"
            />
            <div className="ml-36">
              <h2 className="text-xl">Dr. Bruce Willis</h2>
              <p className="text-[#3A643B] text-sm">Gynecologist</p>{" "}
              <div className="flex gap-3 items-center mt-2">
                <p className="text-[#3A643B] text-sm">4.2</p>
                <div className="flex items-center text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < 4 ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 17.75L7.65 20.42a1 1 0 01-1.45-1.05l1.07-4.62-3.58-3.3a1 1 0 01.57-1.76l4.69-.4 1.9-4.34c.17-.4.68-.4.84 0l1.9 4.34 4.69.4a1 1 0 01.57 1.76l-3.58 3.3 1.07 4.62a1 1 0 01-1.45 1.05L12 17.75z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-sm text-[#3A643B] mb-1">Followers</p>
              <p className="text-lg font-semibold">850</p>
            </div>
            <div>
              <p className="text-sm text-[#3A643B] mb-1">Following</p>
              <p className="text-lg font-semibold">18K</p>
            </div>
            <div>
              <p className="text-sm text-[#3A643B] mb-1">Posts</p>
              <p className="text-lg font-semibold">250</p>
            </div>
          </div>
          <button className="bg-[#3A643B] text-white px-6 py-3 rounded-md">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
export default TopProfile;
