import { createConnection } from "typeorm";

createConnection().then(async () => {
  console.log("Successfully connected with database");
});
