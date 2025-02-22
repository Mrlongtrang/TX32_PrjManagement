import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }

/** 
 * Cached connection for MongoDB.
 */
let cachedConnection: Mongoose | undefined;
let cachedConnectionPromise: Promise<Mongoose> | undefined;

export default async function dbConnect(): Promise<Mongoose> {
  return cachedConnection ?? (cachedConnectionPromise ??= 
    mongoose.connect(MONGODB_URI).then(instance => {
      cachedConnection = instance;
      return instance;
    }));
}
