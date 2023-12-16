import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';
//config
const Database = new Sequelize('b2iobim6wv0db1b8vdtp','ualuujfll9mzkrde','R20jh72l4AxRrhCnuoxv',{
    host: "b2iobim6wv0db1b8vdtp-mysql.services.clever-cloud.com",
    dialect: "mysql",
    dialectModule: mysql2,
});

export default Database;
