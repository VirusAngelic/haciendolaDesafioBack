import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Productos extends Model {
  @Column
  int_idproducto: number;

  @Column
  str_handle: string;

  @Column
  str_title: string;

  @Column
  str_description: string;

  @Column
  str_sku: string;

  @Column
  in_gram: string;

  @Column
  int_stock: string;

  @Column
  int_price: string;

  @Column
  int_compare_price: string;

  @Column
  str_barcode: string;
}
