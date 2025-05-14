import AboutImage from "../../../assets/images/PCGAbout.png";
import Group from "./Group";

const Main = () => {
  return (
    <main className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:mt-10">
        <section className="px-4">
          <img
            src={AboutImage}
            alt="Congregant praising God"
            className="rounded-xl border-0 border-l-8 border-red-500"
          />
        </section>
        <section className=" px-4">
          <p className="bg-red-500 text-white w-fit p-2 rounded-l-xl mb-2">
            About Us
          </p>
          <h3 className="subHeading">PCG Liberty Congregation</h3>
          <p className="paragraph-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            recusandae dolor a sequi minus similique, perspiciatis non laborum
            itaque provident. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum rerum culpa eaque temporibus nobis
            tempore id vel quae quia tenetur quasi soluta doloribus sint eius
            quod reiciendis officia, itaque aliquid.
          </p>
          <p className="paragraph-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            recusandae dolor a sequi minus similique, perspiciatis non laborum
            itaque provident. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum rerum culpa eaque temporibus nobis
            tempore id vel quae quia tenetur quasi soluta doloribus sint eius
            quod reiciendis officia, itaque aliquid.
          </p>
        </section>
      </div>
      <section className="flex justify-center my-8">
        <p className="text-title-sm text-center md:text-title-xs font-extralight capitalize">
          Bringing hope to our Generational.
        </p>
      </section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4 bg-brand-500 rounded-2xl p-6 mx-6">
        <div className="flex items-center gap-8 md:gap-4">
          <div className="bg-amber-300 h-24 w-24 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-title-sm text-white">142</p>
            <p className="text-white text-theme-lg">Baptized</p>
          </div>
        </div>
        <div className="flex items-center gap-8 md:gap-4">
          <div className="bg-amber-300 h-24 w-24 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-title-sm text-white">54</p>
            <p className="text-white text-theme-lg">Confirmed</p>
          </div>
        </div>
        <div className="flex items-center gap-8 md:gap-4">
          <div className="bg-amber-300 h-24 w-24 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-title-sm text-white">23</p>
            <p className="text-white text-theme-lg">students supported </p>
          </div>
        </div>
        <div className="flex items-center gap-8 md:gap-4">
          <div className="bg-amber-300 h-24 w-24 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-title-sm text-white">23</p>
            <p className="text-white text-theme-lg">Welfare beneficiaries </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
