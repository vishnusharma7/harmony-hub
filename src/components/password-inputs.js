const PasswordInputs = ({ bangalore }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-2 pr-[13px] pl-[51px] box-border relative max-w-full mt-[-11px] text-left text-5xl text-pink font-hachi-maru-pop mq675:pl-[25px] mq675:box-border">
      <div className="h-[69px] flex-1 relative leading-[130%] flex items-end max-w-full z-[1] mq450:text-lgi mq450:leading-[25px]">
        {bangalore}
      </div>
      <div className="h-[47px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute top-[0px] left-[0px] rounded-6xl bg-gray-200 box-border w-full h-full border-[1px] border-solid border-gray-100" />
        <img
          className="absolute top-[15px] left-[541px] w-6 h-[17px] z-[2]"
          alt=""
          src="/email-input.svg"
        />
      </div>
    </div>
  );
};

export default PasswordInputs;
