const devEnviroment = {
   type: 'postgres',
   host: process.env.DATABASE_HOST,
   port: process.env.DATABASE_PORT,
   username: process.env.DATABASE_USER,
   password: process.env.DATABASE_PASSWORD,
   database: process.env.DATABASE_NAME,
   logging: false,
   entities: ['src/database/entities/*.ts'],
   migrations: ['src/database/migrations/*.ts'],
   cli: {
     migrationsDir: 'src/database/migrations',
     entitiesDir: 'src/database/entities',
   },
 };