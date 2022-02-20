import mongoose from "mongoose";
import config from "../config"
import log from "../logger"



// let database: Mongoose.Connection;

function connect() {
    const uri = config.dbURI as string;
    console.log("Connecting to ",uri);


    return mongoose
        .connect(uri)
        .then(() => {
            log.info("Database Connected");
        })
        .catch((err) => {
            log.info(err);
            process.exit(1);
        })
    return;

}


export default connect;