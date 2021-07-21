import React from "react"
import {
  SubmitButton
} from "./styles"

interface Props {
  text: string;
  onClick: () => void;
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

