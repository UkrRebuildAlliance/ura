import { getStyles } from './styles';

import './styles.css';

interface PartnersBlockProps {
  src: string;
  matt?: boolean;
  className?: string;
}

export const PartnersBlock = ({ className, matt, src }: PartnersBlockProps) => {
  const styles = getStyles(matt);

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={`${styles.imgWrapper}`}>
        <img className={styles.img} src={src} alt="logo" />
      </div>
    </div>
  );
};
