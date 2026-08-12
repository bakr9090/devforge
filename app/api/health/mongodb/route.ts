import { getMongoClient } from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await getMongoClient();
    await client.db("admin").command({ ping: 1 });

    return Response.json({ connected: true });
  } catch (error) {
    console.error("MongoDB health check failed:", error);

    return Response.json(
      { connected: false, error: "Unable to connect to MongoDB." },
      { status: 503 },
    );
  }
}
