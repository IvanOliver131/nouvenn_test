import { createConnection } from 'typeorm';
require('dotenv').config({ path: '.env' })

const config: any = ({
    "type": process.env.TYPEORM_TYPE,
    "host": process.env.TYPEORM_HOST,
    "port": process.env.TYPEORM_PORT,
    "username": process.env.TYPEORM_USERNAME,
    "password": process.env.TYPEORM_PASSWORD,
    "database": process.env.TYPEORM_DATABASE,
    "entities": [
        "src/app/models/*.ts"
    ],
    "migrations": [
        "src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/database/migrations"
    }
})

createConnection(config).then(() => console.log('Sucessfuly connected with database'));
//createConnection().then(() => console.log('Sucessfuly connected with database'));