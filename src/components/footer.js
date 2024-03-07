const Footer = () => {
  return (
    <footer className="w-full flex flex-col  justify-center  gap-[2em] text-left text-xl text-white font-hachi-maru-pop mq750:gap-[18px_0px]">
      <div className="self-stretch flex flex-wrap gap-[2.5em] justify-center relative  mq750:h-auto mq750:min-h-[204]">
      <div className=" flex flex-col gap-1 z-[1] mq450:text-base mq450:leading-[19px] min-w-[150px]">
          <p className="m-0 text-gold-100">About</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Our Story</p>
          <p className="m-0">Privacy Policy</p>
          <p className="m-0">FAQ</p>
        </div>
        <div className=" flex flex-col gap-1 z-[1] mq450:text-base mq450:leading-[19px] min-w-[150px]">
          <p className="m-0 text-gold-100">Quick Links</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Academy</p>
          <p className="m-0">Events</p>
          <p className="m-0">Community</p>
          <p className="m-0">Join as Tutor</p>
        </div>
        <div className=" flex flex-col gap-1 z-[1] mq450:text-base mq450:leading-[19px] min-w-[150px]">
              <p className="m-0 text-gold-100">Social Links</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Instagram</p>
              <p className="m-0">Twitter</p>
              <p className="m-0">Facebook</p>
            </div>
       
            <div className=" flex flex-col gap-1 z-[1] mq450:text-base mq450:leading-[19px] min-w-[150px]">
            <p className="m-0 text-gold-100">Contact Info</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">call us : +91 85425 *****</p>
            <p className="m-0">Address: HarmonyHub</p>
            <p className="m-0">Team, Jain University,</p>
            <p className="m-0">Bangalore, Karnataka.</p>
          </div>
     
    </div>
      <div className="relative w-full flex justify-center text-center py-0 px-5 box-border  text-base">
        <div className=" inline-block shrink-0 max-w-full">
          Copyright@2024 HarmonyHub All rights reseverd
        </div>
      </div>
    </footer>
  );
};

export default Footer;
