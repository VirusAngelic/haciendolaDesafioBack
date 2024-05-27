import { Productos } from '@repository/entity/productos.entity';
import { PROVIDERS_CONS } from '@repository/cons/providers.cons';

export const productosProviders = [
  {
    provide: PROVIDERS_CONS.productos,
    useValue: Productos,
  },
];
