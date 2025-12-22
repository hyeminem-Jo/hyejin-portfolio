import Link from 'next/link';
import * as S from './styled';

interface ButtonProps {
  text: string | React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  style?: React.CSSProperties;
  mode?: 'light' | 'dark';
  size?: 'sm' | 'md';
  isLink?: boolean;
  href?: string;
}

const Button = ({
  text,
  onClick,
  disabled,
  type = 'button',
  style,
  mode = 'dark',
  size = 'md',
  isLink = false,
  href,
}: ButtonProps) => {
  if (isLink && href) {
    return (
      <Link
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        style={{ textDecoration: 'none' }}
      >
        <S.Button as='div' $mode={mode} $size={size}>
          {text}
        </S.Button>
      </Link>
    );
  } else {
    return (
      <S.Button
        onClick={onClick}
        type={type}
        disabled={disabled}
        style={style}
        $mode={mode}
        $size={size}
      >
        {text}
      </S.Button>
    );
  }
};

export default Button;
