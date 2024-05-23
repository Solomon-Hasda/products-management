import app from "./app";
import config from "./config";
import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB! atlas"
      );
    });
  } catch (err) {
    console.log(err);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();
