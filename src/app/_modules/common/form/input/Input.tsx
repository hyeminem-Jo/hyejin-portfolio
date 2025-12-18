import * as S from './styled';

interface InputProps {
  label?: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'hidden' | 'submit';
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, type, name, placeholder, value, onChange }: InputProps) => {
  return (
    <S.InputWrap>
      {/* {label && type !== 'hidden' && <S.Label htmlFor={name}>{label}</S.Label>} */}
      <S.Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </S.InputWrap>
  );
};

export default Input;
