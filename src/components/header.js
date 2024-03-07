import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <header className="fixed  w-[100%] z-[10] bg-gray-200 self-stretch overflow-hidden flex flex-row items-end justify-between py-[27px] pr-[21px] pl-0 box-border max-w-full gap-[20px] text-center text-29xl text-white font-jolly-lodger">
      <h1 className="ml-[-20px] m-0 w-[345px] relative text-inherit leading-[57px] font-normal font-inherit flex items-center justify-center shrink-0 whitespace-nowrap max-w-full">
        HarmonyHub
      </h1>
      <div className="w-[850px] flex flex-row items-end justify-start relative gap-[1em] max-w-full text-xl font-hachi-maru-pop lg:w-[236px] mq1050:gap-[0px_55px] mq450:gap-[0px_27px]">
        <div className=" flex flex-row gap-[1em] items-center justify-start max-w-full lg:hidden">
          <Link to={"/"} className="flex flex-col items-start justify-start py-0  pl-0 box-border outline-none">
            <div className="self-stretch  relative leading-[130%] flex items-center justify-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#fff]">
              Home
            </div>
          </Link>
          <Link to={"/homepage"} className="flex flex-col items-start justify-start  box-border ">
            <div className="self-stretch  relative leading-[130%] flex items-center justify-center shrink-0 [-webkit-text-stroke:1px_#fff]">
              Academies
            </div>
          </Link>
          <Link to={"/homepage1"} className=" flex flex-col items-start justify-start  pl-0 box-border">
            <div className="self-stretch relative leading-[130%] flex items-center justify-center shrink-0 [-webkit-text-stroke:1px_#fff]">
              Events
            </div>
          </Link>
          <div className="  relative leading-[130%] flex items-center justify-center [-webkit-text-stroke:1px_#fff] whitespace-nowrap ]">
            Join as Tutor
          </div>
          <div className=" flex flex-row items-start justify-start relative ">
            <div className=" relative leading-[130%] flex items-center justify-center [-webkit-text-stroke:1px_#fff] whitespace-nowrap">
              About us
            </div>
          </div>


          <div className="flex flex-col items-center">

            <img
              className="h-[35px] w-[35px] rounded-46xl object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/image-11@2x.png"
            />
            {isAuthenticated && <p className="">{user.name}</p>}

          </div>

       

        </div>
        {
              isAuthenticated ? (
                <button className="cursor-pointer [border:none]  bg-gold-100 p-2  rounded-mini overflow-hidden shrink-0 flex flex-row items-center justify-center box-border hover:bg-gold-200">
                  <div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="relative text-xl leading-[130%] font-hachi-maru-pop text-gray-300 text-center">
                    Log out
                  </div>
                </button>
              ) : (
                <button className="cursor-pointer [border:none] p-2  bg-gold-100 rounded-mini overflow-hidden shrink-0 flex flex-row items-center justify-center box-border hover:bg-gold-200">
                  <div onClick={() => loginWithRedirect()} className="relative text-xl leading-[130%] font-hachi-maru-pop text-gray-300 text-center">
                    Log in
                  </div>
                </button>
              )

            }
      </div>
      <div className="h-[100px] w-[216px] relative overflow-hidden shrink-0 hidden" />
    </header>
  );
};

export default Header;
