import Row1 from "./row1";
import Column from "./column";

const Row = () => {
  return (
    <div className="w-[1240px] flex flex-col items-center justify-start gap-[20px] max-w-full text-left text-xl text-primary-dark-80 font-familymain mq750:gap-[60px]" data-aos="fade-up">
    
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-0.5 pl-0 box-border gap-[40px] max-w-full mq750:gap-[40px]">
        <Column
          clientName="Ethan Johnson"
          reviewText="The results have been nothing short of remarkable. Our online presence has significantly improved, and our sales have seen a steady increase since we partnered with them."
          clientName1="Mason Martinez"
          reviewText1="Always find myself eagerly awaiting their next episode. It's clear that they put a lot of effort into every aspect of their podcasts"
          clientName2="Isabella Thompson"
          reviewText2="The results have been nothing short of remarkable. Our online presence has significantly improved, and our sales have seen a steady increase since we partnered with them."
        />
        <Column
          clientName="Sophia Williams"
          reviewText="I've been consistently impressed with their dedication to excellence. Their team goes above and beyond to support their creators, providing top-tier production resources and guidance."
          clientName1="Amelia Turner"
          reviewText1="I've been consistently impressed with their dedication to excellence. Their team goes above and beyond to support their creators, providing top-tier production resources and guidance."
          clientName2="Ava Davis"
          reviewText2="Their transparent reporting and analytics have allowed us to track the impact of our campaigns effectively."
          propHeight="unset"
          propHeight1="unset"
        />
     
      </div>
    </div>
  );
};

export default Row;
