import { Controller, Get } from '@nestjs/common';
import { Productos } from '@repository/entity/productos.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): Promise<Productos[]> {
    return this.productsService.allProducts();
  }
}
