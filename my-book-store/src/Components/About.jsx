import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full my-20 gap-5">
        <div className="w-[80%] lg:w-[40%]">
          <div className="flex flex-col justify-center items-center mb-5">
            <div
              className="bg-cover bg-no-repeat w-full"
              style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3khFv3XMCT2T6TOBYHrO1BedaN2CEy-MEg&usqp=CAU')`,
              }}
            >
              <h1 className="py-3 font-black text-4xl md:text-7xl bg-white mix-blend-lighten uppercase text-center">
                ABOUT US
              </h1>
            </div>
          </div>
          <div className="text-gray-500 text-base">
          Welcome to E BOOK SHOP , your digital doorway to the world of literature! Since 2023, we've been dedicated to bringing the joy of reading to your fingertips. Our carefully curated collection spans diverse genres, catering to every reader's taste. With a seamless online experience, we're committed to delivering your favorite reads right to your doorstep, making literary exploration effortless and enjoyable.
          </div>
        </div>
        <div className="w-[80%] lg:w-[45%] h-[300px]">
          <img
            className="w-full h-full overflow-hidden rounded-full"
            src="https://live-production.wcms.abc-cdn.net.au/73419a11ea13b52c6bd9c0a69c10964e?impolicy=wcms_crop_resize&cropH=1080&cropW=1918&xPos=1&yPos=0&width=862&height=485"
          />
        </div>
      </div>
    </>
  );
};

export default About;
