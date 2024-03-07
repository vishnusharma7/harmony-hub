import PasswordInputs from "../components/password-inputs";

const UserRegistrationForm = () => {
  return (
    <div className="flex flex-row h-[100%] items-start justify-center pt-0 px-0 pb-[121px] tracking-[normal] text-left text-5xl text-pink font-hachi-maru-pop">
      <main className="w-[943px] rounded-46xl bg-gray-200 overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[66px] pb-[99px] pr-0 pl-[76px] box-border gap-[55px_0px] max-w-full text-left text-17xl text-gold-100 font-hachi-maru-pop mq675:gap-[27px_0px] mq675:pt-5 mq675:pb-[27px] mq675:box-border">
        <div className="w-[943px] h-28 relative overflow-hidden shrink-0 hidden max-w-full" />
        <div className="w-[545px] flex flex-row items-start justify-start pt-0 pb-4 pr-0 pl-[35px] box-border max-w-full">
          <h3 className="m-0 h-[57px] flex-1 relative text-inherit leading-[130%] font-normal font-inherit flex items-end [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] max-w-full z-[1] mq450:text-3xl mq450:leading-[28px] mq750:text-10xl mq750:leading-[37px]">
            <span>
              <span>{`Register `}</span>
              <span className="text-white">@ HarmonyHub</span>
            </span>
          </h3>
        </div>
        <div className="w-[130px] h-[47px] relative rounded-6xl bg-gray-200 box-border hidden border-[1px] border-solid border-gray-100" />
        <section className="ml-[147px] mr-[-63px] w-[922px] flex flex-col items-start justify-start py-0 pr-px pl-0 box-border max-w-[106%] shrink-0 text-left text-13xl text-white font-hachi-maru-pop">
          <div className="w-[598px] flex flex-col items-start justify-start pt-0 px-0 pb-[35px] box-border max-w-full">
            <div className="w-[559px] h-[38px] relative leading-[130%] flex items-end shrink-0 max-w-full box-border pr-5 mq450:text-lgi mq450:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
              <span className="w-full">
                <ol className="m-0 font-inherit text-inherit pl-[43px]">
                  <li>
                    <span>{`Enter your Name `}</span>
                    <span className="text-red">*</span>
                  </li>
                </ol>
              </span>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-2 pr-[13px] pl-[51px] box-border max-w-full mt-[-11px] text-5xl text-pink mq675:pl-[25px] mq675:box-border">
              <div className="flex-1 flex flex-row items-center justify-center max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                  <div className="h-[47px] w-[598px] absolute !m-[0] bottom-[-8px] left-[-51px] rounded-6xl bg-gray-200 box-border border-[1px] border-solid border-gray-100" />
                  <div className="h-[69px] flex-1 relative leading-[130%] flex items-end max-w-full z-[1] mq450:text-lgi mq450:leading-[25px]">{`ex : Darshan Shaji `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[34px] box-border max-w-full">
            <div className="w-[559px] h-[38px] relative leading-[130%] flex items-end shrink-0 max-w-full box-border pr-5 mq450:text-lgi mq450:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
              <span className="w-full">
                <ol className="m-0 font-inherit text-inherit pl-[43px]">
                  <li>
                    <span>{`Click Your Gender `}</span>
                    <span className="text-red">*</span>
                  </li>
                </ol>
              </span>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full mt-[-2px] text-5xl text-pink">
              <div className="w-[820px] flex flex-row items-start justify-start max-w-full">
                <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[0px_21px] max-w-full">
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3">
                    <div className="w-[30px] h-6 relative rounded-[50%] bg-gainsboro" />
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-end pt-0 pb-1 pr-0 pl-[35px] box-border min-w-[370px] max-w-full mq675:min-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                      <div className="h-[47px] w-[130px] absolute !m-[0] bottom-[-4px] left-[-35px] rounded-6xl bg-gray-200 box-border z-[1] border-[1px] border-solid border-gray-100" />
                      <div className="h-[69px] flex-1 relative leading-[130%] flex items-end max-w-full z-[2] mq450:text-lgi mq450:leading-[25px]">
                        Male
                      </div>
                      <div className="h-[47px] w-[130px] absolute !m-[0] bottom-[-6px] left-[193px] rounded-6xl bg-gray-200 box-border z-[3] border-[1px] border-solid border-gray-100" />
                    </div>
                  </div>
                </div>
                <div className="w-[592px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full ml-[-392px]">
                  <div className="self-stretch flex flex-row items-center justify-end relative max-w-full">
                    <div className="h-6 w-[30px] absolute !m-[0] bottom-[12px] left-[0px] rounded-[50%] bg-gainsboro z-[3]" />
                    <div className="w-[534px] flex flex-row items-center justify-center max-w-full">
                      <div className="h-[74px] flex-1 relative max-w-full">
                        <div className="absolute top-[0px] left-[0px] w-[534px] flex flex-row items-start justify-start max-w-full">
                          <div className="h-[69px] flex-1 relative leading-[130%] flex items-end max-w-full z-[4] mq450:text-lgi mq450:leading-[25px]">
                            Female
                          </div>
                          <div className="h-full w-full absolute !m-[0] right-[-236px] bottom-[-1px] leading-[130%] flex items-end z-[6] mq450:text-lgi mq450:leading-[25px]">
                            Others
                          </div>
                        </div>
                        <div className="absolute top-[27px] left-[211px] rounded-6xl bg-gray-200 box-border w-[130px] h-[47px] z-[5] border-[1px] border-solid border-gray-100" />
                        <div className="absolute top-[39px] left-[163px] rounded-[50%] bg-gainsboro w-[30px] h-6 z-[5]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[614px] flex flex-col items-start justify-start pt-0 px-0 pb-[37px] box-border max-w-full">
            <div className="w-[559px] h-[38px] relative leading-[130%] flex items-end shrink-0 max-w-full box-border pr-5 mq450:text-lgi mq450:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
              <span className="w-full">
                <ol className="m-0 font-inherit text-inherit pl-[43px]">
                  <li>
                    <span>{`Enter your Date of Birth `}</span>
                    <span className="text-red">*</span>
                  </li>
                </ol>
              </span>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-2 box-border max-w-full mt-[-11px] text-5xl text-pink">
              <div className="w-[534px] flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[69px] flex-1 relative leading-[130%] flex items-end max-w-full z-[8] mq450:text-lgi mq450:leading-[25px]">{`dd-mm-yyyy `}</div>
                <div className="h-[47px] w-[598px] absolute !m-[0] bottom-[-8px] left-[-80px]">
                  <div className="absolute top-[0px] left-[0px] rounded-6xl bg-gray-200 box-border w-full h-full z-[7] border-[1px] border-solid border-gray-100" />
                  <img
                    className="absolute top-[5px] left-[536px] w-[35px] h-9 z-[9]"
                    alt=""
                    src="/-icon-calendar.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[777px] h-[38px] relative leading-[130%] flex items-end shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
            <span className="w-full">
              <ol className="m-0 font-inherit text-inherit pl-[43px]">
                <li>
                  <span>{`Select your State, City and Area of residence? `}</span>
                  <span className="text-red">*</span>
                </li>
              </ol>
            </span>
          </div>
          <div className="w-[600px] flex flex-col items-end justify-start max-w-full text-5xl text-pink">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-end pt-0 pb-2 pr-[13px] pl-[51px] box-border relative max-w-full mq675:pl-[25px] mq675:box-border">
                  <div className="h-[69px] flex-1 relative leading-[130%] flex items-end max-w-full z-[3] mq450:text-lgi mq450:leading-[25px]">
                    Karnataka
                  </div>
                  <div className="h-[47px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
                    <div className="absolute top-[0px] left-[0px] rounded-6xl bg-gray-200 box-border w-full h-full z-[2] border-[1px] border-solid border-gray-100" />
                    <img
                      className="absolute top-[14px] left-[542px] w-6 h-[17px] z-[4]"
                      alt=""
                      src="/email-input.svg"
                    />
                  </div>
                </div>
              </div>
              <PasswordInputs bangalore="Bangalore" />
            </div>
            <PasswordInputs bangalore="Jayanagar" />
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[27px] px-0 box-border max-w-full text-left text-13xl text-white font-hachi-maru-pop">
          <div className="w-[635px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
            <div className="w-[539px] h-[38px] relative leading-[130%] flex items-end shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
              <span className="w-full">
                <ol className="m-0 font-inherit text-inherit pl-[43px]">
                  <li>
                    <span>{`Enter your Mobile number? `}</span>
                    <span className="text-red">*</span>
                  </li>
                </ol>
              </span>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[17px] box-border max-w-full mt-[-11px] text-5xl text-pink">
              <div className="flex-1 flex flex-row items-start justify-center pt-0 pb-2 pr-[30px] pl-[34px] box-border relative max-w-full">
                <input
                  className="[outline:none] bg-gray-200 h-[47px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-6xl box-border border-[1px] border-solid border-gray-100"
                  type="text"
                />
                <div className="h-[69px] flex-1 relative leading-[130%] flex items-end max-w-full z-[1] mq450:text-lgi mq450:leading-[25px]">
                  ex: 958958 58962
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[25px] pb-3 box-border max-w-full text-left text-13xl text-white font-hachi-maru-pop">
          <div className="h-[584px] w-[681px] relative max-w-full mq675:h-auto mq675:min-h-[584]">
            <h3 className="m-0 absolute top-[0px] left-[281px] text-17xl leading-[130%] font-normal font-inherit text-gold-100 flex items-end w-[400px] h-[57px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:text-3xl mq450:leading-[28px] mq750:text-10xl mq750:leading-[37px]">
              Credentials
            </h3>
            <div className="absolute top-[92px] left-[4px] w-[598px] flex flex-col items-start justify-start max-w-full">
              <div className="w-[539px] h-[38px] relative leading-[130%] flex items-end shrink-0 max-w-full z-[7] mq450:text-lgi mq450:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
                <span className="w-full">
                  <ol className="m-0 font-inherit text-inherit pl-[43px]">
                    <li>
                      <span>{`Enter your valid Email id `}</span>
                      <span className="text-red">*</span>
                    </li>
                  </ol>
                </span>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-2 pr-[13px] pl-[51px] box-border relative max-w-full mt-[-11px] text-5xl text-pink">
                <div className="h-[47px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-6xl bg-gray-200 box-border z-[7] border-[1px] border-solid border-gray-100" />
                <div className="h-[69px] flex-1 relative leading-[130%] flex items-end max-w-full z-[8] mq450:text-lgi mq450:leading-[25px]">
                  ex : xyz@gmail.com
                </div>
              </div>
            </div>
            <div className="absolute top-[528px] left-[106px] flex flex-row items-end justify-center gap-[0px_8px] mq675:flex-wrap">
              <div className="w-[76px] flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border">
                <div className="self-stretch h-[47px] relative rounded-6xl bg-gray-200 box-border z-[7] border-[1px] border-solid border-gray-100" />
              </div>
              <div className="w-[76px] flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border">
                <div className="self-stretch h-[47px] relative rounded-6xl bg-gray-200 box-border z-[7] border-[1px] border-solid border-gray-100" />
              </div>
              <div className="w-[76px] flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border">
                <div className="self-stretch h-[47px] relative rounded-6xl bg-gray-200 box-border z-[7] border-[1px] border-solid border-gray-100" />
              </div>
              <div className="h-[47px] w-16 relative rounded-6xl bg-gray-200 box-border z-[7] border-[1px] border-solid border-gray-100" />
              <img
                className="h-14 w-[102px] relative object-cover"
                loading="lazy"
                alt=""
                src="/verified-account@2x.png"
              />
            </div>
            <div className="absolute top-[230px] left-[0px] w-[598px] flex flex-col items-start justify-start max-w-full">
              <div className="w-[539px] flex flex-row items-start justify-start max-w-full">
                <div className="flex-1 relative leading-[38px] inline-block max-w-full z-[7] mq450:text-lgi mq450:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
                  <ol className="m-0 font-inherit text-inherit pl-[43px]">
                    <li>
                      <span>{`Enter your Password `}</span>
                      <span className="text-red">*</span>
                    </li>
                  </ol>
                </div>
                <div className="flex-1 relative leading-[38px] inline-block max-w-full z-[8] ml-[-539px] mq450:text-lgi mq450:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
                  <ol className="m-0 font-inherit text-inherit pl-[43px]">
                    <li>
                      <span>{`Enter your Password `}</span>
                      <span className="text-red">*</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-2 pr-[13px] pl-[51px] box-border relative max-w-full mt-[-11px] text-5xl text-pink">
                <input
                  className="[outline:none] bg-gray-200 h-[47px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-6xl box-border z-[9] border-[1px] border-solid border-gray-100"
                  type="text"
                />
                <div className="h-[69px] flex-1 relative leading-[130%] flex items-end max-w-full z-[10] mq450:text-lgi mq450:leading-[25px]">
                  ex : Subu@123
                </div>
              </div>
            </div>
            <div className="absolute top-[353px] left-[4px] leading-[130%] flex items-end w-[539px] h-[38px] z-[7] mq450:text-lgi mq450:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
              <span className="w-full">
                <ol className="m-0 font-inherit text-inherit pl-[43px]">
                  <li>
                    <span>{`Renter your Password `}</span>
                    <span className="text-red">*</span>
                  </li>
                </ol>
              </span>
            </div>
            <div className="absolute top-[380px] left-[4px] w-[598px] flex flex-row items-start justify-end pt-0 pb-2 pr-[13px] pl-[51px] box-border max-w-full text-5xl text-pink">
              <input
                className="[outline:none] bg-gray-200 h-[47px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-6xl box-border z-[7] border-[1px] border-solid border-gray-100"
                type="text"
              />
              <div className="h-[69px] flex-1 relative leading-[130%] flex items-end max-w-full z-[8] mq450:text-lgi mq450:leading-[25px]">
                ex : Subu@123
              </div>
            </div>
            <div className="absolute top-[476px] left-[4px] leading-[130%] flex items-end w-[642px] h-[38px] z-[7] mq450:text-lgi mq450:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
              <span className="w-full">
                <ol className="m-0 font-inherit text-inherit pl-[43px]">
                  <li>
                    <span>{`Enter OTP ? (Check Your email inbox)  `}</span>
                    <span className="text-red">*</span>
                  </li>
                </ol>
              </span>
            </div>
          </div>
        </section>
        <div className="w-[635px] flex flex-row items-start justify-start max-w-full">
          <button className="cursor-pointer [border:none] pt-[18px] px-[75px] pb-[17px] bg-steelblue w-[560px] rounded-26xl flex flex-row items-center justify-end box-border max-w-full z-[7] hover:bg-deepskyblue mq675:pl-[37px] mq675:pr-[37px] mq675:box-border">
            <div className="h-[75px] w-[560px] relative rounded-26xl bg-steelblue hidden max-w-full" />
            <div className="w-[337px] relative text-17xl leading-[40px] font-hachi-maru-pop text-white text-left flex items-end shrink-0 max-w-full z-[8] mq450:text-3xl mq450:leading-[28px] mq750:text-10xl mq750:leading-[37px]">{`Save & Register`}</div>
          </button>
        </div>
      </main>
      <div className="h-[47px] w-[598px] relative rounded-6xl bg-gray-200 box-border hidden max-w-full border-[1px] border-solid border-gray-100" />
      <div className="h-[69px] w-[534px] relative leading-[130%] hidden items-end shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px]">
        ex : Subu@123
      </div>
    </div>
  );
};

export default UserRegistrationForm;
