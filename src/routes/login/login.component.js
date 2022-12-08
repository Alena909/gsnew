import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LoginContainer, FormContainer } from "./login.styles";
import FormInput from "../../components/form-input/form-input.component";

const Login = () => {
  return (
    <LoginContainer>
      <h1>Login</h1>
      <FormContainer>
        <TextField name="Username" label="Username" variant="standard" />
        <TextField name="Password" label="Password" variant="standard" />
        <Button variant="contained" style={{ marginTop: "20px" }}>
          Login
        </Button>
      </FormContainer>
    </LoginContainer>
  );
};
export default Login;
