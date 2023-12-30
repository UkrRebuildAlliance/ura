import { ButtonAdmin, PageHead } from '@/components';
import asd from '../../components/mock/img/some_file.pdf';

export const AdminReportingPage = ({}) => {
    return (
        <>
            <PageHead title="Звітність" withOutBtn />

            <div className="flex flex-col justify-center gap-5 px-4 py-6 rounded-md sm:justify-around bg-crumbsText ">
                <form className="flex flex-wrap items-center self-end gap-5 px-5 py-3 border border-white rounded-md sm:flex-nowrap max-w-max">
                    <label className="text-center transition-all duration-200 cursor-pointer hover:text-adminLinksActive">
                        Прикріпити новий звіт
                        <input type="file" accept=".png" className="hidden" />
                    </label>

                    <ButtonAdmin
                        variant="primary"
                        text="Відправити"
                        className="ml-auto"
                    />
                </form>

                <embed
                    src={asd}
                    className="aspect-[0.709] scroll max-h-[800px] rounded-md w-full shadow-xl"
                />
            </div>
        </>
    );
};
