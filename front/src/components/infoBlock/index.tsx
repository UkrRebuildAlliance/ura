import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import { Desktop, NotDesktop } from '@/utils/responsive';

import './styles.css';
import { Button } from '..';
import { getStyles } from './helper';

interface InfoBlockProps {
  to: string;
  img: string;
  text: string;
  date: string;
  title: string;
  className?: string;
}

export const InfoBlock = ({
  to,
  img,
  text,
  date,
  title,
  className = '',
}: InfoBlockProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const styles = getStyles();

  const onClick = () => {
    navigate(to);
  };

  return (
    <>
      <NotDesktop>
        <div
          className={`flex flex-col w-full tablet:max-w-[45.5%] laptop:max-w-[47.5%] ${className}`}
        >
          <h2 className="mb-6 font-bold text-center tablet:mb-5 tablet:text-left text-ellipsis line-clamp-1">
            {title}
          </h2>

          <Link
            to={to ? to : '#'}
            className="flex flex-col items-center w-full"
          >
            <div className="flex items-center justify-center min-w-[280px] overflow-hidden rounded-20 mb-8 tablet:mb-6">
              <img
                src={img}
                alt="new_image"
                className="object-cover aspect-[1.29/1]"
              />
            </div>

            <div className="self-start mb-3 tablet:mb-2">{date}</div>

            <p className={styles}>{text}</p>
          </Link>
        </div>
      </NotDesktop>

      <Desktop>
        <div
          className={`flex w-full gap-10 desktop:gap-4 desktopLg:gap-10 max-w-[48%]  ${className}`}
        >
          <div className="flex flex-col">
            <h2 className="font-bold text-[18px] text-ellipsis line-clamp-1">
              {title}
            </h2>

            <div className="pt-8 mb-5 place-self-start">{date}</div>

            <p className={styles}>{text}</p>

            <Button
              onClick={onClick}
              text={t('readMore')}
              variant="primary-outline"
              className="max-w-[240px] mt-auto"
            />
          </div>

          <div className="flex items-center justify-center min-w-[400px] max-w-[400px] w-full h-full overflow-hidden rounded-20">
            <img
              src={img}
              alt="new_image"
              className="flex object-cover w-full h-full aspect-[1/0.83]"
            />
          </div>
        </div>
      </Desktop>
    </>
  );
};
