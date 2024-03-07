import Footer from "../components/footer";
import Header from "../components/header";

const Homepage1 = () => {
  return (
   
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start  pb-11 pr-[26px] pl-[22px] box-border gap-[145px_0px] tracking-[normal] mq450:gap-[36px_0px] mq725:gap-[72px_0px]">
    <Header />
    <section className="self-stretch pt-[100px] flex flex-row items-start justify-start pb-[155px] pr-[19px] pl-6 box-border max-w-full text-center text-29xl text-white font-hachi-maru-pop mq450:pb-[66px] mq450:box-border mq975:pb-[101px] mq975:box-border">
      <div className="flex-1 flex flex-col items-center justify-start gap-[108px_0px] max-w-full mq450:gap-[27px_0px] mq725:gap-[54px_0px]">
        <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-0 box-border max-w-full">
          <h1 className="m-0 h-[129px] w-[801px] relative text-inherit tracking-[-0.02em] leading-[120%] font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-10xl mq450:leading-[35px] mq975:text-19xl mq975:leading-[46px]">
            <span>{`“Let the Music Move You: Find Your Next `}</span>
            <span className="text-gold-100">Musical Adventure with Us</span>
            <span>“</span>
          </h1>
        </div>
        <div className="self-stretch h-[422px] relative">
          <img
            className="absolute top-[69px] left-[629px] w-[671px] h-[334px] object-cover"
            loading="lazy"
            alt=""
            src="/image-13@2x.png"
          />
          <img
            className="absolute top-[68px] left-[0px] w-[485px] h-[335px] object-cover"
            alt=""
            src="/image-14@2x.png"
          />
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[302px] max-h-full w-[697px] object-cover z-[1]"
            alt=""
            src="/image-12@2x.png"
          />
        </div>
      </div>
    </section>
      <section className="w-[1203px] flex flex-row items-start justify-start pt-0 pb-[243px] pr-0 pl-[18px] box-border max-w-full text-left text-13xl text-white font-hachi-maru-pop mq1025:pb-[158px] mq1025:box-border mq725:pb-[103px] mq725:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[30px_0px] max-w-full">
          <h2 className="m-0 w-[841px] h-[38px] relative text-inherit leading-[130%] font-normal font-inherit flex items-end shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px] mq975:text-7xl mq975:leading-[33px]">
            Upcoming Events :
          </h2>
          <div className="self-stretch h-[709px] relative rounded-6xl bg-silver box-border border-[1px] border-solid border-gray-100" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage1;
