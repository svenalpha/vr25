






//import useHelmet from '@hooks/useHelmet';
import React, { useEffect , useState} from 'react';   


//import axios from "axios";

//import stylesa from './Extra.module.css';
import { NavLink,Link } from 'react-router-dom';   
import { Outlet } from 'react-router-dom';
import Contact from "@screens/Contact/Contact";
import Detail from "@screens/Detail/Detail"; 

//import Contact from "./Detail";
import stylesd from './Room.module.css';
import axios from "axios";

const Room: React.FC<RoomProps> = (props) => {
//const Flat: React.FC<FlatProps> = ({id,type,area,min_12months,image, text. city, removeItem}) => { 
        console.log("qwertyuiop"); 
    var v1 =  props.room;   // then use v1.id    etc
    console.log("Room props v1= ", v1);
    var v2 = props;     // then use v2.removeItem
    console.log("Room props v2 = ", v2);
    const { removeItem }= props;
    const { showItemPage } = props;
    const {id,type,fruit,area,min_12months,image,text,city} = props.room;
    
    //var removeItem = props.removeItem;
    //console.log("removeItem = ", removeItem); 
    const [readMore,setReadMore] = useState(false);  
    const [stringx,setStringx] = useState("zxcvbnm");  

    //const [datax,setDatax] = useState(); 
    //const [users,setUsers] = useState([]);  
    //const [flatsArray,setFlatsArray] = useState([]); 
    //const [legend,setLegend] = useState('this_is_legend');  
    //const [folksArray,setFolksArray] = useState([]); 
    //const [usersArray,setUsersArray] = useState([]);
    //const url = "/rrr/peopleapi";  
    
    //const helmet = useHelmet();

    
    //async function  doGetDataFlats()
    //    {


        
        //    axios.get('/rrr/peopleapi').then((response) => {    // "/api"     
        //    //console.log(" useEffect, response data = ",response.data)    
        //     setUsers(response.data);
        //     console.log("users = ",users);
        //                                                  }
        //                                    )    
        
        //axios.get('/rrr/flats').then((response) => {    // "/api"     
        //    //console.log(" useEffect, response data = ",response.data)    
        //    setFlatsArray(response.data);
        //    console.log("flatsArray = ",flatsArray);
        //                                           }
        //                            )  
            
       // axios.get('/rrr/users').then((response) => {    // "/api"     
       //     //console.log(" useEffect, response data = ",response.data)    
       //     setUsersArray(response.data);
       //     console.log("userArray = ",usersArray);
       //                                            }
       //                             )          

 
        //axios.get('/rrr/folks').then((response) => {    // "/api"     
        //    //console.log(" useEffect, response data = ",response.data)    
        //    setFolksArray(response.data);
        //    console.log("folksArray = ",folksArray);
        //                                           }
        //                            )          



        //    axios.get('/rrr/tsmessage').then((response) => {    // "/api"     
        //    //console.log(" useEffect, response data = ",response.data)    
        //    setLegend(response.data);
        //                                                    }
        //                                    )     


        //}   //       async function  doGetDataFlats()
        //useEffect(() => {doGetDataFlats()},[]);

    
//    useEffect(() => {
//        helmet.setTitle("Flat")
//    },[helmet])


const doClick =  () => 
{console.log("in Room.tsx, inside  start doClick");
 // <Link to={"/src/screens/Contact/Contact"}></Link>  
 {/*  <NavLink to={"./Detail"}   target="_blank"  state={{var1: "var1"}}  >NavLink to Detail</NavLink>  */}  
  <a href="About"     target="_blank"  rel="noopener noreferer">fdsa</a>   
  console.log("in Room.tsx, inside  end doClick");
}

    return (
        <>
{/*<h2 className={stylesd.zh3}>Room</h2>
  <button>button here</button>  */}    
<article  className={stylesd.item1}> 
<div  className={stylesd.wrapper}> 
 {/*  return <Room key={room['id']}  {...{room}} removeItem={removeItem} ></Room>;  */}  

  {/* <a href="/contact" target="_blank" rel="noopener noreferrer">*/}   
  <p  className={stylesd.paragraph1}>...here is a paragraph...</p>
  {/* <button onClick={() => doClick()}> button </button>                    */}
  {/*  <button onClick={() => showItemPage("2345")}> showItemPage </button>    */}  
  
  {/*  <p  className={stylesd.paragraph2} ><NavLink to={`../Detail/${id}`}  target="_blank"  state={{var1: "var1"}}  >NavLink to Detail</NavLink></p>     */}                            
    <p  className={stylesd.paragraph2} ><NavLink to={`../Detail/${id}`}  target="_blank"  >NavLink to Detail</NavLink></p>   

   {/* <Detail  stringx={stringx}/>  */}
   {/*   <nav> <Link to={"/src/screens/Contact/Contact"}></Link></nav>   */}              
   {/* <p className={`${stylesd["text"]} ${stylesd["prop_title"]}`}>{city} {type} to let</p> */}                                                              
  <div className={stylesd.div_box}>
    <img src={image} alt="Room Pic"   className={stylesd.div_box_img}  />  
  </div>
 {/*</a> */} 
<div className={stylesd.divx}></div>
<Outlet />
</div>
</article>  

{/*
<section  className={stylesd.s1}>   
  <div className={stylesd.d1}>  
    <div className={stylesd.d11}>  
      <img src={image} alt="Room Pic"   className={stylesd.d11_img}  />  
    </div> 
    <div className={stylesd.d12}>   
      <h4>  ....  id = {id}......type = {type} ....... city = {city} ..... </h4>  
      <div  className={stylesd.div_spacer}></div>
      <div style={{height: "20px", border: "3px solid red" }}></div>
      <div   className={stylesd.room_info} >
        <h4>id = {id}</h4>  <h4> type = {type} </h4>
      </div>
       <p>  { readMore ? text : `${text.substring(0,100)}...`    }   
          <button onClick={()=>setReadMore(!readMore)}>{readMore ? 'show less' : 'show more'}</button>  
       </p>
       <button className={stylesd.delete_btn} onClick={()=>removeItem(id)}>...remove...</button>  
    </div> 
  </div>
  <div className={stylesd.d2}>
  </div>
 </section>
*/}


 {/*style={{background: 'green',  height: '50px'}}   */}

        </>
           )
}

interface RoomProps {
    [key: string]: any
}

export default Room;




