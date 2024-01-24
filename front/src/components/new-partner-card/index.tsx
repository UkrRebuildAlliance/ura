import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface IPartnersCard {
    img: string;
    href?: string;
    className?: string;
}

export const PartnersCard = ({ img, className, href }: IPartnersCard) => {
    return (
        <>
            {href && (
                <Link to={href} target="_blank">
                    <div
                        style={{ backgroundImage: `url(${img})` }}
                        className={clsx(
                            'min-w-[254px] aspect-[1.53/1] tablet:aspect-[1.49/1] bg-cover rounded-[20px] overflow-hidden w-full',
                            className,
                        )}
                    />
                </Link>
            )}

            {!href && (
                <div
                    style={{ backgroundImage: `url(${img})` }}
                    className={clsx(
                        'min-w-[254px] aspect-[1.53/1] tablet:aspect-[1.49/1] bg-cover rounded-[20px] overflow-hidden w-full cursor-not-allowed',
                        className,
                    )}
                />
            )}
        </>
    );
};
