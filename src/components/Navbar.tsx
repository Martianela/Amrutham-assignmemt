import { Link } from "react-router-dom";
import brandlogo from "../assets/image/brand.png";
function Navbar() {
  return (
    <div className="flex justify-center p-4 bg-[#FFF7E2]">
      <div className="flex justify-between max-w-7xl w-full">
        <div className=" flex justify-between items-center">
          <img src={brandlogo}></img>
          <div className="text-[#3A643B] flex gap-6 ml-24">
            <a href="/">Home</a>
            <Link to="/find-doctors">Find Doctors</Link>
            <a href="/">About Us</a>
          </div>
        </div>
        <div className="flex h-fit">
          <button className="border rounded-md px-8 py-2 border-[#3A643B]">
            Login
          </button>
          <button className="rounded-md px-8 py-2 ml-3 bg-[#3A643B] text-white">
            Sign-up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
