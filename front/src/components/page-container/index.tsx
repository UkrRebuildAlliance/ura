import { ChildrenProps } from '@/types';

export const PageContainer = ({ children }: ChildrenProps) => {
    return (
        <div className="py-[34px] px-[20px] laptop:px-[100px] laptop:py-[64px] desktopLg:px-0 desktopLg:max-w-[1620px] desktopLg:mx-auto">
            {children}
        </div>
    );
};
