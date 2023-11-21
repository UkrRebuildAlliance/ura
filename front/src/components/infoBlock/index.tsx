import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Mobile, NotMobile } from '@/utils/responsive';

import './styles.css';
import { getStyles } from './helper';

interface InfoBlockProps {
  to: string;
  img: string;
  text: string;
  title: string;
  team?: boolean;
  className?: string;
}

export const InfoBlock = ({
  to,
  img,
  text,
  team,
  title,
  className = '',
}: InfoBlockProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const styles = getStyles(team);

  const onClick = () => {
    navigate(to);
  };

  return (
    <>
      <Mobile>
        <div className={`flex flex-col w-full gap-7 ${className}`}>
          <h2 className="font-bold text-center">{title}</h2>

          <Link
            to={to ? to : '#'}
            className="flex flex-col items-center w-full h-full gap-7"
          >
            <div className="flex items-center justify-center min-w-[260px] w-full h-[calc(100% / 2)] overflow-hidden rounded-20">
              <img
                src={img}
                alt="image"
                className="object-cover w-full h-full aspect-[2/1]"
              />
            </div>

            <p className={styles.paragraph}>{text}</p>
          </Link>
        </div>
      </Mobile>

      <NotMobile>
        <div className={`flex w-full gap-10 ${className}`}>
          <div className={styles.textBlock}>
            <h2 className="font-bold text-[18px] tablet:mb-[13px]">{title}</h2>

            <p className={styles.paragraph}>{text}</p>

            {!team && (
              <button
                onClick={onClick}
                className="place-self-center text-gradient text-[24px] px-10 py-[10px] w-fit transition-all duration-300 hover:scale-110 mt-auto"
              >
                {t('readMore')}
              </button>
            )}
          </div>

          <div className={styles.imgBlock}>
            <img src={img} alt="image" className="object-cover w-full h-full" />
          </div>
        </div>
      </NotMobile>
    </>
  );
};
