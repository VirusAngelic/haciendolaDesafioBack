import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { productosProviders } from '@repository/providers/productos.providers';

@Module({
  exports: [],
  controllers: [ProductsController],
  providers: [ProductsService, ...productosProviders],
})
export class ProductsModule {}
