import React from "react";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";

import { Container, Banner, LoginUser } from "./styles";
import manaus_logo from "../../assets/img_logo_manaus.png";
import img_card from "../../assets/img_login.png";
import { login } from "../../services/auth";
import api from "../../services/api";

const style = {
  fontSize: 20
};

const Login = () => {
  const [values, setValues] = React.useState({
    email:"",
    senha: "",
    showPassword: false,
    error: "",
  });

  const history = useHistory();

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  function handleError (error) {
    console.log(error);
    // eslint-disable-next-line
    if(error.status == 422){
      setValues({ ...values, error: error.data.errors[0]});
    }
    // eslint-disable-next-line
    if(error.status == 401){
      setValues({ ...values, error: error.data.message });
    }
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const { email, senha } = values;
    if (!email || !senha) {
      setValues({ ...values, error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/auth/login", { email, senha });
        login(response.data.data.access_token);

        if(response.data.data) {
          localStorage.setItem('@mmh/partner_id', response.data.data.parceiro_id)
          localStorage.setItem('@mmh/perfis', response.data.data.perfis.join(','))
        }

        history.push("/dashboard");
      } catch (error) {
        handleError(error.response);
      }
    }
  };

  return (
    <Container>
      <LoginUser>
        <img
          src={manaus_logo}
          className="logo_manaus"
          alt="Manaus mais Humana"
        />
        <form >
          <h1>Acesse sua conta</h1>
          {values.error && <p>{values.error}</p>}
          <FormControl>
            <InputLabel htmlFor="login" style={style}>
              Digite seu e-mail
            </InputLabel>
            <Input
              placeholder="Ex: nome@exemplo.com"
              value={values.email}
              onChange={handleChange("email")}
              style={style}
              id="login"
              type="email"
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="standard-adornment-password" style={style}>
              Digite sua senha
            </InputLabel>
            <Input
              style={style}
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.senha}
              onChange={handleChange("senha")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Link className="forpass" to="/forgot_password">
              Esqueci minha senha
            </Link>
          </FormControl>

          <Button
            type="submit"
            className="button"
            variant="contained"
            color="primary"
            onClick={handleSignIn}
          >
            Entrar
          </Button>
        </form>
      </LoginUser>
      <Banner>
        <img src={img_card} alt="Banner" className="banner" />
      </Banner>
    </Container>
  );
};

export default Login;
