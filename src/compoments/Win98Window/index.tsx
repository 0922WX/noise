import type { ReactNode, CSSProperties } from 'react'

export interface Win98WindowProps {
    title: string
    icon?: ReactNode
    children: ReactNode
    className?: string
    style?: CSSProperties
}

export function Win98Window({
    title,
    icon,
    children,
    className = '',
    style = {},
}: Win98WindowProps) {
    return (
        <div
            className={className}
            style={{
                background: '#C0C0C0',
                borderTop: '2px solid #FFFFFF',
                borderLeft: '2px solid #FFFFFF',
                borderRight: '2px solid #000000',
                borderBottom: '2px solid #000000',
                boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.25)',
                ...style,
            }}
        >
            {/* 标题栏 */}
            <div
                style={{
                    background: 'linear-gradient(90deg, #000080, #1084D0)',
                    padding: '3px 4px 3px 6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                }}
            >
                <div className="flex items-center gap-2 min-w-0">
                    {icon && <span className="shrink-0 text-white">{icon}</span>}
                    <span
                        style={{
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            fontSize: '13px',
                            letterSpacing: '0.02em',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {title}
                    </span>
                </div>
                {/* 如需标题栏按钮，取消下面注释 */}
                {/* <div className="flex gap-1 shrink-0">
          <Win98TitleBtn>_</Win98TitleBtn>
          <Win98TitleBtn>□</Win98TitleBtn>
          <Win98TitleBtn>×</Win98TitleBtn>
        </div> */}
            </div>

            {/* 内容区 */}
            <div
                style={{
                    borderTop: '2px solid #DFDFDF',
                    borderLeft: '2px solid #DFDFDF',
                    borderRight: '2px solid #808080',
                    borderBottom: '2px solid #808080',
                }}
            >
                {children}
            </div>
        </div>
    )
}

export function Win98TitleBtn({ children }: { children: ReactNode }) {
    return (
        <span
            style={{
                background: '#C0C0C0',
                borderTop: '1px solid #FFFFFF',
                borderLeft: '1px solid #FFFFFF',
                borderRight: '1px solid #404040',
                borderBottom: '1px solid #404040',
                width: '16px',
                height: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '9px',
                fontWeight: 'bold',
                color: '#000000',
                lineHeight: 1,
                flexShrink: 0,
                cursor: 'default',
            }}
        >
            {children}
        </span>
    )
}