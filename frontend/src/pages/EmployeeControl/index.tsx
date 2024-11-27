import { CheckInModal } from "../../components/CheckInModal";
import {
  BtnContainer,
  Container,
  InfoContainer,
  Subtitle,
  Text,
  Title,
} from "./styles";

export const EmployeeControl = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>Bem vindo, Gabriel Alves!</Title>
        <Subtitle>Suas informações:</Subtitle>

        <Text>
          <b>E-mail:</b> alves@email{" "}
        </Text>
        <Text>
          <b>genero:</b> masculino{" "}
        </Text>
        <Text>
          <b>Endereço:</b> Casa do Alves, 123 - Santa Rita do Sapucaí{" "}
        </Text>
        <Text>
          <b>CPF:</b> 123987332
        </Text>
        <Text>
          <b>Telefone:</b> (35) 99999-9999{" "}
        </Text>
        <BtnContainer>
          <CheckInModal />
        </BtnContainer>
      </InfoContainer>
    </Container>
  );
};
