import clsx from 'clsx';

interface ContentTextProps {
  content: string[];
  isTeamId?: boolean;
  className?: string;
}

export const ContentText = ({
  content,
  className,
  isTeamId,
}: ContentTextProps) => {
  return (
    <div className={className ? className : ''}>
      {content.map((text: string, idx: number) => {
        if (text === '') {
          return <br key={`new-by-id-${idx}`} />;
        }

        return (
          <p
            key={`new-by-id-${idx}`}
            className={clsx(
              'font-montserrat text-xs leading-[18px] tablet:text-[18px] tablet:leading-[27px] desktop:text-[20px] desktop:leading-[30px] ',
              { 'desktop:font-semibold': !isTeamId },
            )}
          >
            {text}
          </p>
        );
      })}
    </div>
  );
};
