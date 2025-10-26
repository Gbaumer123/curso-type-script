import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página Inicial"
      barraDeFerramentas={
        <BarraDeFerramentas mostrarInputBusca textoBotaoNovo="Adicionar" />
      }
    >
      testando
    </LayoutBaseDePagina>
  );
};
