import {
  FormInputContainer,
  InputStyle,
  LabelStyle,
} from "./form-input.styles";
const FormInput = ({ name }) => {
  return (
    <FormInputContainer>
      <LabelStyle>{name}</LabelStyle>
      <InputStyle />
    </FormInputContainer>
  );
};
export default FormInput;
