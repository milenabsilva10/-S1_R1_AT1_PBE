import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes.js'
import categoryRoutes from './routes/category.routes.js'
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(cors());
app.use (express.json())


// http://localhost:3000/categorias
app.use("/produtos", productRoutes);
app.use("/categorias", categoryRoutes );

app.use(errorHandler);

export default app;