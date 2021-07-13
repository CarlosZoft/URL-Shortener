const production = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: false,
  synchronize: true,
  entities: ['dist/src/models /**/*.js', 'dist/src/app/dto /**/*.js'
  ],
  migrations: ['dist/src/database/migrations /**/*.js'
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/database/entities',
  },
};
const development = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: true,
  synchronize: true,
  entities: ['src/database/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/database/entities',
  },
};

let config;
switch (process.env.NODE_ENV) {
  case 'production': {
    config = production;
    break;
  }
  default: {
    config = development;
    break;
  }
}

module.exports = config;