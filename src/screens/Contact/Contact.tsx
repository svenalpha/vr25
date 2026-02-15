import { useParams, useLocation } from 'react-router-dom';
import useHelmet from '@hooks/useHelmet';
import React, { useEffect, useState } from 'react';
import axios from "axios"


const Contact: React.FC<ContactProps> = (props) => {
  let location =useLocation();
  console.log(" location = ", location );
  const path  = location.pathname; const x1 = path.length; const x2 = path.lastIndexOf("/"); const fileParam = path.slice(x2+1,x1);
  console.log(" fileParam = ",fileParam);
  
  console.log(" location.state?.var1    (deferred) = ", location.state?.var1 );
  const data1 = location.state?.data1; 
  console.log("location.state.from = ", location.state?.from);
  console.log("inside Contact" );
  const pr= props;
  console.log("pr = ",props);
  const str2= props.title;
  console.log("str2 aka props.title = ",str2);
  const string2 = props.string2;
  console.log("string2 = ",string2);

  const var1 = location.state?.var1; 
  console.log("location.state.var1 = ", location.state?.var1);
  

    const [legend, setLegend] = useState("  here is useState original legend");
    const [legend2, setLegend2] = useState("  here is useState original legend pre fetch ");
    const [data, setData] = useState();
    const [datax, setDatax] = useState([]);
    //const [var11,setVar11] =useState(location.state?.var1);
    const url ="";
    const helmet = useHelmet()

    useEffect(() => {
        helmet.setTitle("Contact")
    }, [helmet])

    useEffect(() => {
        axios.get('/api/proxy1').then((response) => {         
        //console.log(" useEffect, response data = ",response.data)    
         setLegend(response.data);
                                                    }
                                      )        
        axios.get('/rrr/doGetSecondExport').then((response) => {    // "/api"     
               //console.log(" useEffect, response data = ",response.data)    
               setLegend2(response.data);
                                                               }
                 )                                         
                                        

                    }, [])     // end useEffect
//function async getDataFromMongo() 
const getDataFromMongo = async () => 
{  //axios.get(url)
   //   .then((res) => setData(res.data))
   //   .catch((err) => {console.error(err);
   //                   });   
   console.log("inside getDataFromMongo");    
   //console.log("in GetWorkouts/getAllWorkouts first line");
   //console.log("url = ",url);  

   await axios.get('/rrr/getMongo').then((response) => {    // "/api"     
    //console.log(" useEffect, response data = ",response.data)    
    setDatax(response.data);
    console.log("response to getMongo datax = ",datax);
                                                       }
                  )  

      
   //const response = await fetch(url);
   //const json = await response.json();
   //console.log("in getAllWorkouts, response = ",response);
   //if  (response.ok)
   // {//x setWorkouts(json);
   //  console.log("in GetWorkouts, before dispatch is invoked. json =",json);
   //   dispatch({type: "SET_WORKOUTS", payload: json});
   //    console.log("in getAllWorkouts, workouts = ",workouts);     
   // }   



}   //   end const getDataFromMongo = async () => 




    return (
        <>
            <h4>Contact Page</h4>
            <p>{legend}</p>
            <p>{legend2}</p>
            <p>fileParam = {fileParam}</p>
            <p>this is props.string2: {props.string2}</p>
            <div>
            {
            datax.map(dat => (
                                    <div key={dat["id"]}> 
                                       <h6>{dat['title']}      {dat['reps']}     {dat['load']}</h6>
                                     </div>  
                             )         
                      )                 

              }
         </div> 






            <button onClick={getDataFromMongo}>Access server using proxy</button>
        </>
    )
}

interface ContactProps {
    [key: string]: any
}

export default Contact

/*
from vr14
function App() {
    const [data, setData] = useState();
    const urlWithProxy = "/api/v1";
  
    function getDataFromServer() {
      axios
        .get(urlWithProxy)
        .then((res) => setData(res.data))
        .catch((err) => {
          console.error(err);
        });
    }
  
    return (
      <div className="App">
        <h4>    client    no.02       13:04     11/04/2024 </h4>
        <button onClick={getDataFromServer}>Access server using proxy</button>
        <p>data : {data}</p>
      </div>
    );
  }
  
  export default App;
*/  
