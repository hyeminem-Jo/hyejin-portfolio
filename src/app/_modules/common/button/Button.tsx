import * as S from './styled';

interface ButtonProps {
  text: string | React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  style?: React.CSSProperties;
  mode?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

const Button = ({
  text,
  onClick,
  disabled,
  type = 'button',
  style,
  mode = 'dark',
  size = 'md',
}: ButtonProps) => {
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
};

export default Button;
