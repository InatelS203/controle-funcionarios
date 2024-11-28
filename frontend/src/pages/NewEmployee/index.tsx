import { useState } from "react";
import { Button } from "../../components/Form/Button/Button";
import { Input } from "../../components/Form/Input/Input";
import { Container, FormContainer } from "./styles";

export const NewEmployee = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <FormContainer>
        <Input
          label="Nome"
          placeholder="Entre com o nome do novo funcionário"
          id="nome"
          type="nome"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          label="CPF"
          placeholder="Entre com o CPF do novo funcionário"
          id="cpf"
          type="cpf"
          required
          value={cpf}
          onChange={(e) => {
            setCpf(e.target.value);
          }}
        />
        <Input
          label="E-mail"
          placeholder="Entre com o e-mail do novo funcionário"
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
          placeholder="Entre com a senha do novo funcionário"
          id="senha"
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
        <Button text="Concluir cadastro" />
      </FormContainer>
    </Container>
  );
};
