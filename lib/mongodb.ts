import "server-only";

import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | undefined;

function createClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "MONGODB_URI is not set. Add it to .env.local before connecting to MongoDB.",
    );
  }

  return new MongoClient(uri).connect();
}

export function getMongoClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    globalThis._mongoClientPromise ??= createClientPromise();
    return globalThis._mongoClientPromise;
  }

  clientPromise ??= createClientPromise();
  return clientPromise;
}
