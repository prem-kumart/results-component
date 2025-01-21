

const Result = () => {
  return (
    <div className="desktop:w-[386px] desktop:h-[512px] w-[376px] h-[376px] gradient-one rounded-[2rem] flex flex-col justify-center items-center gap-6 pt-8 desktop:pb-20 pb-4">
            <p className="font-hanken font-semibold text-light-blue text-2xl tracking-wide">Your Result</p>
            <div className="gradient-two rounded-full desktop:w-[200px] desktop:h-[200px] w-[146px] h-[146px] grid place-content-center">
                
                <div className="font-hanken font-medium  text-light-blue flex flex-col items-center ">
                   <p className="font-hanken desktop:text-7xl desktop:text-[72px] text-[56px] font-bold font text-white ">76</p> 
                   <p>of 100</p>
                </div>
            </div>
               <div className="flex flex-col items-center">
                <h2 className="font-hanken text-white desktop:text-[32px] text-[24px] font-bold tracking-wide">Great</h2>
                <p className="font-hanken text-light-blue text-center w-[260px] h-[70px] p-4 desktop:text-lg text-sm"> 
                   You scored higher than 65% of the people who have taken these tests
                </p>
            </div>
    </div>
   
  );
}

export default Result;
