import clsx from 'clsx';

interface IPartnersCard {
    img: string;
    className?: string;
}

export const PartnersCard = ({ img, className }: IPartnersCard) => {
    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className={clsx(
                'min-w-[254px] aspect-[1.53/1] tablet:aspect-[1.49/1] bg-cover rounded-[20px] overflow-hidden w-full',
                className,
            )}
        />
    );
};
