import { cities } from "../assets/assets";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroimage.png")] bg-no-repeat bg-cover bg-center h-screen'>
      <p className="bg-[#00ff6e]/50 px-3.5 py-1 rounded-full mt-20">
        QHOTEL Веб сайтанд тавтай морилно уу!
      </p>
      <h1 className="font-roboto text-2xl md:text-5xl md:text-[60px] md:leading-[60px] font-bold md:font-extrabold max-w-xl mt-6">
        Өөрийнхөө зочид буудлыг хайж олоорой
      </h1>
      <p className="max-w-150 mt-4 text-sm md:text-base">
        Энд бүхэл шинэ зочид буудлуудын мэдээлэл, үнэлгээ, зочид буудлын
        зургийг олох боломжтой.Бид танд хамгийн сайн зочид буудлыг олоход туслах болно.
      </p>


      <form className="bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col mt-15 md:flex-row max-md:items-start gap-4 max-md:mx-auto">
        <div>
          <div className="flex items-center gap-2">
            <img src={assets.locationIcon} alt="locationIcon" className="h-4" />
            <label htmlFor="destinationInput">Буудлах газар</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Энд байрлах хот, улс"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4" />
            <label htmlFor="checkIn">Очих өдрөө</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4" />
            <label htmlFor="checkOut">Гарах өдрөө</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Зочид</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
            placeholder="0"
          />
        </div>

        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <img src={assets.searchIcon} alt="searchIcon" className="h-7" />
          <span>Хайх</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
