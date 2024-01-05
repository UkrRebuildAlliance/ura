import clsx from 'clsx';

export const getStyles = (
    error?: boolean,
    isTypePassword?: boolean,
    isWhiteText?: boolean,
) => ({
    mainInput: clsx(
        'p-2 w-full h-10 border text-text bg-transparent enabled:hover:border-white enabled:border-zinc-400  enabled:focus:border-primary enabled:active:border-primary disabled:bg-zinc-500 rounded-lg transition-colors duration-300 ease-in-out focus-visible:outline-none',
        {
            'border-warning ': error,
            'pr-8': isTypePassword,
            'text-white enabled:focus:border-white': isWhiteText,
            'enabled:border-zinc-400': !isWhiteText,
        },
    ),

    textarea: clsx(
        'scroll w-full h-24 p-2 bg-transparent border rounded-lg resize-none enabled:hover:border-white duration-300 transition-all enabled:border-zinc-400 enabled:focus:border-primary enabled:active:border-primary outline-0',
        {
            'border-warning ': error,
            'text-white enabled:focus:border-white': isWhiteText,
            'enabled:border-zinc-400': !isWhiteText,
        },
    ),
});
