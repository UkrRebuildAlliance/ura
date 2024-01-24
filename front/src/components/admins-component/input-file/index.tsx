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

  const styles = getStyles({ error: !!errorText });

  const image = rest.watch(name);

  useEffect(() => {
    if (image && typeof image === 'string') {
      setImg(image);
    }

    if (image && typeof image !== 'string') {
      try {
        const imageURL = URL.createObjectURL(image[0]);
        setImg(imageURL);
      } catch (err) {
        console.log(err);
      }
    }
  }, [image]);

  return (
    <div className="flex flex-col w-full gap-2">
      <label className={styles.label} style={{ aspectRatio: aspect }}>
        {!img && (
          <div className="flex flex-col items-center justify-center gap-4 m-4 text-[12px] sm:text-[14px] laptop:text-[16px] text-center">
            <File width={40} height={40} />

            <p>Натисніть тут, щоб завантажити</p>

            <div>
              <p>Файл не може бути</p>
              <p>більшим ніж 5MB</p>
            </div>
          </div>
        )}

        {img && (
          <img
            src={img}
            alt="image"
            className={styles.img}
            style={{ aspectRatio: aspect }}
          />
        )}

        <input
          type="file"
          {...register(name)}
          className="hidden w-full h-full"
          accept="image/png, image/jpeg, image/jpg"
        />
      </label>

      {errorText && (
        <p className="text-xs text-warning">{errorText as string}</p>
      )}

      {textExampleSize && (
        <p className="text-center text-[10px] sm:text-[14px]">
          {textExampleSize}
        </p>
      )}
    </div>
  );
};
