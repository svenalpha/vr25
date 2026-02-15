



import useHelmet from '@hooks/useHelmet';
import React, { useEffect , useState} from 'react';
import axios from "axios";
import  Flat from "./Flat";
import stylesa from './Extra.module.css';
import RoomPic from '@assets/imgs/img1.jpg';  // files in public directory are served at root path

//import axios from "axios";

const Extra: React.FC<ExtraProps> = (props) => {
    //const [datax,setDatax] = useState(); 
    //const [users,setUsers] = useState([]);  
    const [flatsArray,setFlatsArray] = useState([]); 
    const [legend,setLegend] = useState('this_is_legend');  
    const [folksArray,setFolksArray] = useState([]); 
    const [usersArray,setUsersArray] = useState([]);

    //const url = "/rrr/peopleapi";  

    const helmet = useHelmet();

    function removeItem(id:any)
    {console.log("inside removeItem, id = ",id);
     console.log("flatsArray = ",flatsArray); 
     const newFlatsArray = flatsArray.filter((flat) => flat["id"]  !== id);
     console.log("newFlatsArray = ",newFlatsArray); 
     setFlatsArray(newFlatsArray);
    } 
    
    async function  doGetDataFlats()
        {


        
        //    axios.get('/rrr/peopleapi').then((response) => {    // "/api"     
        //    //console.log(" useEffect, response data = ",response.data)    
        //     setUsers(response.data);
        //     console.log("users = ",users);
        //                                                  }
        //                                    )    
        
        axios.get('/rrr/flats').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setFlatsArray(response.data);
            console.log("flatsArrayxxx = ",flatsArray);
                                                   }
                                                
                                    )  
            
        axios.get('/rrr/users').then((response) => {    // "/api"     
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


        }   //       async function  doGetDataFlats()
        useEffect(() => {doGetDataFlats()},[]);

    
    useEffect(() => {
        helmet.setTitle("Extra")
    },[helmet])  

 var zz = "cat"; 
 if (flatsArray.length === 0)
    {return(<>
<main>
  <div className={stylesa.title}> 
    <h3> none left</h3>
    <button className={stylesa.btn} onClick={()=> doGetDataFlats()}>refesh</button>
  </div>    
</main> </>)
  } 
 
    return (
        <>
<main>
<h2 className={stylesa.zh3}>Extra</h2>
<button>button herea</button>

{/*
<section  className={stylesa.s1}>      
  <div className={stylesa.d1}>
    <div className={stylesa.d11}> 
      <img src={RoomPic} alt="Room Pic"   className={stylesa.d11_img}  />  
    </div>    
  </div>
  <div className={stylesa.d2}></div>
</section>    
*/}


<div>
{flatsArray.map((flat) => { //return <Flat key={flat['id']}  type = {flat['type']}  city = {flat['city']}></Flat>; 
                            return <Flat key={flat['id']}  {...{flat}} removeItem={removeItem} ></Flat>; 
                          }
               )         
}
</div>

{/*AA
<div>
{flatsArray.map(flat => (<div key={flat["id"]}> 
                           <h6>{ flat['type']}  {flat['city']}    {flat['area']}sq m</h6>
                           <img src={flat['image']} />
                         </div>  
                        )         
               )                 
}
</div> 
AA*/}


           

<p>{legend} qwwwertyuioggg</p>
</main>
        </>
    )
}

interface ExtraProps {
    [key: string]: any
}

export default Extra;





