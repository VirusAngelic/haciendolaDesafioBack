import { Column, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: false })
export class Productos extends Model {
  @Column
  str_handle: string;

  @Column
  str_title: string;

  @Column
  str_description: string;

  @Column
  str_sku: string;

  @Column
  int_grams: string;

  @Column
  int_stock: string;

  @Column
  int_price: string;

  @Column
  int_compare_price: string;

  @Column
  str_barcode: string;
}
