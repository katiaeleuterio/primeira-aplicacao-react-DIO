import "./App.css";
import { Flex, Text, Input } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [contador, updateContador] = useState(0);

  function adicionarMaisUmNoContador() {
    updateContador(contador + 1);
  }

  return (
    <Flex
      width={"100vw"}
      align={"center"}
      height={"100vh"}
      background={"black"}
      direction={"column"}
    >
      <Text color={"white"}>Olá Mundo {contador}</Text>
      <button onClick={adicionarMaisUmNoContador}>
        Adicione mais um ao contador
      </button>
      <Input focusBorderColor="pink.400" placeholder="Digite seu email"></Input>
      <Input focusBorderColor="pink.400" placeholder="Digite sua senha"></Input>
    </Flex>
  );
}

export default App;
