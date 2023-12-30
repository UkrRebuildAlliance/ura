import { Link } from 'react-router-dom';

type IIncomingControlItem = {
    id: string;
    date: string;
    name: string;
    email: string;
    content: string;
    isRead?: boolean;
};

export const IncomingDetails = ({
    date,
    name,
    email,
    content,
}: IIncomingControlItem) => {
    return (
        <div className="flex flex-wrap w-full gap-4 p-5 rounded-md bg-crumbsText">
            <span className="ml-auto">{date}</span>
            <span className="w-full">{name}</span>
            <p className="flex justify-between w-full gap-4">
                <Link
                    to={`mailto:${email}`}
                    className="cursor-pointer text-ellipsis line-clamp-1"
                >
                    {email}
                </Link>

                <span
                    onClick={() => navigator.clipboard.writeText(email)}
                    className="transition-all duration-200 cursor-pointer select-none hover:text-adminLinksActive"
                >
                    Копіювати
                </span>
            </p>
            <p className="w-full">{content}</p>
        </div>
    );
};
