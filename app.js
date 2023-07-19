

import express from "express";
import sortMobiles from "./database/sortData.js";

const app=express();
app.set('view engine','ejs');


app.get("/", async (req,resp)=>{
    let query=req.query.sort;
    let regex= /ascending/i;
    if(regex.test(query))
    {
        let result = await sortMobiles(query);
        resp.render("table",{result});
    }
    else{
        let result = await sortMobiles(query);
        resp.render("table",{result});
    }
})



app.listen(4500)