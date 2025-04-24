import HeroImage from "../../../assets/images/HeroImg.png";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4  h-100vh">
      <section className="pt-8 md:pt-32">
        <div>
          <p className="border-0 border-red-400 pl-2 border-l-4">
            PCG Liberty Congregation
          </p>
          <h2 className="text-brand-600 text-title-md md:text-title-xl font-bold capitalize">
            That they all
          </h2>
          <h3 className="text-title-sm text-red-500 md:text-title-xl font-light capitalize py-2 md:py-4">
            May be <span className="bg-red-500 text-white px-2">one</span>
          </h3>
        </div>

        <p className="heading-text">
          The Presbyterian Church of Ghana (PCG), is Ghana’s oldest continuing
          existing church. It is the product of a quadruple heritage: The Basel
          Mission, African Christians from the Caribbean, the Scottish Mission,
          and indigenous African Christians.The PCG traces its history to the
          arrival at Osu (Christiansborg) of the Basel Mission on 18th December
          1828
        </p>
      </section>
      <section className="pt-8 md:pt-32">
        <img
          src={HeroImage}
          alt="Congregants praying"
          className="max-w-[100%]"
        />
      </section>
    </div>
  );
};

export default Hero;
