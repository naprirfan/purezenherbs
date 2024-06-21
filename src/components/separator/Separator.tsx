interface SeparatorProps {
    mode?: 'DARK' | 'LIGHT'
}

export const Separator = ({mode = 'DARK'}: SeparatorProps) => {
    const borderClassName = `container h-[1px] border ${mode === 'DARK' ? 'border-gray': 'border-white'}`

    return (
        <div className="flex justify-center">
            <hr className={borderClassName} />
        </div>
    )
}