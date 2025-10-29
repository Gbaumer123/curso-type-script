import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface IFerramentasDeDetalheProps {
  //definir as propriedades futuramente
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean; // mostrar ou nao o botao novo
  mostrarBotaoVoltar?: boolean; // mostrar ou nao o botao voltar
  mostrarBotaoApagar?: boolean; // mostrar ou nao o botao apagar
  mostrarBotaoSalvar?: boolean; // mostrar ou nao o botao salvar
  mostrarBotaoSalvarEFechar?: boolean; // mostrar ou nao o botao salvar e fechar

  mostrarBotaoSalvarCarregando?: boolean; // mostrar ou nao o botao salvar carregando
  mostrarBotaoNovoCarregando?: boolean; // mostrar ou nao o botao novo carregando
  mostrarBotaoVoltarCarregando?: boolean; // mostrar ou nao o botao voltar carregando
  mostrarBotaoApagarCarregando?: boolean; // mostrar ou nao o botao apagar carregando
  mostrarBotaoSalvarEFecharCarregando?: boolean; // mostrar ou nao o botao salvar e fechar carregando

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

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

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
      {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (
        <Button
          color="primary" // cor do botao
          disableElevation // remove a sombra do botao
          variant="contained" // tipo do botao
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>} // icone do botao
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Salvar
          </Typography>
        </Button>
      )}

      {mostrarBotaoSalvarCarregando && <Skeleton width={110} height={60} />}

      {mostrarBotaoSalvarEFechar &&
        !mostrarBotaoSalvarEFecharCarregando &&
        !smDown &&
        !mdDown && (
          <Button
            color="primary" // cor do botao
            disableElevation // remove a sombra do botao
            variant="outlined" // tipo do botao
            onClick={aoClicarEmSalvarEFechar}
            startIcon={<Icon>save</Icon>} // icone do botao
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              Salvar e voltar
            </Typography>
          </Button>
        )}
      {mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown && (
        <Skeleton width={180} height={60} />
      )}

      {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
        <Button
          color="primary" // cor do botao
          disableElevation // remove a sombra do botao
          variant="outlined" // tipo do botao
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>} // icone do botao
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Apagar
          </Typography>
        </Button>
      )}

      {mostrarBotaoApagarCarregando && <Skeleton width={110} height={60} />}

      {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown && (
        <Button
          color="primary" // cor do botao
          disableElevation // remove a sombra do botao
          variant="outlined" // tipo do botao
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>} // icone do botao
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {textoBotaoNovo}
          </Typography>
        </Button>
      )}
      {mostrarBotaoNovoCarregando && !smDown && (
        <Skeleton width={110} height={60} />
      )}

      {mostrarBotaoVoltar &&
        (mostrarBotaoNovo ||
          mostrarBotaoApagar ||
          mostrarBotaoSalvar ||
          mostrarBotaoSalvarEFechar) && (
          <Divider variant="middle" orientation="vertical" />
        )}
      {mostrarBotaoVoltar && (
        <Button
          color="primary" // cor do botao
          disableElevation // remove a sombra do botao
          variant="outlined" // tipo do botao
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>} // icone do botao
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Voltar
          </Typography>
        </Button>
      )}
      {mostrarBotaoVoltarCarregando && <Skeleton width={110} height={60} />}
    </Box>
  );
};
