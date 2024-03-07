import Header from "../components/header";
import Footer from "../components/footer";
import FAQ from "../components/faq";
import Team from "../components/team";
import Row from "../components/row";

const Homepage = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start  pb-11 pr-[26px] pl-[22px] box-border gap-[145px_0px] tracking-[normal] mq450:gap-[36px_0px] mq725:gap-[72px_0px]">
      <Header />
      <div className="w-[1341px] pt-[100px] flex flex-row items-start justify-start py-0 px-[35px] box-border max-w-full text-center text-29xl text-white font-hachi-maru-pop">
        <div className="flex-1 flex flex-row items-center justify-start [row-gap:20px] max-w-full lg:flex-wrap">
          <div className="h-[546px] w-[504px] relative min-w-[504px] max-w-full lg:flex-1 mq750:min-w-full">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute top-[38.4px] left-[0px] w-[302.6px] h-[507.6px] object-cover"
                alt=""
                src="/imagefromrawpixelid12214003png-1@2x.png"
              />
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[190.7px] max-h-full w-[313.3px] object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/imagefromrawpixelid12190152png-1@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[34px] box-border min-w-[521px] max-w-full ml-[-34px] mq750:min-w-full mq1050:ml-0">
            <div className="self-stretch flex flex-col items-end justify-start gap-[33px_0px] max-w-full mq450:gap-[16px_0px]">
              <h1 className="m-0 w-[801px] h-[129px] relative text-inherit tracking-[-0.02em] leading-[120%] font-normal font-inherit inline-block shrink-0 mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                <span>{`“ Unlock your `}</span>
                <span className="text-gold-100">musical potential</span>
                <span> with HarmonyHub”</span>
              </h1>
              <div className="w-[725px] h-[62px] relative rounded-9xl bg-lavenderblush max-w-full text-13xl text-black font-newsreader">
                <div className="absolute top-[0px] left-[0px] rounded-9xl bg-lavenderblush w-full h-full hidden" />
                <h2 className="m-0 absolute top-[14px] left-[1px] text-inherit tracking-[-0.02em] leading-[120%] inline-block italic font-extralight font-inherit w-[348.5px] h-[33px] mix-blend-color-burn z-[1] mq1050:text-7xl mq1050:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                  Try “Guitar”
                </h2>
                <div className="absolute top-[11px] left-[442px] w-[251px] flex flex-row items-start justify-start gap-[0px_27px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <h2 className="m-0 self-stretch h-[23px] relative text-inherit tracking-[-0.02em] leading-[120%] inline-block italic font-extralight font-inherit shrink-0 z-[1] mq1050:text-7xl mq1050:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                      Ex “Jayanagar”
                    </h2>
                  </div>
                  <div className="h-[39.6px] w-[27.9px] relative z-[1] flex items-center justify-center">
                    <img
                      className="h-full w-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.405)]"
                      loading="lazy"
                      alt=""
                      src="/-icon-search.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[63.71%] w-[4.69%] top-[17.74%] right-[93.1%] bottom-[18.55%] left-[2.21%] max-w-full overflow-hidden max-h-full [mix-blend-mode:linear-burn] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/-emoji-musical-note.svg"
                />
                <div className="absolute top-[2px] left-[334px] flex flex-row items-start justify-start gap-[0px_5px]">
                  <div className="flex flex-row items-start justify-start z-[1]">
                    <img
                      className="h-[54.9px] w-[5px] relative rounded-21xl"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5px] pb-0 pr-px pl-0">
                    <img
                      className="w-[29.8px] h-[39.5px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/-icon-location.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="w-[1611px] flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full">
        <section className="flex-1 flex flex-col items-end justify-start gap-[143px_0px] max-w-full lg:gap-[71px_0px] mq750:gap-[36px_0px] mq450:gap-[18px_0px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-0 box-border max-w-full text-center text-13xl text-white font-hachi-maru-pop">
            <div className="flex-1 flex flex-col items-start justify-start gap-[50px_0px] max-w-full mq750:gap-[25px_0px]">
              <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-4 pr-5 pl-[104px] box-border max-w-full mq1050:pl-[52px] mq1050:box-border mq450:pl-[26px] mq450:box-border">
                <h2 className="m-0 h-[85px] w-[797px] relative text-inherit tracking-[-0.03em] leading-[100%] font-normal font-inherit flex items-center shrink-0 max-w-full mq1050:text-7xl mq1050:leading-[26px] mq450:text-lgi mq450:leading-[19px]">
                  <span className="w-full">
                    <span>{`Explore a Diverse Network of `}</span>
                    <span className="text-gold-100">Skilled Teachers</span>
                    <span>{` and `}</span>
                    <span className="text-gold-100">Reputable Academies</span>
                  </span>
                </h2>
              </div>
              <Team />
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[45px] pr-0 pl-[37px] box-border max-w-full mq750:pb-[29px] mq750:box-border">
                <div className="flex-1 flex flex-col items-center justify-start gap-[61px_0px] max-w-full lg:gap-[30px_0px] mq750:gap-[15px_0px]">
                  <div className="flex flex-row items-start justify-start py-0 pr-2 pl-0 box-border max-w-full">
                    <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[120%] font-normal font-inherit mq1050:text-7xl mq1050:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                      <p className="m-0">
                        <span>{`Our students are `}</span>
                        <span className="text-gold-100">our strength</span>
                        <span>{` `}</span>
                      </p>
                      <p className="m-0">
                        <span>{`See what they `}</span>
                        <span className="text-gold-100">say about us</span>
                        <span className="text-white">{` `}</span>
                      </p>
                    </h2>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center gap-[0px_36px] max-w-full lg:flex-wrap mq750:gap-[0px_18px]">
                    <img
                      className="h-[305px] w-[344px] relative object-contain max-w-full lg:flex-1"
                      loading="lazy"
                      alt=""
                      src="/imagefromrawpixelid12183044png-1@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border min-w-[523px] max-w-full mq750:min-w-full">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[43px_0px] max-w-full mq450:gap-[21px_0px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_23px] max-w-full mq1050:flex-wrap">
                        <Row />
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[92px] box-border max-w-full mq750:pl-[46px] mq750:box-border mq450:pl-5 mq450:box-border">
                <h2 className="m-0 h-[78px] w-[513px] relative text-inherit tracking-[-0.02em] leading-[120%] font-normal font-inherit inline-block shrink-0 max-w-full mq1050:text-7xl mq1050:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
                  <span>{`Frequently Asked `}</span>
                  <span className="text-gold-100">Questions</span>
                  <span> (FAQ)</span>
                </h2>
              </div>
              <FAQ />

              {/* <div className="w-[605px] flex flex-col items-center justify-center relative max-w-full text-left text-9xl">
          <h3 className="m-0 self-stretch h-[156px] relative text-inherit tracking-[-0.02em] leading-[120%] font-normal font-inherit inline-block mq450:text-3xl mq450:leading-[27px]">
            <ol className="m-0 font-inherit text-inherit pl-[37px]">
              <li className="mb-2.5">
                Will i Receive Certificate from Academy?
              </li>
              <li className="mb-2.5">
                What will be the duration of every course ?
              </li>
              <li className="mb-2.5">Whether HarmonyHub is in Tamilnadu?</li>
            </ol>
          </h3>
          <div className="w-px h-[7px] absolute !m-[0] top-[25px] left-[37px] box-border z-[1] border-r-[1px] border-solid border-white" />
        </div> */}
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Homepage;
