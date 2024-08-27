import { styled } from "@mui/material";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { useFormik } from "formik";

export const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const { handleSubmit, values, handleChange } = formik;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Имя:</label>
        <Input value={values.name} name="name" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="">Почта:</label>
        <Input value={values.email} name="email" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="">Пароль:</label>
        <Input
          value={values.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Подтверждение пароля:</label>
        <Input
          value={values.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
      </div>

      <StyledButton type="submit">Зарегистрироваться</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled("form")({
  width: "408px",
  margin: "0  auto",
});

const StyledButton = styled(Button)({
  width: "100%",
});
