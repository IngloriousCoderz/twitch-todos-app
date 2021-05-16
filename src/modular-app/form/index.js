import FormComponent from "./form";

import { useForm } from "./use-form";

export default function Form({ onSubmit: externalOnSubmit }) {
  const { text, onChange, onSubmit } = useForm(externalOnSubmit);

  return <FormComponent text={text} onChange={onChange} onSubmit={onSubmit} />;
}
