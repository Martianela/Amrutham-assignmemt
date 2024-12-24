import Avtar from "../assets/image/ReviewAvtarImg.png";
function FeaturedReview() {
  return (
    <div className="border border-[#DCDCDC] rounded-lg">
      <div className="bg-[#F4F7EC] px-8 py-5  items-center flex justify-between">
        <h4 className="text-lg text-[#313131]">My Work Experience</h4>
      </div>
      <div className="px-8 py-4 mb-5 flex flex-col gap-5">
        <div className="bg-[#FAFAFA] py-6 px-10 rounded-lg">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img src={Avtar} alt="img " className="rounded-full w-16 h-16" />
              <div>
                <h3 className="text-lg">Alicent Hightower</h3>
                <p className="font-light text-[#939393] ">
                  Consulted for Skin care
                </p>
              </div>
            </div>
            <p className="text-[#979797] font-light">20 January 2023</p>
          </div>
          <div className="mt-3">
            <p className="flex text-yellow-500">
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
            </p>
            <p className="font-light text-[#2E2F2E] mt-1">
              Might be bit early to confirm but yes I can see noticeable
              difference in my hairfall. will write again after using it for
              longer periods
            </p>
          </div>
        </div>
        <div className="bg-[#FAFAFA] py-6 px-10 rounded-lg">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img src={Avtar} alt="img " className="rounded-full w-16 h-16" />
              <div>
                <h3 className="text-lg">Alicent Hightower</h3>
                <p className="font-light text-[#939393] ">
                  Consulted for Skin care
                </p>
              </div>
            </div>
            <p className="text-[#979797] font-light">20 January 2023</p>
          </div>
          <div className="mt-3">
            <p className="flex text-yellow-500">
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
            </p>
            <p className="font-light text-[#2E2F2E] mt-1">
              Might be bit early to confirm but yes I can see noticeable
              difference in my hairfall. will write again after using it for
              longer periods
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedReview;
