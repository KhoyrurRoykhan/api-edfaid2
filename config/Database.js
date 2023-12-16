import { Sequelize } from "sequelize";
//config
const Database = new Sequelize('b2iobim6wv0db1b8vdtp','ualuujfll9mzkrde','R20jh72l4AxRrhCnuoxv',{
    host: "b2iobim6wv0db1b8vdtp-mysql.services.clever-cloud.com",
    dialect: "mysql"
});

export default Database;
