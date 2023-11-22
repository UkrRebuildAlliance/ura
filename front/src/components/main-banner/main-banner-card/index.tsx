interface IMainBannerCard {
  href: string;
  ttl: string;
  content: string;
}

export const MainBannerCard = ({ href, ttl, content }: IMainBannerCard) => {
  return (
    <div className="relative flex flex-col-reverse w-full px-[30px] gap-4 items-center sm:flex-row sm:justify-center pt-[50px] laptop:pb-[20px] desktop:justify-evenly desktop:max-w-[1620px] desktop:mx-auto desktop:gap-10">
      <div className="hidden laptop:block  desktop:h-[160px] laptop:h-[74px] laptop:w-[74px] desktop:w-[160px] bg-[#F0F600] absolute top-0 left-0" />

      <div className="hidden laptop:block top-[82px] laptop:left-1/3 desktop:left-1/2 laptop:translate-x-[20%] desktop:-translate-x-[70%] laptop:h-[75px] laptop:w-[155px]  desktop:h-[157px] desktop:w-[320px] bg-[#CECCFE] absolute z-0 rounded-bl-full rounded-br-full" />

      <div className="hidden laptop:block bottom-0 -translate-y-full left-0 w-0 h-0 border-l-[105px] border-r-[110px] border-r-transparent border-l-transparent border-b-[#9108FC] border-b-[110px] absolute rotate-[45.5deg]" />

      <div className="hidden laptop:block bottom-[20px] laptop:-translate-y-full laptop:translate-x-full desktop:-translate-y-1/2  desktop:translate-x-1/2 left-1/3 w-0 h-0 border-l-[50px] desktop:border-l-[106px] border-r-[50px] desktop:border-r-[110px] border-r-transparent border-l-transparent border-b-[#B6AFFF] border-b-[50px] desktop:border-b-[110px] absolute rotate-[45.5deg]" />

      <div className="relative z-1 flex flex-col gap-6 text-center text-blueBlack font-montserrat max-w-[280px] tablet:max-w-[400px] desktop:max-w-[650px] ">
        <h2 className="font-extrabold text-[24px] laptop:text-[36px] desktop:text-[50px] ">
          {ttl}
        </h2>

        <p className="font-medium text-[18px] laptop:text-[30px] desktop:text-[40px]">
          {content}
        </p>
      </div>

      <div className="relative z-1 flex p-[5px] max-w-[300px] rounded-tl-[80px] rounded-bl-[80px] bg-mainBanner laptop:rounded-tr-[80px] tablet:max-w-[400px] laptop:max-w-[500px]  desktop:max-w-[700px] ">
        <img
          src={href}
          alt={ttl}
          className="block w-full rounded-tl-[75px] rounded-bl-[75px] laptop:rounded-tr-[75px]"
        />
      </div>
    </div>
  );
};
