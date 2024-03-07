import { useMemo } from "react";

const EmailInputField = ({
  enterYourEmailId,
  exXyzgmailcom,
  exXyzgmailcomFlex,
  exXyzgmailcomAlignSelf,
}) => {
  const emailInputFieldStyle = useMemo(() => {
    return {
      flex: exXyzgmailcomFlex,
      alignSelf: exXyzgmailcomAlignSelf,
    };
  }, [exXyzgmailcomFlex, exXyzgmailcomAlignSelf]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start max-w-full text-left text-13xl text-white font-hachi-maru-pop"
      style={emailInputFieldStyle}
    >
      <div className="w-[539px] h-[38px] relative leading-[130%] flex items-end shrink-0 max-w-full mq450:text-lgi mq450:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
        <span className="w-full">
          <span>{enterYourEmailId}</span>
          <span className="text-red">*</span>
        </span>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-2 pr-[13px] pl-[51px] box-border relative max-w-full mt-[-11px] text-5xl text-pink mq675:pl-[25px] mq675:box-border">
        <input
          className="[outline:none] bg-gray-200 h-[47px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-6xl box-border border-[1px] border-solid border-gray-100"
          type="text"
        />
        <div className="h-[69px] flex-1 relative leading-[130%] flex items-end max-w-full z-[1] mq450:text-lgi mq450:leading-[25px]">
          {exXyzgmailcom}
        </div>
      </div>
    </div>
  );
};

export default EmailInputField;
