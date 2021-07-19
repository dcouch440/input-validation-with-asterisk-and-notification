import {
  SubmitButton
} from "./styles"

export default function AppSubmitButton ({ onClick, text }) {
  return (
    <SubmitButton
      onClick={onClick}
    >
      { text }
    </SubmitButton>
  )
}
