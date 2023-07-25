const mongoose = require('mongoose');
const mongo_url = 'mongodb+srv://firstchoice:kshitij2006@cluster0.kshxczp.mongodb.net/firstchoiceproject?retryWrites=true&w=majority';
 
module.exports = async function (callback) {
  try {
      await mongoose.connect(mongo_url, { useNewUrlParser: true });
      console.log("connected to mongo");

      const foodCollection = await mongoose.connection.db.collection("project");
      const data = await foodCollection.find({}).toArray();
      
      const categoryCollection = await mongoose.connection.db.collection("food_category");
      const Catdata = await categoryCollection.find({}).toArray();

      callback(null, data, Catdata);
  } catch (error) {
      console.error("An error occurred:", error);
      callback(error);
  }
};


