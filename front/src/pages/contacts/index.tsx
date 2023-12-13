import { Breadcrumbs, Button, SocialMedia } from '@/components';

export const Contacts = ({}) => {
    return (
        <div className="mx-4 laptop:mx-[100px] mb-[50px] laptop:mb-[100px] desktop:mb-[150px]">
            <Breadcrumbs className="mt-[60px]" />

            <div className="flex flex-col laptop:flex-row gap-[50px] laptop:gap-[90px] desktop:gap-[80px]">
                <div className="flex flex-col gap-4 laptop:gap-[52px]">
                    <div>
                        <h4 className="mb-3 laptop:text-[18px] desktop:text-[24px] font-semibold">
                            Адреса
                        </h4>

                        <span className="text-[14px] laptop:text-[16px] desktop:text-[22px]">
                            65048, м. Одеса, <br /> вул. Базарна, 40, прим. 503
                        </span>
                    </div>

                    <div>
                        <h4 className="mb-3 laptop:text-[18px] desktop:text-[24px] font-semibold">
                            Телефон
                        </h4>

                        <a
                            href="tel:+380677776655"
                            className="text-[14px] laptop:text-[16px] desktop:text-[22px]"
                        >
                            +38 067 777 66 55
                        </a>
                    </div>

                    <div>
                        <h4 className="mb-3 laptop:text-[18px] desktop:text-[24px] font-semibold">
                            Напишіть
                        </h4>

                        <span className="text-[14px] laptop:text-[16px] desktop:text-[22px]">
                            Info@ukrainerebuild.com.ua
                        </span>
                    </div>

                    <div>
                        <h4 className="mb-3 laptop:text-[18px] desktop:text-[24px] font-semibold">
                            Соціальні мережі
                        </h4>

                        <SocialMedia className="gap-[10px] laptop:gap-6 text-white" />
                    </div>
                </div>

                <div className="flex flex-col w-full">
                    <h3 className="text-center laptop:text-left text-[24px] laptop:text-[26px] desktop:text-[40px] font-semibold text-borderP mb-5 desktop:mb-7">
                        Залишились питання?
                    </h3>

                    <div className="flex flex-col w-full desktop:flex-row gap-[30px] laptop:gap-5 desktop:gap-12">
                        <div className="flex flex-col gap-5 desktop:gap-[30px] w-full">
                            <input
                                type="text"
                                className="border-2 border-borderP"
                            />
                            <input
                                type="text"
                                className="border-2 border-borderP"
                            />
                            <input
                                type="text"
                                className="border-2 border-borderP"
                            />
                        </div>

                        <textarea
                            id=""
                            name=""
                            className="w-full border-2 border-borderP"
                        />
                    </div>

                    <Button
                        text="Відправити"
                        variant="primary-outline"
                        className="mt-[50px] laptop:mt-10 desktop:mt-20 tablet:max-w-[250px] ml-auto"
                    />
                </div>
            </div>
        </div>
    );
};
