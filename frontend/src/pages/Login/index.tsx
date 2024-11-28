import { useState } from "react";
import { Button } from "../../components/Form/Button/Button";
import { Input } from "../../components/Form/Input/Input";
import { Container, FormContainer, Title } from "./styles";
import { useNavigate } from "react-router";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "funcionario@email") {
      navigate("/employee");
    } else if (email === "gerente@email") {
      navigate("/manager");
    } else {
      alert("email ou senha incorretos!");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <Container>
      <FormContainer onSubmit={handleLogin}>
        <Title>Controle de Funcionários</Title>
        <Input
          label="E-mail"
          placeholder="Entre com seu e-mail"
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          id="senha"
          type="password"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
        <Button text="Entrar" />
      </FormContainer>
    </Container>
  );
};
