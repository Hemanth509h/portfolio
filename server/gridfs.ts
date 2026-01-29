import { GridFSBucket, ObjectId } from "mongodb";
import { client, getDb } from "./db";
import { Readable } from "stream";

let bucket: GridFSBucket;

export async function getGridFSBucket(): Promise<GridFSBucket> {
  if (bucket) return bucket;
  const db = await getDb();
  bucket = new GridFSBucket(db, { bucketName: "uploads" });
  return bucket;
}

export async function uploadFileToGridFS(
  buffer: Buffer,
  filename: string,
  contentType: string
): Promise<string> {
  const bucket = await getGridFSBucket();
  const uniqueFilename = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${filename}`;
  
  const uploadStream = bucket.openUploadStream(uniqueFilename, {
    metadata: { originalName: filename, contentType }
  });
  
  const readable = Readable.from(buffer);
  
  return new Promise((resolve, reject) => {
    readable.pipe(uploadStream)
      .on("error", reject)
      .on("finish", () => {
        resolve(uploadStream.id.toString());
      });
  });
}

export async function getFileFromGridFS(fileId: string): Promise<{
  stream: NodeJS.ReadableStream;
  contentType: string;
  filename: string;
} | null> {
  const bucket = await getGridFSBucket();
  
  try {
    const objectId = new ObjectId(fileId);
    const files = await bucket.find({ _id: objectId }).toArray();
    
    if (files.length === 0) return null;
    
    const file = files[0];
    const stream = bucket.openDownloadStream(objectId);
    
    return {
      stream,
      contentType: file.metadata?.contentType || "application/octet-stream",
      filename: file.filename
    };
  } catch (error) {
    return null;
  }
}

export async function deleteFileFromGridFS(fileId: string): Promise<boolean> {
  const bucket = await getGridFSBucket();
  
  try {
    const objectId = new ObjectId(fileId);
    await bucket.delete(objectId);
    return true;
  } catch (error) {
    return false;
  }
}
