const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const org_metadata = require('./org_metadata.json');
const report_metadata = require('./report_metadata.json');
const kpi_list = require('./kpi_metadata.json');
const https = require('https');
const endpoint1 = require('./endpoint1.json');
const endpoint2 = require('./endpoint2.json');
const endpoint3 = require('./endpoint3.json');
const endpoint4 = require('./endpoint4.json');
const endpoint12 = require('./endpoint1.2.json');
const endpoint13 = require('./endpoint1.3.json');
const qtr_endpoint = require('./qtr_endpoint.json');
const user_details = require('./user_details.json');
const insights_json = require('./insightsJson.json');
const agent = new https.Agent({
    rejectUnauthorized: true
})
app.use(cors({
    origin: '*',
  methods: ['GET','POST','OPTIONS'],
    exposedHeaders: ['x-csrf-token', 'cookie']
}));
app.options('*', cors());

app.use(express.json());

app.get('/get_csrf_token', async (req,res)=>{
    try{
        res.send({"csrf": "sample-csrf-token", "cookies": "sample-cookies"});
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})

app.get('/get_kpi_list', async (req,res)=>{
    try{
        res.send(kpi_list);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})
app.get('/get_org_hierarchy', async (req,res)=>{
    try{
        res.send(org_metadata);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})
app.get('/get_enduser_hierarchy', async (req,res)=>{
    try{
        res.send(org_metadata);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})

app.get('/endpoint1', async (req,res)=>{
    try{
        // const regex = /\bKT\w*/g;
        // const matches = req.query.filter.match(regex);
        // const count = matches ? matches.length : 0;
        // let sample_response = endpoint1;
        // for(var i=0; i<count-1; i++){
        //     count!=1 && sample_response.d.results.push(endpoint1.d.results[0])
        // }
        // res.send(sample_response);
        // setTimeout(()=>{
        //     res.send(endpoint1)
        // }, 1000)
        console.log('intoendpoint1')
        res.send(endpoint1)
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})
app.get('/getAiInshigts', async(req,res)=>{
    try{
        res.send(insights_json);    
    }catch(error){
        console.log(error)
        res.status(500).json({message:error})
    }
})
app.get('/qtr_endpoint', async (req,res)=>{
    try{
        // const regex = /\bKT\w*/g;
        // const matches = req.query.filter.match(regex);
        // const count = matches ? matches.length : 0;
        // let sample_response = endpoint1;
        // for(var i=0; i<count-1; i++){
        //     count!=1 && sample_response.d.results.push(endpoint1.d.results[0])
        // }
        // res.send(sample_response);
        res.send(qtr_endpoint)
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})

app.get('/endpoint1.2', async (req,res)=>{
    try{
        // const regex = /\bKT\w*/g;
        // const matches = req.query.filter.match(regex);
        // const count = matches ? matches.length : 0;
        // let sample_response = endpoint1;
        // for(var i=0; i<count-1; i++){
        //     count!=1 && sample_response.d.results.push(endpoint1.d.results[0])
        // }
        // res.send(sample_response);
        res.send(endpoint12)
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})

app.get('/endpoint1.3', async (req,res)=>{
    try{
        // const regex = /\bKT\w*/g;
        // const matches = req.query.filter.match(regex);
        // const count = matches ? matches.length : 0;
        // let sample_response = endpoint1;
        // for(var i=0; i<count-1; i++){
        //     count!=1 && sample_response.d.results.push(endpoint1.d.results[0])
        // }
        // res.send(sample_response);
        res.send(endpoint13)
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})


app.get('/endpoint2', async (req,res)=>{
    try{
        res.send(endpoint2);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})

app.get('/endpoint3', async (req,res)=>{
    try{
        res.send(endpoint3);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})

app.get('/endpoint4', async (req,res)=>{
    try{
        console.log("res_sample_request", req.query)
        res.send(endpoint4);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})

app.get('/org-metadata', async (req,res)=>{
    try{
        res.send(report_metadata);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})

app.post('/store-report', async (req,res)=>{
    try{
        console.log("payload is",  req.headers["cookie"]);
        let username = "MANOHAMX"
        let password = "Kaartech@@123"
        
        const response = await axios.post('https://dvb.aramco.com.sa:44303/sap/opu/odata/sap/ZKT_VISUALIZATION_SRV/KPI_META_DATASet', JSON.stringify(req.body), {
            headers: { 
                'Authorization': 'Basic ' + btoa(username + ":" + password), 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-csrf-token': req.headers["x-csrf-token"],
                'Cookie': req.headers["cookie"]
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
app.get('/get_user_details', async (req,res)=>{
    try{
        res.send(user_details);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error})
    }
})
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0',()=>{
    console.log("server listening on port 8080");
})

