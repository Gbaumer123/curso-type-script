import { Box } from "@mui/system";

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode;
  titulo: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  titulo,
}) => {
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box>{titulo}</Box>

      <Box>Barra de Ferramentas</Box>

      <Box>{children}</Box>
    </Box>
  );
};
