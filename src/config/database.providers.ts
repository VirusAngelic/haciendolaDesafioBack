import { Sequelize } from 'sequelize-typescript';
import { PROVIDERS_CONS } from '@repository/cons/providers.cons';
import { Productos } from '@repository/entity/productos.entity';

export const databaseProviders = [
  {
    provide: PROVIDERS_CONS.sequelize,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '4689',
        database: 'tienda',
      });
      sequelize.addModels([Productos]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
