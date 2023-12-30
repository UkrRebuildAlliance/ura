import { routes } from '@/constants';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
    const message = 5;
    return (
        <div className="flex justify-center h-full pt-20 text-[24px] text-center">
            <h1 className="text-white">
                У вас <span className="text-[#B08D57]">{message}</span>
                {` не прочитанних повідомлень.   `}
                <Link
                    className="underline transition-all duration-300 text-adminLinksActive hover:text-secondary"
                    to={routes.admin.incoming}
                >
                    Перейти
                </Link>
            </h1>
        </div>
    );
};
