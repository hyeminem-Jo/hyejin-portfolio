import * as S from './styled';

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  style?: React.CSSProperties;
  mode?: 'light' | 'dark';
}

const Button = ({
  text,
  onClick,
  disabled,
  type = 'button',
  style,
  mode = 'dark',
}: ButtonProps) => {
  return (
    <S.Button onClick={onClick} type={type} disabled={disabled} style={style} $mode={mode}>
      {text}
    </S.Button>
  );
};

export default Button;
