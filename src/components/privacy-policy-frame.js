const PrivacyPolicyFrame = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-xl text-white font-hachi-maru-pop">
      <div className="h-[269px] w-[1216px] relative max-w-full mq725:h-auto mq725:min-h-[269]">
        <div className="absolute top-[0px] left-[0px] w-full h-full max-w-full mq725:h-auto mq725:min-h-[269]">
          <div className="absolute h-full top-[0px] left-[0px] tracking-[-0.02em] leading-[120%] inline-block w-[432px] mq450:text-base mq450:leading-[19px]">
            <p className="m-0 text-gold-100">About</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Our Story</p>
            <p className="m-0">Privacy Policy</p>
            <p className="m-0">FAQ</p>
          </div>
          <div className="absolute top-[0px] left-[306px] tracking-[-0.02em] leading-[120%] inline-block w-[344px] h-[210px] mq450:text-base mq450:leading-[19px]">
            <p className="m-0 text-gold-100">Quick Links</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Academy</p>
            <p className="m-0">Events</p>
            <p className="m-0">Community</p>
            <p className="m-0">Join as Tutor</p>
          </div>
          <div className="absolute top-[0px] left-[624px] w-[592px] flex flex-row items-start justify-start gap-[0px_1px] max-w-full mq725:flex-wrap">
            <div className="w-72 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[288px] mq725:flex-1">
              <div className="self-stretch h-[90px] relative tracking-[-0.02em] leading-[120%] inline-block shrink-0 mq450:text-base mq450:leading-[19px]">
                <p className="m-0 text-gold-100">Social Links</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Instagram</p>
                <p className="m-0">Twitter</p>
                <p className="m-0">Facebook</p>
              </div>
            </div>
            <div className="h-[205px] flex-1 relative tracking-[-0.02em] leading-[120%] inline-block min-w-[197px] mq450:text-base mq450:leading-[19px]">
              <p className="m-0 text-gold-100">Contact Info</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">call us : +91 85425 *****</p>
              <p className="m-0">Address: HarmonyHub</p>
              <p className="m-0">Team, Jain University,</p>
              <p className="m-0">Bangalore, Karnataka.</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[250px] left-[416px] text-base tracking-[-0.02em] leading-[120%] inline-block w-[670px] h-[-1px] z-[1]">
          Copyright@2024 HarmonyHub All rights reseverd
        </div>
      </div>
    </footer>
  );
};

export default PrivacyPolicyFrame;
