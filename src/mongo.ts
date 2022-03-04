// TODO: I've never store sensitive data this way for sure, it is just for demo purposes.
const dbName = process.env.MONGO_DATABASE || 'tier';
const username = process.env.MONGO_USERNAME || 'tier';
const password = process.env.MONGO_PASSWORD || 'url-shortener';

export const mongoUri = `mongodb+srv://${username}:${password}@cluster0.ebdso.mongodb.net/${dbName}?retryWrites=true&w=majority`;
