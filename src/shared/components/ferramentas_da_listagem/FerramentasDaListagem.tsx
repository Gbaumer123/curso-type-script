import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

import { Environment } from "../../environment";

interface IFerramentasDaListagemProps {
  //definir as propriedades futuramente
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;

  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}
export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = "",
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  aoClicarEmNovo,
  textoBotaoNovo = "Novo",
  mostrarBotaoNovo = true,
}) => {
  const theme = useTheme();

  return (
    <Box
      gap={1} //distancia ente os elementos
      marginX={1} //é a margem da beirada (vai distanciar da lateral)
      padding={1} //é a margem interna (distancia do conteudo para a borda)
      paddingX={2} //é a margem interna horizontal
      display="flex" // para ficar em linha
      alignItems="center" //alinha os itens no centro verticalmente
      height={theme.spacing(5)} //altura da barra de ferramentas
      component={Paper} //   para colocar a barra com o efeito de papel
    >
      {mostrarInputBusca && ( //se for true para mostrar o input de busca
        <TextField
          size="small" //tamanho pequeno
          value={textoDaBusca} //valor do texto
          placeholder={Environment.INPUT_DE_BUSCA} //texto que aparece quando nao tem nada escrito
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)} //função que é chamada quando o texto muda
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            color="primary" // cor do botao
            disableElevation // remove a sombra do botao
            variant="contained" // tipo do botao
            onClick={aoClicarEmNovo} //função chamada quando clica no botao
            endIcon={<Icon>add</Icon>} // icone do botao
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};
