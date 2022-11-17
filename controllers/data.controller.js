const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

module.exports.createData = async (req, res, next) => {
    try {
        const db = getDb();
        const newItem = req.body;
        res.send({result: 'data receive'})
        const result = await db.collection("chartData").insertOne(newItem);
        console.log('data post database', result.insertedId)

    } catch (error) {
        next(error);
    }
}

module.exports.getAllData = async (req, res, next) => {
    try {
        const db = getDb();
        const query = {};
        const cursor =await db.collection("chartData").find(query);
        const services = await cursor.toArray();
        res.status(200).json({    
            success: true,
            data: services
        })

    } catch (error) {
        next(error);
    }
}

