import dbConnector from "./mobileConnector.js";


export default async function sortMobiles(value)
{
    let data = await dbConnector();
    if(value=="ascending")
    {
        let result = await data.aggregate([
            {$sort: {"price":1}},
            {
                $project:{
                    "name":1,
                    "price":1,
                    "brand":1,
                    "os":1
                }
            }
        ])
        return result;
    }
    else{
        let result = await data.aggregate([
            {$sort: {"price":-1}},
            {
                $project:{
                    "name":1,
                    "price":1,
                    "brand":1,
                    "os":1
                }
            }
        ])
        return result;
    }
}