import { routes } from '@/constants';
import { Link } from 'react-router-dom';

interface ITeamsCard {
    id: string;
    img: string;
    name: string;
    job_title: string;
}

export const TeamsCard = ({ img, name, job_title, id }: ITeamsCard) => {
    return (
        <Link
            to={`${routes.client.team}/${id}`}
            className="flex flex-col w-full gap-[12px] group cursor-pointer"
        >
            <div className="max-w-[100%] w-full overflow-hidden">
                <img
                    src={img}
                    alt={name}
                    className="aspect-[0.8/1] w-full flex group-hover:scale-110 transition-all duration-300"
                />
            </div>

            <div className="w-full flex flex-col gap-[4px]">
                <h6 className="select-none capitalize text-[16px] leading-[150%] max-w-[132px] font-bold tablet:text-[20px] laptop:text-[18px] laptop:max-w-[50%] desktop:max-w-full desktop:text-[20px] desktopLg:text-[30px]">
                    {name}
                </h6>
                <p className="select-none font-normal text-[10px] leading-[145%] max-w-[132px] sm:max-w-full tablet:text-[18px] laptop:text-[12px] desktop:text-[16px]">
                    {job_title}
                </p>
            </div>
        </Link>
    );
};
