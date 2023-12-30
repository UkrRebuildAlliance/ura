import { ButtonAdmin, InputAdmin } from '..';

export const PartnersDetails = ({}) => {
    return (
        <form className="flex flex-wrap w-full gap-10 p-4 py-6 rounded-md tablet:gap-6 tablet:justify-between bg-crumbsText">
            <div className="flex flex-col w-full gap-3 tablet:max-w-[45%]">
                <InputAdmin
                    name="asd"
                    isWhiteText
                    label="Укажыть ім'я вашого партнера на укр."
                />
                <InputAdmin
                    name="asd"
                    isWhiteText
                    label="Укажыть ім'я вашого партнера на анг."
                />
            </div>

            <div className="flex items-center w-full max-w-full tablet:max-w-[45%] tablet:-order-1">
                <img src="" alt="" className="aspect-[1.59/1] w-full flex" />
            </div>

            <ButtonAdmin variant="primary" text="Додати" className="ml-auto" />
        </form>
    );
};
