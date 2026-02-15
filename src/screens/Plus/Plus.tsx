


import { NavLink,Link, useNavigate } from 'react-router-dom';   
import { Outlet } from 'react-router-dom';
import Contact from "@screens/Contact/Contact";

import useHelmet from '@hooks/useHelmet';

import React, { useEffect , useState} from 'react';
import axios from "axios";
import Room from "./Room";  
import Detail from "@screens/Detail/Detail";  
/* import Flat from "@screens/Extra/Flat";  */
import stylesc from './Plus.module.css';
import RoomPic from '@assets/imgs/img1.jpg';  // files in public directory are served at root path

//import axios from "axios";

const Plus: React.FC<PlusProps> = (props) => {
   const navigate = useNavigate();  
   console.log(" navigate = ",navigate);
    //const [datax,setDatax] = useState(); 
    //const [users,setUsers] = useState([]);  
    const [flatsArray,setFlatsArray] = useState([]); 
    const [roomsArray,setRoomsArray] = useState([]);    
    const [legend,setLegend] = useState('this_is_legend'); 
    const [string2,setString2] = useState('Here is string2'); 
    const [folksArray,setFolksArray] = useState([]); 
    const [usersArray,setUsersArray] = useState([]);

    //const url = "/rrr/peopleapi";  
    var var1:any = "here is var1 any";
    const helmet = useHelmet();

    function removeItem(id:any)
    {console.log("inside removeItem, id = ",id);
     console.log("flatsArray = ",flatsArray); 
     const newFlatsArray = flatsArray.filter((flat) => flat["id"]  !== id);
     console.log("newFlatsArray = ",newFlatsArray); 
     setFlatsArray(newFlatsArray);
    }                                          
  
    function showItemPage(id:any)
    {console.log("inside showItemPage. id = ",id);
      return (<div> <NavLink to={"@src/screens/Plus/Detail"}   target="_blank"  >NavLink to Detail</NavLink> </div>);  
    } 
    

    async function  doGetDataFlats()
        {
         console.log("in Plus. doGetDataFlats");

        
        //    axios.get('/rrr/peopleapi').then((response) => {    // "/api"     
        //    //console.log(" useEffect, response data = ",response.data)    
        //     setUsers(response.data);
        //     console.log("users = ",users);
        //                                                  }
        //                                    )    
        
        axios.get('/rrr/flats').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setFlatsArray(response.data);
            console.log("flatsArray = ",flatsArray);
                                                   }
                                    )  

        // in Plus.tsx flats are renamed rooms                             
        axios.get('/rrr/flats').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setRoomsArray(response.data);
            console.log("rooms(flats)Array = ",roomsArray);
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
        helmet.setTitle("Plus")
    },[helmet])  
var newWin:any;
function  linkClick(url:any)
{console.log("bbbbb   in linkClick, pre link");
  //  <NavLink to={"Contact"}></NavLink> ;   
  //<Link to={"./Contact"} target="_blank" rel="noopener noreferer"></Link>
  newWin = window.open(url,"_blank"); //, "target=_blank" , "noopener noreferer");   
  console.log(" newWin = ", newWin);
   <NavLink to={"../Contact"}   state={{var1: var1}}  >NavLink to Contact</NavLink>   

 //<a href="Contact" target="_blank" rel="noopener noreferer"></a>//
 
    console.log("bbbbbbb   in linkClick, post link");   
}
    
 var zz = "cat"; 
 if (flatsArray.length === 0)
    {return(<>
<div  className={stylesc.body1}>               
<main>
  <div className={stylesc.title}> 
    <h3> none left</h3>
    <button className={stylesc.btn} onClick={()=> doGetDataFlats()}>refesh</button>
  </div>    
</main>
</div>  
           </>)
  } 
                          //  <a href="Contact" target="_blank" rel="noopener noreferer"></a>     
    return (
        <>
<div   className={stylesc.body1} >             
<main className={stylesc.main}>
{/* <button onClick={() => linkClick("/Contact")}>Link Button</button>   */}    {/*  {...{legend}}  */}
{/* <button onClick={() =>  {<a href="Contact" target="_blank" rel="noopener noreferer">fdsa</a> }}> Link Button</button> */}
 {/* <a href="Contact"     target="_blank" {...{string2}} rel="noopener noreferer">fdsa</a>  */} 
{/* <NavLink to="../Contact"     target="_blank" state={"title" "adsfsgfg"}     >NavLink to Contact</NavLink>  */}
 {/* <NavLink to="../Contact"  target="_blank"  {...{string2}}   >NavLink to Contact</NavLink>   */}  
 {/*  <NavLink to={"../Contact/$(var1)"}   target="_blank"  state={{var1: var1}}  >NavLink to Contact</NavLink>   */}                            
 {/* <NavLink to={"../Contact/abcdefghijklm012345"}   target="_blank"  state={{var1: var1}}  >NavLink to Contact</NavLink> */}      
  <NavLink to={"../Contact/456"}   target="_blank"  state={{var1: var1}}  >NavLink to Detail</NavLink>  

<button onClick={() =>  { linkClick('../Contact/123')}}> linkClick Button</button> 

<button onClick={() =>  { navigate('../Contact/123', {state: {test: 'state_test_XXXX'}}) }}> Link Button</button> 



<section className={stylesc.section_top}>    
<h2 className={stylesc.zh3}>Extra</h2>
<button>button here</button>   
</section>


<section  className={stylesc.itemsContainer}>
{roomsArray.map((room) => { //return <Flat key={flat['id']}  type = {flat['type']}  city = {flat['city']}></Flat>; 
                             return <Room key={room['id']}  {...{room}} removeItem={removeItem} showItemPage={showItemPage} ></Room>; 
                            //return <div className={stylesc.item}> </div>
                          }
               )         
}
</section>

         
<section className={stylesc.section_foot}>
<p>{legend} qwwwertyuioggg</p>
</section>

</main>
</div>    
        </>
    )
}

interface PlusProps {
    [key: string]: any
}

export default Plus;







