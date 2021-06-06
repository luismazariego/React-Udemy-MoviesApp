export default function TextForm(props: formTextProps) {
  return (
    <input
      type='text'
      onKeyUp={(e) => props.handleKeyUp(e.currentTarget.value)}
    />
  );
}

interface formTextProps {
  handleKeyUp(text: string): void;
}
