import React from 'react';
import { useTranslation } from 'react-i18next';

import { lineBreak } from '@/utils/helpers';

export const Address = ({}) => {
    const { t } = useTranslation();
    const address = lineBreak(t('footer.addresses', { br: '\n' }));

    return (
        <>
            {address.map((line, idx) => (
                <React.Fragment key={idx}>
                    {line}
                    {idx < address.length - 1 && <br />}
                </React.Fragment>
            ))}
        </>
    );
};
