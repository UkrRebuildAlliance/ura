import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import File from '@/assets/svg/file.svg?react';

import { getStyles } from './styles';
import { InputFileProps } from './types';

const textSizeExample = 'Розмір зображення 1290 на 1000 пікселів';

export const InputFile = ({
    name,
    aspect = '1.29/1',
    textExampleSize = textSizeExample,
}: InputFileProps) => {
    const {
        register,
        formState: { errors },
        ...rest
    } = useFormContext();

    const [img, setImg] = useState<null | string>(null);

    const errorText = errors[name]?.message;

    const styles = getStyles({ aspect, error: !!errorText });

    const image = rest.watch(name);

    useEffect(() => {
        if (image) {
            try {
                const imageURL = URL.createObjectURL(image[0]);
                setImg(imageURL);
            } catch (err) {
                console.log(err);
            }
        }
    }, [image]);

    return (
        <div className="flex flex-col w-full gap-4">
            <label className={styles.label}>
                {!img && (
                    <div className="flex flex-col items-center justify-center gap-4 m-4">
                        <File width={40} height={40} />

                        <p className="text-center">
                            Натисніть тут, щоб завантажити
                        </p>

                        <div>
                            <p className="mb-2 text-center">
                                Файл не може бути
                            </p>
                            <p className="text-center">більшим ніж 5MB</p>
                        </div>
                    </div>
                )}

                {img && <img src={img} alt="image" className={styles.img} />}

                <input
                    type="file"
                    {...register(name)}
                    className="hidden w-full h-full"
                    accept="image/png, image/jpeg, image/jpg"
                />
            </label>

            {errorText && <p className="text-warning">{errorText as string}</p>}

            {textExampleSize && (
                <p className="text-center text-[18px]">{textExampleSize}</p>
            )}
        </div>
    );
};
