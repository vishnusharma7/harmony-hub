import Header from "../components/header";
import Footer from "../components/footer";
import Team from "../components/team";

const Homepage2 = () => {
  return (
    <div className="w-full  relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start  pb-11 pr-[26px] pl-[22px] box-border gap-[145px_0px] tracking-[normal] mq450:gap-[36px_0px] mq725:gap-[72px_0px]">
     <Header />
      <main className="w-[1563px] pt-[100px] flex flex-col items-center justify-center gap-[45px_0px] max-w-full mq750:gap-[22px_0px]">
        <section className="w-[1185px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-29xl text-white font-hachi-maru-pop">
          <h1 className="m-0 h-[129px] w-[801px] relative text-inherit tracking-[-0.02em] leading-[120%] font-normal font-inherit inline-block shrink-0 max-w-full mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            <span>{`"Welcome to Your `}</span>
            <span className="text-gold-100">Musical Heaven</span>
            <span>{`: Where Learning meets `}</span>
            <span className="text-gold-100">Harmony!</span>
            <span>"</span>
          </h1>
        </section>
        <section className="h-[482px] flex flex-row items-start justify-start pt-0 px-0 pb-[35px] box-border max-w-full text-left text-[128px] text-gray-400 font-hachi-maru-pop">
          <div className="self-stretch rounded-6xl bg-silver box-border flex flex-row items-start justify-end py-[86px] pr-[463px] pl-[499px] max-w-full border-[1px] border-solid border-gray-100 lg:pl-[249px] lg:pr-[231px] lg:box-border mq750:pl-[124px] mq750:pr-[115px] mq750:box-border mq450:py-14 mq450:px-5 mq450:box-border">
            <div className="h-[447px] w-[1185px] relative rounded-6xl bg-silver box-border hidden max-w-full border-[1px] border-solid border-gray-100" />
            <h1 className="m-0 h-[231px] relative text-inherit leading-[130%] font-normal font-inherit flex items-end z-[1] mq1050:text-[51px] mq1050:leading-[100px] mq450:text-13xl mq450:leading-[67px]">
              Ads
            </h1>
          </div>
        </section>
        <section className="w-[1628px] flex flex-row items-start justify-start pt-0 px-20 pb-[15px] box-border max-w-full text-center text-[20px] text-white font-hachi-maru-pop lg:pl-10 lg:pr-10 lg:box-border">
      <div className=" flex flex-row items-end justify-start gap-[0px_11px] max-w-full mq1050:flex-wrap">
        <div className=" flex flex-col items-center justify-start gap-[50px_0px] max-w-full mq750:gap-[25px_0px] mq750:min-w-full">
          <div className="flex flex-row items-center justify-start gap-[0px_11px] max-w-full mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <img
                className="w-[63px] h-[63px] relative object-cover"
                loading="lazy"
                alt=""
                src="/pngtreeshiny-gold-star-clipart-illustration-8633179-3@2x.png"
              />
            </div>
            <img
              className="h-[79px] w-[84px] relative object-cover min-h-[79px]"
              loading="lazy"
              alt=""
              src="/pngtreeshiny-gold-star-clipart-illustration-8633179-1@2x.png"
            />
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[120%] font-normal font-inherit [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              <span>{`Our `}</span>
              <span className="text-gold-100">Experts</span>
            </h1>
            <img
              className="h-[79px] w-[84px] relative object-cover min-h-[79px]"
              loading="lazy"
              alt=""
              src="/pngtreeshiny-gold-star-clipart-illustration-8633179-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className=" flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap mq750:justify-center">
              <Team />
            </div>
          </div>
        </div>
      
      </div>
    </section>
        <Footer />
      </main>
    </div>
  );
};

export default Homepage2;
