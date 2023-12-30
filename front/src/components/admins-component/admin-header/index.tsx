import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { Logo } from '@/components';
import Exit from '@/assets/svg/exit.svg?react';

import { AdminContainer } from '..';

export const AdminHeader = ({}) => {
    const navigate = useNavigate();

    const exit = () => {
        Cookies.remove('refreshToken');
        navigate('/login');
    };

    return (
        <header className="justify-between w-full border-b border-partnersMatt ">
            <AdminContainer className="p-[5!important] laptop:px-[0!important] text-[white] gap-[100px] flex items-center justify-between">
                <Logo isFooter isAdmin />

                <Exit
                    onClick={exit}
                    className="w-[40px] drop-shadow-md min-w-[40px] tablet:w-[50px] desktop:w-[60px]  cursor-pointer hover:scale-95 transition-all duration-200"
                />
            </AdminContainer>
        </header>
    );
};
