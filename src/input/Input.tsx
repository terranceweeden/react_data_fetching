type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ onChange, value }: InputProps) {
  return <input type="text" value={value} onChange={onChange} />;
}
