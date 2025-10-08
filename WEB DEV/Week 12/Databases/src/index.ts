import { Client } from 'pg';

// PostgreSQL connection configuration
const client = new Client({
  connectionString: 'postgres://user:mysecretpassword@localhost:5432/postgres', // Ensure this is correct
});

async function createUserTable(username: string, password: string, email: string) {
  try {
    // Connect to the database
    await client.connect();
    
    //sql injection injecting some offensive thing to the database query 
    
    const result = await client.query(`
      INSERT INTO users (username, password, email)
      VALUES ($1, $2, $3)
    `, [username, password, email]);

    console.log('User created successfully:', result.rows);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    // Always close the connection to avoid leaks
    await client.end();
  }
}

// Call the function with data to insert
createUserTable("user23", "123", "harkirat@gmail.com");
