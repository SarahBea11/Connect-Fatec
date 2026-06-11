# 📱 FatecConnect

O **FatecConnect** é um aplicativo mobile desenvolvido com **React Native** e **Expo**. Ele foi projetado para integrar consumo de APIs externas, navegação fluida entre telas e gerenciamento de estado estruturado, oferecendo uma interface limpa e intuitiva para o usuário.

---

## 🎯 Proposta e Escopo

O aplicativo tem como objetivo fornecer uma experiência diária de reflexão e registro pessoal. O **FatecConnect** resolve o problema de usuários que buscam pílulas diárias de motivação ou sabedoria, permitindo-lhes não apenas visualizar conselhos aleatórios traduzidos, mas também registrar suas próprias notas, reflexões ou tarefas do dia. 

### **Público-Alvo**
- Estudantes e entusiastas de tecnologia.
- Usuários que buscam uma ferramenta simples para registrar pensamentos diários e obter insights/conselhos rápidos.

---

## ✨ Funcionalidades Principais

- **Consumo de API Externa**: Busca dinâmica de conselhos utilizando `axios`.
- **Tradução Automática**: Integração com serviço de tradução para exibir os conselhos em português.
- **Tratamento de Estados**: Indicadores visuais de carregamento (*loading*) e tratamento amigável de erros de rede.
- **Registro de Notas Locais**: Campo de entrada interativo para salvar anotações ou reflexões pessoais do dia.
- **Gerenciamento de Estado Global**: Uso de **Context API** combinado com o hook `useReducer` para controle centralizado dos dados.
- **Navegação Dinâmica**: Fluxo de navegação estruturado que envia parâmetros da tela principal para a tela de detalhes (`DetailScreen`).
- **Validação de Fluxo**: Botões de ação contextualizados (ex: o botão *Ver Detalhes* é habilitado apenas após a inserção de texto).

---

## 🔌 APIs Utilizadas

O aplicativo consome as seguintes APIs públicas:

1. **Advice Slip API**
   - **Descrição**: Fornece conselhos aleatórios em inglês.
   - **Documentação**: [Advice Slip API Documentation](https://api.adviceslip.com)
2. **MyMemory Translation API**
   - **Descrição**: Utilizada para traduzir em tempo real os conselhos obtidos para o português.
   - **Documentação**: [MyMemory API Spec & Documentation](https://mymemory.translated.net/doc/spec.php)

---

## 🚀 Instruções de Execução

Siga os passos abaixo para clonar, instalar as dependências e rodar o projeto em sua máquina local:

### **Pré-requisitos**
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Git

---

### **Passo a Passo no Terminal**

1. **Clonar o Repositório**
   ```bash
   git clone https://github.com/SarahBea11/Connect-Fatec.git
   ```

2. **Acessar a Pasta do Projeto**
   ```bash
   cd Connect-Fatec
   ```

3. **Instalar as Dependências**
   ```bash
   npm install
   ```

4. **Iniciar o Servidor de Desenvolvimento (Expo)**
   ```bash
   npx expo start
   ```

5. **Visualizar o Aplicativo**
   - **No celular**: Instale o aplicativo **Expo Go** (disponível na Google Play Store ou App Store) e leia o QR Code gerado no terminal.
   - **No emulador**: Pressione `a` para abrir no emulador Android ou `i` para abrir no simulador iOS (requer setup prévio do Android Studio ou Xcode).

---

## 👥 Feito por

- [SarahBea11](https://github.com/SarahBea11)
- [MathzLabs](https://github.com/MathzLabs)

