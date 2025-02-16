const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/data", async (req, res) => {
    try {
        const response = await axios.get("https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
