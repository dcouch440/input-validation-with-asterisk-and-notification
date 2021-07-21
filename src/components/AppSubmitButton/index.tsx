import {
  SubmitButton
} from "./styles"

interface Props {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AppSubmitButton ({
  onClick,
  text
}: Props
): JSX.Element {
  return (
    <SubmitButton
      onClick={onClick}
    >
      { text }
    </SubmitButton>
  )
}

