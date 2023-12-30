import { useFormContext } from 'react-hook-form';

import File from '@/assets/svg/file.svg?react';

import { getStyles } from './styles';
import { InputFileProps } from './types';

export const InputFile = ({ name, aspect = '1.29/1' }: InputFileProps) => {
    const styles = getStyles({ aspect, error: true });
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label className={styles}>
                <File width={40} height={40} />

                <p className="text-center">Натисніть тут, щоб завантажити</p>

                <div>
                    <p className="text-center">File size cannot</p>
                    <p className="text-center"> be larger than 5MB</p>
                </div>

                <input
                    type="file"
                    {...register(name)}
                    className="hidden w-full h-full"
                    accept="image/png, image/jpeg, image/jpg"
                />
            </label>

            {errors && (
                <p className="text-red-500">{errors.file?.message as string}</p>
            )}
        </div>
    );
};
