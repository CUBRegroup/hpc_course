import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');
// console.log("dbConfig: ", dbConfig);
console.log(process.env.POSTGRES_USER);
console.log(process.env.POSTGRES_PASSWORD);
console.log(process.env.POSTGRES_DB);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.POSTGRES_HOST || dbConfig.host,
  port: parseInt(process.env.PG_PORT) || 5432,
  username: process.env.POSTGRES_USER  || dbConfig.username,
  password: process.env.POSTGRES_PASSWORD  || dbConfig.password,
  database: process.env.PGDATABASE || dbConfig.database,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: dbConfig.synchronize || true,
};
