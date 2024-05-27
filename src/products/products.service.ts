import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS_CONS } from '@repository/cons/providers.cons';
import { Productos } from '@repository/entity/productos.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PROVIDERS_CONS.productos)
    private productosRepository: typeof Productos,
  ) {}

  async allProducts(): Promise<Productos[]> {
    return this.productosRepository.findAll<Productos>();
  }
}
