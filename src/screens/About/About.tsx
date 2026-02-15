import useHelmet from '@hooks/useHelmet';
import React, { useEffect , useState} from 'react';
import axios from "axios";
//import DatePicker from "react-datepicker";   
//import "react-datepicker/dist/react-datepicker-cssmodules.css";
//import "react-datepicker/dist/react-datepicker.css";    
//import pkg from 'react-multi-date-picker';
//const { DateObject, Calendar } = pkg;

//import DatePicker from "react-multi-date-picker";  
//import { DateObject } from "react-multi-date-picker";  
//import { Calendar } from "react-multi-date-picker"; 

import * as  DP  from "react-multi-date-picker";  

const DatePicker:any = DP.default;
const DateObject:any = DP.DateObject;
const Calendar:any = DP.Calendar;

import DatePanel from "react-multi-date-picker/plugins/date_panel"; 
import styles from './About.module.css';
//import  type{Value} from "react-multi-date-picker"; 



const About: React.FC<AboutProps> = (props) => {
    //const [datax,setDatax] = useState(); 
    //const [users,setUsers] = useState([]);  
    const [legend,setLegend] = useState();  
    const [folksArray,setFolksArray] = useState([]); 
    const [usersArray,setUsersArray] = useState([]);
    const [selectedDate,setSelectedDate] = useState<Date | null>(new Date());
    const [startDate,setStartDate] = useState< Date | null>(new Date());
    const [endDate,setEndDate] = useState< Date | null>(null);

const [values, setValues] = useState([
  [new DateObject().set({ day: 1 }), new DateObject().set({ day: 3 })],
  [new DateObject().set({ day: 6 }), new DateObject().set({ day: 12 })],
  [new DateObject().set({ day: 23 }), new DateObject().set({ day: 11, month: 3, year: 2026 })],
])

 function doClick () 
  {console.log("values = ",values[2][1].month.name);
   console.log("values length = ",values.length);
  }

    //const url = "/rrr/peopleapi";  

    const helmet = useHelmet();

    function handleDateChange (date:any)             
        {setSelectedDate(date);              
        }                      
    
     function onChange (dates :[Date | null, Date | null])                
        {const [start,end] = dates;
         setStartDate(start);   
         setEndDate(end);              
        }    
    



    async function  doGetDatax()
        {//    axios.get('/rrr/peopleapi').then((response) => {    // "/api"     
        //    //console.log(" useEffect, response data = ",response.data)    
        //     setUsers(response.data);
        //     console.log("users = ",users);
        //                                                    }
        //                                      )               
            
        axios.get('/rrr/users' ).then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setUsersArray(response.data);
            console.log("userArray = ",usersArray);
                                                    }
                                      )          

 
        axios.get('/rrr/folks').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setFolksArray(response.data);
            console.log("folksArray = ",folksArray);
                                                   }
                                    )          



            axios.get('/rrr/tsmessage').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setLegend(response.data);
                                                            }
                                            )     


        }   //       async function  doGetDatax()
        useEffect(() => {doGetDatax()},[]);

    
    useEffect(() => {
        helmet.setTitle("About")
    },[helmet])  
                                               

    return (
        <>
           <h1>About Us</h1>
<h4> start react-multi-date-picker </h4>
<button  onClick={()=>doClick()}>click for dateObjects </button>  
< Calendar  numberOfMonths={3}  disableMonthPicker  disableYearPicker    
  value={values}
  onChange={setValues}
  multiple
  range rangeHover
/>

 <DatePicker multiple 
  dateSeparator=" to  "
  plugins= {[<DatePanel />]} 
 />



<h4> end react-multi-date-picker </h4>  


           <h4>calendar starts</h4>
           {/* include footer to  node_modules/react-datepicker/dist/react-datepicker.css in ReadMeRDM_vr25.txt
                when replacing node_modules          
           */}
           {/*
           <div style= {{color: 'red', width: '90%',  border: '10px solid tomato'}}>  
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
           <DatePicker  showIcon dateFormat="dd/MM/yyyy" selected={selectedDate}  onChange={setSelectedDate}  />  
           <h4>next</h4> 
            
           <DatePicker   className={styles['react-datepicker']}
  
           selected={startDate} 
            onChange = {onChange} 
            startDate = {startDate} 
            endDate = {endDate} 
            monthsShown={6} selectsRange  inline
           />
            </div> 
            */}
            <h4> calendar ends</h4>
           
            <p>{legend}</p>
           
            <div>
            {
            folksArray.map(folk => (
                                    <div key={folk["id"]}> 
                                       <h5> yyyy    {folk['name']}      {folk['star']}    yyyyyy</h5>
                                     </div>  
                              )         
                      )                 

              }
         </div> 

         <div>
            {
            usersArray.map(user => (
                                    <div key={user["id"]}> 
                                       <h6> zzzz     {user['username']}      {user['city']}    zzzzz  </h6>
                                     </div>  
                                   )         
                          )                 
            }
         </div> 







            <p>qwwwertyuiogggggghhjhhjjkkll</p>
        </>
    )
}

interface AboutProps {
    [key: string]: any
}

export default About;