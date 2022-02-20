import express, { Application, Request, Response, NextFunction} from "express";
import config from "./config";
import log from "./logger"
import connect from "./database/connect"

const host = config.host;
const port = config.port;
const mongodbURI = config.dbURI;


const app: Application = express();
app.get('/',(req: Request,res: Response, next: NextFunction) => {
    res.send("Hello World!! ");
})

app.listen(port, () => {
    // log.info("Server Running... !!! ");
    connect();
});
