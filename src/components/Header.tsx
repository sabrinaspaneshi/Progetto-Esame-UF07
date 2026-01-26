import { Link } from 'react-router-dom';

type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <header className="header">
            {title && (
                <div style={{ textAlign: 'center', marginTop: 10 }}>
                    <h2 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '2.2rem',
                        fontWeight: 700,
                        color: 'var(--elegant-red)',
                        letterSpacing: '1px',
                        margin: 0
                    }}>{title}</h2>
                </div>
            )}
        </header>
    );
}
