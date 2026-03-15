import { type Request, type Response, type NextFunction } from "express";

function timestamp(): string {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const start = Date.now();

  console.log(`${timestamp()} [express] Request: ${req.method} ${req.path}`);

  const originalJson = res.json.bind(res);
  res.json = (body: unknown) => {
    const duration = Date.now() - start;
    const snippet = JSON.stringify(body).slice(0, 80);
    console.log(
      `${timestamp()} [express] ${req.method} ${req.path} ${res.statusCode} in ${duration}ms :: ${snippet}`,
    );
    return originalJson(body);
  };

  next();
}
