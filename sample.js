const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors({
    exposedHeaders: ['x-csrf-token', 'cookie']
}));
app.use(express.json());

app.get('/send_prompt', async (req,res)=>{
    try{
        //if necessary, uncomment and use authorization
        // let username = ""
        // let password = ""
        let payload = {
            "prompt" : "Which KPIs are underperforming for SSD in August 2024?" 
            }
        const response = await axios.post('https://llm-chatbot.cml.apps.cdp-ds-test.aramco.com/get-chat', JSON.stringify(payload), {
            headers: { 
                // 'Authorization': 'Basic ' + btoa(username + ":" + password), 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        res.status(200).json({
            message: 'Request was successful',
            data: response.data
        })
    }catch(error){  
        res.status(500).json({
            message: "Error sending request",
            error: error.message
        })

    }
})
app.listen(8080, ()=>{
    console.log("server listening on port 8080");
})

