import React from "react";
import Group from "./Group";

const Main = () => {
  return (
    <main>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-10">
        <section>
          <img
            src="../../../../images/About.png"
            alt="Congregant praising God"
          />
        </section>
        <section className="pt-10 px-4">
          <p className="text-title-xs md:text-title-md">About Us</p>
          <h3 className="text-title-sm md:text-title-lg">
            PCG Liberty Congregation
          </h3>
          <p className="text-xl pt-4 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            recusandae dolor a sequi minus similique, perspiciatis non laborum
            itaque provident. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum rerum culpa eaque temporibus nobis
            tempore id vel quae quia tenetur quasi soluta doloribus sint eius
            quod reiciendis officia, itaque aliquid.
          </p>
        </section>
      </div>
      <section>
        <p className="text-title-sm md:text-title-lg">
          # We Give Donations Poor People Impact on Someone’s Life.
        </p>
      </section>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-4 gap-4 bg-brand-500 rounded-4xl h-full py-6">
        <div className="flex items-center gap-4">
          <div className="bg-amber-300 h-32 w-32 rounded-full"></div>
          <div className="flex flex-col">
            <p>23K</p>
            <p>Educated</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-amber-300 h-32 w-32 rounded-full"></div>
          <div className="flex flex-col">
            <p>23K</p>
            <p>Educated</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-amber-300 h-32 w-32 rounded-full"></div>
          <div className="flex flex-col">
            <p>23K</p>
            <p>Educated</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-amber-300 h-32 w-32 rounded-full"></div>
          <div className="flex flex-col">
            <p>23K</p>
            <p>Educated</p>
          </div>
        </div>
      </div>
      <Group />
    </main>
  );
};

export default Main;
