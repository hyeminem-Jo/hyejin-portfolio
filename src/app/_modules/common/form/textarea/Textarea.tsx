import * as S from './styled';

interface TextareaProps {
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ label, name, placeholder, value, rows = 10, onChange }: TextareaProps) => {
  return (
    <S.TextareaWrap>
      {/* {label && <S.Label htmlFor={name}>{label}</S.Label>} */}
      <S.Textarea
        name={name}
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={onChange}
      />
    </S.TextareaWrap>
  );
};

export default Textarea;
