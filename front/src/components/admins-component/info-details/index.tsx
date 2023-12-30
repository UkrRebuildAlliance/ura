import { ButtonAdmin, InputAdmin } from '..';

export const InfoDetails = ({}) => {
    return (
        <form className="px-5 py-5 rounded-md bg-crumbsText">
            <div className="flex flex-wrap gap-4 tablet:flex-nowrap">
                <div className="flex items-center w-full max-w-full tablet:max-w-[30%]">
                    <img
                        src=""
                        alt=""
                        className="aspect-[2.29/1] w-full flex"
                    />
                </div>

                <div className="flex flex-wrap w-full gap-5 mb-5">
                    <InputAdmin
                        name="asd"
                        label="Заголовок на укр."
                        isWhiteText
                    />

                    <InputAdmin
                        name="asd1"
                        label="Заголовок на анг."
                        isWhiteText
                    />

                    <InputAdmin
                        name="asd1"
                        isWhiteText
                        type="date"
                        label="Дата випуску новини"
                    />
                </div>
            </div>

            <InputAdmin
                name="asd1"
                isWhiteText
                type="textarea"
                label="Новина на укр."
                className="mb-5"
            />

            <InputAdmin
                name="asd1"
                isWhiteText
                type="textarea"
                label="Новина на анг."
                className="mb-5"
            />
            <ButtonAdmin
                type="submit"
                text="Створити"
                variant="primary"
                className="ml-auto"
            />
        </form>
    );
};
