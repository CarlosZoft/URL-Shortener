import {createConnection} from 'typeorm';

try {
    async () => {
        await createConnection();
    }
    console.log('\nConnection with the database done!\n');
} catch (error){
    console.error('Ocurred an error at connection with database');
}