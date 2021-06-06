export default function ShowText(props: ShowTextProps) {
  return <div>{props.text}</div>;
}

interface ShowTextProps {
  text: string;
}

ShowText.defaultProps = {
    text: 'Default value DefaultProps'
};