import TeamMember from "./teammember";

const Team = () => {
  
  return (
    <section className="self-stretch bg-secondary-light-30 flex flex-col items-center justify-center  px-5 box-border gap-[70px] max-w-full text-center text-60-custom text-secondary-dark-20 font-familymain mq450:gap-[70px] mq450:pt-[27px] mq450:pb-[27px] mq450:box-border mq750:gap-[70px] mq1050:pt-[42px] mq1050:pb-[42px] mq1050:box-border mq1250:pt-[65px] mq1250:pb-[65px] mq1250:box-border">
      <div className="w-[1640px] flex flex-row flex-wrap items-start justify-center gap-[30px_31px] min-h-[1224px] max-w-full text-left text-sm text-secondary-dark-40 font-custom-bold mq750:gap-[30px_31px]">
        <TeamMember image="/image-21@2x.png" />
        <TeamMember image="/image-21@2x.png" />
        <TeamMember image="/image-21@2x.png" />
        <TeamMember image="/image-21@2x.png" />
        <TeamMember image="/image-21@2x.png" />
        <TeamMember image="/image-21@2x.png" />
       
      </div>
    </section>
  );
};

export default Team;
