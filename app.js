import express from 'express';
import ProdutosRoutes from './routes/ProdutosRoutes.js'
import categoriasRoutes from './routes/categoriasRoutes.js'

const app = express();
app.use (express.json())


// http://localhost:3000/categorias
app.use("/produtos", ProdutosRoutes);
app.use("/categorias", categoriasRoutes);

export default app;