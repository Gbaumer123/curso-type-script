import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Rota principal que renderiza o conteúdo da página inicial */}
            <Route path="/pagina-inicial" element={<p>Página Inicial</p>} /> 

            {/* Redireciona qualquer rota não reconhecida para a página inicial */}
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}
