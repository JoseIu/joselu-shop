import { titleFont } from '@/config/fonts';

const Home = () => {
  return (
    <section className="bg-neutral-gray px-4 pt-8">
      <div className="wrapper md:grid grid-cols-2 items-center">
        <div className="flex flex-col gap-4">
          <h2 className={`${titleFont.className} home-title font-black flex flex-col leading-[1.2]`}>
            <span>
              FIND <span className="clothes">CLOTHES</span>
            </span>
            <span>THAT MATCHES </span>
            <span>
              YOUR <span className="style">STYLE</span>
            </span>
          </h2>
          <p>
            Brow through our divere range of meticulously crafted garments, designed to bring out your
            individuality and carte to your sense of style.
          </p>
          <button className="w-60 px-6 py-2 bg-pure-black text-light-gray rounded-full">Shop Now</button>
        </div>
        <img src="/home-image.png" alt="" className="max-w-[40rem]" />
      </div>
    </section>
  );
};

export default Home;
