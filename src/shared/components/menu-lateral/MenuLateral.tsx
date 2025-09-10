import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";

import { useDrawerContext } from "../../contexts";

interface MenuLateralProps {
  children?: React.ReactNode;
}

export const MenuLateral: React.FC<MenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  {
    /* down informa quando a tela é menor que o valor que a gente passar */
  }
  {
    /* keys indica todos os breakpoints disponiveis */
  }
  {
    /* not faz o inverso do que eu pedi */
  }
  {
    /* only é o contrário do not quando a tela estiver em sm retorna true mas quando é diferente retona falso */
  }
  {
    /* no up se colocarmos sm e sempre que a tela estiver acima do sm (md ..) retorna true */
  }

  const smDown = useMediaQuery(
    theme.breakpoints.down("sm")
  ); /* Se a tela estiver abaixo de sm retorna true e altera meu drawer */

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="/images/editado.png"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
