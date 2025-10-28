import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps {
  //definir as propriedades futuramente
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean; // mostrar ou nao o botao novo
  mostrarBotaoVoltar?: boolean; // mostrar ou nao o botao voltar
  mostrarBotaoApagar?: boolean; // mostrar ou nao o botao apagar
  mostrarBotaoSalvar?: boolean; // mostrar ou nao o botao salvar
  mostrarBotaoSalvarEFechar?: boolean; // mostrar ou nao o botao salvar e fechar

  aoClicarEmNovo?: () => void; //função chamada quando clica no botao
  aoClicarEmVoltar?: () => void; //função chamada quando clica no botao
  aoClicarEmApagar?: () => void; //função chamada quando clica no botao
  aoClicarEmSalvar?: () => void; //função chamada quando clica no botao
  aoClicarEmSalvarEFechar?: () => void; //função chamada quando clica no botao
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = "Novo",

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
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
      {mostrarBotaoSalvar && (
        <Button
          color="primary" // cor do botao
          disableElevation // remove a sombra do botao
          variant="contained" // tipo do botao
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>} // icone do botao
        >
          Salvar
        </Button>
      )}

      {mostrarBotaoSalvarEFechar && (
        <Button
          color="primary" // cor do botao
          disableElevation // remove a sombra do botao
          variant="outlined" // tipo do botao
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Icon>save</Icon>} // icone do botao
        >
          Salvar e voltar
        </Button>
      )}

      {mostrarBotaoApagar && (
        <Button
          color="primary" // cor do botao
          disableElevation // remove a sombra do botao
          variant="outlined" // tipo do botao
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>} // icone do botao
        >
          Apagar
        </Button>
      )}

      {mostrarBotaoNovo && (
        <Button
          color="primary" // cor do botao
          disableElevation // remove a sombra do botao
          variant="outlined" // tipo do botao
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>} // icone do botao
        >
          {textoBotaoNovo}
        </Button>
      )}

      <Divider variant="middle" orientation="vertical" />

      {mostrarBotaoVoltar && (
        <Button
          color="primary" // cor do botao
          disableElevation // remove a sombra do botao
          variant="outlined" // tipo do botao
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>} // icone do botao
        >
          Voltar
        </Button>
      )}
    </Box>
  );
};
