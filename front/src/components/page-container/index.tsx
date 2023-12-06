import { ChildrenProps } from '@/types';

export const PageContainer = ({ children }: ChildrenProps) => {
  return (
    <div className="pt-[30px] tablet:pt-[60px] pb-[100px] tablet:pb-[120px] desktop:pb-[150px] px-[30px] tablet:px-[100px] desktopLg:px-0 desktopLg:max-w-[1620px] desktopLg:mx-auto">
      {children}
    </div>
  );
};
