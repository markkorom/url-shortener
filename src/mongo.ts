const dbName = process.env.MONGO_DATABASE;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

export const mongoUri = `mongodb+srv://${username}:${password}@cluster0.ebdso.mongodb.net/${dbName}?retryWrites=true&w=majority`;
