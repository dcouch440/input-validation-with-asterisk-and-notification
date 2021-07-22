import {
  SubmitButton
} from './styles'

interface Props {
  text: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
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

