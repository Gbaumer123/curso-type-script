import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();

    return (
        <Routes>
            {/* Rota principal que renderiza o conteúdo da página inicial */}
              <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleTheme}>Toggle theme</Button>} />

            {/* Redireciona qualquer rota não reconhecida para a página inicial */}
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}
