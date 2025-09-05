import mongoose from "mongoose";

export const ConnectDB = async () => {

    await mongoose.connect('mongodb+srv://joseneyjeanpierre:joseney@cluster2.fgekewe.mongodb.net/truthis-app')
    console.log("DB connected!"); //  this is good 

}

