import { useState, ChangeEvent } from "react";
import Navbar from "../components/Navbar";
import location_icon from "../assets/icons/location-icon.svg";
import close from "../assets/icons/close.svg";
import DoctoeDescCard from "../components/DoctorDescCard";

type Filters = {
  location: string;
  expertise: string;
  gender: string;
  fees: string;
  languages: string;
};
interface Doctor {
  name: string;
  image: string;
  rating: number;
  expertise: string;
  experience: number;
  languages: string[];
  videoConsultationFee: string;
  chatConsultationFee: string;
}
const doctorDataArr: Doctor[] = [
  {
    name: "Dr. Prerna Narang",
    image:
      "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.5,
    expertise: "Male-Female Infertility",
    experience: 7,
    languages: ["English", "Hindi", "Marathi"],
    videoConsultationFee: "800",
    chatConsultationFee: "Free",
  },

  {
    name: "Dr. Rajesh Kumar",
    image:
      "https://images.pexels.com/photos/3859129/pexels-photo-3859129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    expertise: "Cardiologist",
    experience: 10,
    languages: ["English", "Hindi"],
    videoConsultationFee: "1200",
    chatConsultationFee: "Free",
  },

  {
    name: "Dr. Aarti Gupta",
    image:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.2,
    expertise: "Pediatrician",
    experience: 5,
    languages: ["English", "Telugu", "Tamil"],
    videoConsultationFee: "1000",
    chatConsultationFee: "500",
  },
];
const FindDoctor: React.FC = () => {
  // Initialize filters state as an object with keys for each filter type
  const [filters, setFilters] = useState<Filters>({
    location: "",
    expertise: "",
    gender: "",
    fees: "",
    languages: "",
  });
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter data
  const locations: string[] = ["Gwalior", "Bhopal", "Indore"];
  const expertiseOptions: string[] = [
    "Joint Pain",
    "Pregnancy",
    "Heart Disease",
    "Dermatology",
  ];
  const genderOptions: string[] = ["Male", "Female", "Other"];
  const feesOptions: string[] = [
    "Rs. 0 - Rs. 1000",
    "Rs. 1000 - Rs. 5000",
    "Rs. 5000+",
  ];
  const languagesOptions: string[] = ["Hindi", "English", "Spanish"];

  // Add or update a filter value in the filters state
  const handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement>,
    filterType: keyof Filters
  ) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  // Remove a filter by setting the value to an empty string
  const removeFilter = (filterType: keyof Filters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: "",
    }));
  };

  // Filter doctors by the search term (name or expertise)
  const filteredDoctors = doctorDataArr.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.expertise.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Navbar />
      <div className="py-16 bg-[#EAF2EA]">
        <div>
          <h1 className="text-3xl text-center">
            Find expert Doctors for an In-clinic session here
          </h1>
          <div className="flex justify-center gap-2 mt-4">
            {/* Location Filter */}
            <div className="flex items-center bg-white w-40 px-2 py-2 border border-[#D4D4D4] rounded-lg">
              <span>
                <img src={location_icon} alt="Location Icon" />
              </span>
              <select
                value={filters.location}
                onChange={(e) => handleSelectChange(e, "location")}
                className="outline-none w-full font-light text-sm"
              >
                <option value="">Select location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Search by doctor, specialization, clinic */}
            <div className="bg-white max-w-sm w-full border border-[#D4D4D4] rounded-lg overflow-hidden">
              <input
                className="w-full px-2 py-3 outline-none text-sm font-light"
                type="text"
                placeholder="e.g., Doctor, specialisation, clinic name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div>
        <div className="my-4 flex justify-between max-w-4xl mx-auto text-gray-900/70 ">
          {/* Expertise Filter */}
          <div className="px-2 bg-gray-100 w-fit rounded-md overflow-hidden">
            <select
              value={filters.expertise}
              onChange={(e) => handleSelectChange(e, "expertise")}
              className="py-2 bg-inherit outline-none"
            >
              <option value="">Expertise</option>
              {expertiseOptions.map((exp) => (
                <option key={exp} value={exp}>
                  {exp}
                </option>
              ))}
            </select>
          </div>

          {/* Gender Filter */}
          <div className="px-2 bg-gray-100 w-fit rounded-md overflow-hidden">
            <select
              value={filters.gender}
              onChange={(e) => handleSelectChange(e, "gender")}
              className="py-2 bg-inherit outline-none"
            >
              <option value="">Gender</option>
              {genderOptions.map((gen) => (
                <option key={gen} value={gen}>
                  {gen}
                </option>
              ))}
            </select>
          </div>

          {/* Fees Filter */}
          <div className="px-2 bg-gray-100 w-fit rounded-md overflow-hidden">
            <select
              value={filters.fees}
              onChange={(e) => handleSelectChange(e, "fees")}
              className="py-2 bg-inherit outline-none"
            >
              <option value="">Fees</option>
              {feesOptions.map((fee) => (
                <option key={fee} value={fee}>
                  {fee}
                </option>
              ))}
            </select>
          </div>

          {/* Languages Filter */}
          <div className="px-2 bg-gray-100 w-fit rounded-md overflow-hidden">
            <select
              value={filters.languages}
              onChange={(e) => handleSelectChange(e, "languages")}
              className="py-2 bg-inherit outline-none"
            >
              <option value="">Languages</option>
              {languagesOptions.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr className="text-[#EDEDED]" />
      </div>

      {/* Applied Filters Chips */}
      <div className="max-w-6xl mx-auto mt-10 flex justify-end gap-4">
        {Object.entries(filters).map(
          ([filterType, value]) =>
            value && (
              <div
                key={filterType}
                className="flex items-center gap-1 px-4 py-2 rounded-full bg-[#EAF2EA] font-light text-sm w-fit"
              >
                <span>{value}</span>
                <button
                  onClick={() => removeFilter(filterType as keyof Filters)}
                >
                  <img src={close} alt="Remove Filter" />
                </button>
              </div>
            )
        )}
      </div>

      {/* Doctors List */}
      <div className="max-w-6xl w-fit mx-auto my-10 flex flex-wrap gap-10">
        {filteredDoctors.map((data, index) => (
          <DoctoeDescCard key={data.name + index} doctor={data} />
        ))}
      </div>
    </>
  );
};

export default FindDoctor;
