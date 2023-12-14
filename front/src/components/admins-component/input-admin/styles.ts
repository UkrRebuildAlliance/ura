import clsx from 'clsx';

export const getStyles = (error?: string, isTypePassword?: boolean) => ({
    mainInput: clsx(
        'p-2 w-full h-10 border text-text bg-transparent enabled:border-zinc-400 enabled:focus:border-primary enabled:active:border-primary disabled:bg-zinc-500 rounded-lg transition-colors duration-300 ease-in-out focus-visible:outline-none',
        {
            'border-warning ': error,
            'pr-8': isTypePassword,
        },
    ),

    textarea: clsx(
        'w-full h-24 p-2 bg-transparent border rounded-lg resize-none enabled:border-zinc-400 enabled:focus:border-primary enabled:active:border-primary outline-0',
        {
            'border-warning ': error,
        },
    ),
});
