import { useState } from "react";
import social_icons from "../assets/image/social-icons.png";
type AboutMeCardProps = {
  title: string;
  description: string;
  languages: string[];
};
const AboutMeCard: React.FC<AboutMeCardProps> = ({
  title,
  description,
  languages,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const getShortDescription = (text: string, charLimit: number) => {
    return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
  };

  const charLimit = 150; // Limit description to 100 characters
  return (
    <div className="border border-[#DCDCDC] rounded-lg">
      <div className="bg-[#F4F7EC] px-8 py-5  items-center flex justify-between">
        <h4 className="text-lg text-[#313131]">{title}</h4>
        <button className="border border-[#3A643B] px-4 py-1 rounded-lg text-sm text-[#585858]">
          Folllow +
        </button>
      </div>
      <div className="px-8 py-4">
        <p className="text-sm text-[#33354880]">
          {" "}
          {isExpanded
            ? description
            : getShortDescription(description, charLimit)}
        </p>
        <div className="text-sm flex items-center gap-1">
          <hr className="flex-1 " />
          {description.length > charLimit && (
            <button
              onClick={toggleDescription}
              className="text-sm text-blue-500 underline mt-2"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
        <div className="mt-3 flex items-center">
          <p>Language Spoken : </p>
          <div className="flex ml-3 gap-3">
            {languages.map((lang) => (
              <span className="rounded-xl px-4 py-1 bg-[#2E37A40A]">
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-10 mb-5">
          <img src={social_icons} alt="" />
        </div>
      </div>
    </div>
  );
};
export default AboutMeCard;
