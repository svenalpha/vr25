







//import useHelmet from '@hooks/useHelmet';
import React, { useEffect , useState} from 'react';
//import axios from "axios";

//import stylesa from './Extra.module.css';
import stylesb from './Flat.module.css';
import axios from "axios";

const Flat: React.FC<FlatProps> = (props) => {
//const Flat: React.FC<FlatProps> = ({id,type,area,min_12months,image, text. city, removeItem}) => { 

    console.log("qwertyuiop"); 
    var v1 =  props.flat;   // then use v1.id    etc
    console.log("v1= ", v1);
    var v2 = props;     // then use v2.removeItem
    console.log("v2 = ", v2);
    const { removeItem }= props;
    const {id,type,fruits,area,min_12months,image,text,city} = props.flat;
    
    //var removeItem = props.removeItem;
    //console.log("removeItem = ", removeItem); 
    const [readMore,setReadMore] = useState(false);  

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

    return (
        <>
<h2 className={stylesb.zh3}>Flat</h2>
<button>button here</button>    



<section  className={stylesb.s1}>   
  <div className={stylesb.d1}>  
    <div className={stylesb.d11}>  
      <img src={image} alt="Room Pic"   className={stylesb.d11_img}  />  
    </div> 
    <div className={stylesb.d12}>   
      <h4>  ....  id = {id}......type = {type} ....... city = {city} ..... </h4>  
      <div  className={stylesb.div_spacer}></div>
      <div style={{height: "20px", border: "3px solid red" }}></div>
      <div   className={stylesb.room_info} >
         <h4>id = {id}</h4>......<h4> type = {type}......fruits.oranges = {fruits.oranges}</h4>  
      </div>
       <p>  { readMore ? text : `${text.substring(0,100)}...`    }   
          <button onClick={()=>setReadMore(!readMore)}>{readMore ? 'show less' : 'show more'}</button>  
       </p>
       <button className={stylesb.delete_btn} onClick={()=>removeItem(id)}>...remove...</button>  
    </div> 
  </div>
  <div className={stylesb.d2}>
  </div>
 </section>

 {/*style={{background: 'green',  height: '50px'}}   */}

        </>
           )
}

interface FlatProps {
    [key: string]: any
}

export default Flat;




