import express, { type Express } from "express";
import cors from "cors";
import { requestLogger } from "./logger";
import router from "./routes";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.use("/api", router);

export default app;
