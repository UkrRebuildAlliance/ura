import { useMemo, useState } from 'react';

import Eye from '@/assets/svg/eye.svg?react';
import EyeOff from '@/assets/svg/eyeOff.svg?react';

import { ISwitchPassword } from './types';

const SwitchPassword = (isPassword: boolean): ISwitchPassword => {
    const [isShow, setIsShow] = useState(!isPassword);

    const currentType = useMemo(() => (isShow ? 'text' : 'password'), [isShow]);

    const Component = (
        <div
            className="absolute right-1.5 flex cursor-pointer top-1/2 translate-y-[-50%] text-loginBg hover:text-primary"
            onClick={() => setIsShow(!isShow)}
        >
            {isShow ? (
                <Eye width={20} height={20} />
            ) : (
                <EyeOff width={20} height={20} />
            )}
        </div>
    );

    return {
        switcher: Component,
        currentType,
    };
};

export { SwitchPassword };
