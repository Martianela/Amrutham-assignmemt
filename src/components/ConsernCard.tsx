import React, { useState } from "react";

const ConsernCard: React.FC = () => {
  // Hardcoded concerns
  const concerns = [
    "Pregnancy",
    "Periods",
    "Mental Health",
    "Fitness",
    "Nutrition",
    "Skin Care",
    "Stress",
  ];

  // State to manage whether to show all concerns or only a limited number
  const [showAll, setShowAll] = useState(false);

  // Function to toggle between limited and full view
  const toggleView = () => {
    setShowAll((prevState) => !prevState);
  };

  // Determine the list of concerns to display based on state
  const displayedConcerns = showAll ? concerns : concerns.slice(0, 5);

  return (
    <div className="border border-[#DCDCDC] rounded-lg max-w-2xl">
      <div className="bg-[#F4F7EC] px-8 py-5 flex items-center justify-between">
        <h4 className="text-lg text-[#313131] capitalize">
          The Concerns I Treat
        </h4>
      </div>
      <div className="px-8 py-4">
        <div className="flex gap-4 flex-wrap text-[#3A643B] transition-all">
          {displayedConcerns.map((concern, index) => (
            <span
              key={index}
              className="rounded-3xl p-2 px-4 capitalize bg-[#2E37A40A]"
            >
              {concern}
            </span>
          ))}
          {concerns.length > 5 && (
            <button
              onClick={toggleView}
              className="rounded-3xl p-2 px-4 capitalize border border-[#E0DFDF]"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsernCard;
