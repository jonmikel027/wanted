import mongoose from "mongoose";

async function connectMongo() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexión con MongoDB establecida");
}

export { connectMongo };