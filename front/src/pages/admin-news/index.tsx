import { Link } from 'react-router-dom';

import { routes } from '@/constants';
import Delete from '@/assets/svg/delete.svg?react';
import { ButtonAdmin, PageHead, news } from '@/components';

export const AdminNews = ({}) => {
    const baseHref = routes.admin.news;
    return (
        <div>
            <PageHead title="Новини" className="mb-6" />

            <div className="flex flex-col gap-6">
                {news.map(({ id, date, title }) => (
                    <Link
                        to={`${baseHref}/${id}`}
                        key={`news-main-${id}`}
                        className="flex flex-wrap group-[btn] items-center justify-center w-full gap-3 px-4 py-1 border border-transparent rounded-md shadow-xl laptop:justify-between laptop:flex-nowrap bg-partnersMatt hover:border-white"
                    >
                        <span className="text-white group-[btn]:hover:text-second">
                            {date}
                        </span>

                        <span className="w-full text-white group-[btn]:hover:text-second">
                            {title}
                        </span>

                        <div className="flex justify-end w-full gap-3 laptop:w-max">
                            <ButtonAdmin
                                variant="primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log('Delete');
                                }}
                                icon={
                                    <Delete className="w-[25px] fill-partnersMatt group-hover:fill-warning transition-all duration-200" />
                                }
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
