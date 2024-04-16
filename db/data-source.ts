import { DataSource, DataSourceOptions } from 'typeorm';

export const databaseSource: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'appmu',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/**/*.js'],
};

const dataSource = new DataSource(databaseSource);

export default dataSource;
