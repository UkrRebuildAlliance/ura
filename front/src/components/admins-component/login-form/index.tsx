import { useTranslation } from 'react-i18next';

import { ButtonAdmin, Form, InputAdmin } from '@/components';

export const LoginForm = ({}) => {
    const { t } = useTranslation();

    return (
        <div className="w-full px-3 py-5 bg-white rounded-[8px] sm:max-w-[400px] sm:px-10">
            <Form
                mode="onChange"
                onSubmit={(values) => console.log(values)}
                // validationSchema={schema}
                // defaultValues={initialState}
            >
                <h3 className="block py-5 text-center text-[20px] font-bold border-b border-loginBg sm:text-[24px] ">
                    {t('login.title')}
                </h3>

                <div className="flex flex-wrap gap-5 w-full py-5 sm:max-w-[400px] mx-auto">
                    <InputAdmin name="login" label="Login" />

                    <InputAdmin
                        name="password"
                        type="password"
                        label="Password"
                    />

                    <ButtonAdmin
                        className="ml-auto w-[40%] min-w-[120px] mt-5"
                        text={t('login.login')}
                        variant="outline-primary"
                    />
                </div>
            </Form>
        </div>
    );
};
