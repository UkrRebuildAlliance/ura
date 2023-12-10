interface ICard {
    img: string;
    text: string;
}

export const Card = ({ img, text }: ICard) => {
    return (
        <div className="flex gap-[18px] max-w-[100%] w-full items-start justify-center md:max-w-[48%] desktop:justify-between desktop:gap-[55px]">
            <div className="relative bg-borderP aspect-square rounded-bl-[170px] w-[30%]">
                <img
                    src={img}
                    alt="activity"
                    className="absolute right-0 top-0 max-w-[90%]"
                />
            </div>
            <p className="text-blueBlack text-[14px] min-[420px]:text-[20px] sm:text-[24px] md:text-[18px] laptop:text-[20px] desktop:text-[28px] font-normal w-full max-w-[65%] desktopLg:text-[34px]">
                {text}
            </p>
        </div>
    );
};
