interface IBunsCard {
  href: string;
  content: string;
}

export const BunsCard = ({ href, content }: IBunsCard) => {
  return (
    <div className="flex flex-col items-center justify-start bg-bunsGradient h-[230px] desktop:h-[337px] max-w-[500px] w-full rounded-[20px] desktop:rounded-[44px]  pb-4">
      <div className="flex ">
        <img
          src={href}
          alt="asd"
          className="block object-cover w-[170px] desktop:w-[230px] max-h-[157px] desktop:max-h-[213px]"
        />
      </div>
      <p className="block px-4 max-w-[400px] w-full text-white text-[14px] desktop:text-[24px] font-medium font-montserrat text-center">
        {content}
      </p>
    </div>
  );
};
