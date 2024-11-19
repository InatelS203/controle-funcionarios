# **Sistema de Controle de Escala e Ponto**

Este projeto é um sistema completo para o gerenciamento de escalas de trabalho e registro de ponto de funcionários, projetado para ser flexível, modular e eficiente. Ele oferece uma interface amigável para gerentes e funcionários, permitindo que gerentes criem e gerenciem escalas e funcionários registrem seus pontos de forma prática.

## **Principais Funcionalidades**
- **Gestão de Funcionários**: 
  - Cadastro, atualização e exclusão de funcionários.
  - Associação de funcionários a gerentes responsáveis.
- **Controle de Escala**:
  - Criação e gerenciamento de escalas de trabalho.
  - Flexibilidade para ajustar horários e escalas específicas.
- **Registro de Ponto**:
  - Registro de batidas de ponto com data e hora.
  - Consulta detalhada dos registros de ponto por funcionário.
- **Autenticação e Segurança**:
  - Sistema de login com autenticação segura.
  - Controle de permissões para gerentes e funcionários.

## **Arquitetura**
O sistema segue princípios de design bem definidos para garantir modularidade, escalabilidade e facilidade de manutenção. Ele é dividido em duas partes principais:

### **Back-end**
- Desenvolvido com **FastAPI**, garantindo alta performance e simplicidade no desenvolvimento.
- Banco de dados relacional **PostgreSQL** para armazenamento seguro e eficiente de dados.
- Organização baseada em princípios SOLID, com aplicação de design patterns como **Facade** e **Interface Segregation Principle** para manter o código coeso e encapsulado.

### **Front-end**
- Desenvolvido com **React**, oferecendo uma interface responsiva e intuitiva para gerentes e funcionários.
- Comunicação com o back-end via APIs RESTful.

## **Tecnologias Utilizadas**
- **FastAPI**: Framework para o desenvolvimento do back-end.
- **PostgreSQL**: Banco de dados relacional.
- **React**: Biblioteca para o front-end.
- **Pydantic**: Validação e serialização de dados no back-end.

## **Instalação e Configuração**
1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
