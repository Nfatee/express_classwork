const express = require("express"); 
 const router = express.Router();
 const users = [
    {
        name: "fatima",
        id: "5678"
    },
    {
        name: "john",
        id: "4567"
    },
 ]; 
    router.patch("/users/:id", (req, res) => { 
    const user = users.find(val => val.id === Number(req.params.id)); user.name = req.body.name; 
    return res.json({ message: "Updated" }); }); 
  
    router.delete("/users/:id", (req, res) => { 
    const userIndex = users.findIndex(val => val.id === Number(req.params.id)); users.splice(userIndex, 1);
     return res.json({ message: "Deleted" }); }); 
    
    module.exports = router;
    