





import useHelmet from '@hooks/useHelmet';
import React, { useEffect , useState} from 'react';
import { useLocation } from 'react-router-dom';
//import axios from "axios";
import axios from "axios";
//import stylesa from './Extra.module.css';
//import stylesd from './Room.module.css';
import stylese from './Detail.module.css';
import stylesa_x from './HLR3_x.module.css'; 
import  Vid1  from '@videos/VID_PKCP.mp4';  
import { IconContext } from "react-icons"; 
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { threadId } from 'worker_threads';

//import ReactDOM from 'react-dom';
//if (typeof window !== 'undefined') {ReactDOM.render(document.getElementById("root"));}        

const Detail: React.FC<DetailProps> = (props) => {       
//const Flat: React.FC<FlatProps> = ({id,type,area,min_12months,image, text. city, removeItem}) => { 
    let location =useLocation();
    console.log(" Detail location = ", location );
    const path  = location.pathname; const x1 = path.length; const x2 = path.lastIndexOf("/"); 
    const fileParam = path.slice(x2+1,x1); const fileParamToInt = parseInt(fileParam,10);
    console.log(" detail fileParamToInt = ",fileParamToInt);
    console.log("Detail qwertyuiop"); 
    var v1 =  props.room;   // then use v1.id    etc
    console.log("Detail v1= ", v1);
    var v2 = props;     // then use v2.removeItem
    console.log("Detail v2 = ", v2);
    var v3 = props.detail;     // then use v2.removeItem
    console.log("Detail v3 = ", v3);
    //const { removeItem }= props;
    //const {id,type,area,min_12months,image,text,city} = props.room;
    
    //var removeItem = props.removeItem;
    //console.log("removeItem = ", removeItem); 
    const [readMore,setReadMore] = useState(false); 
    //const [roomsArray,setRoomsArray] = useState([]); 
    const [roomsArray,setRoomsArray] = useState([] as any); 
    const [space,setSpace] = useState([] as any);  
    //const [newRoomsArray,setNewRoomsArray] = useState([]); 
    //const [match,setMatch] = useState<string | []>("");  
    //const [match,setMatch] = useState<any | []>([]); 
    const [match,setMatch] = useState([] as any); 
    //const [match2,setMatch2] = useState<any | []>("id,type,fruit,area,min_12months,image,text,city"); 
    const [match2,setMatch2] = useState<any | []>(''); 
    const [match5,setMatch5] = useState(''); 
    const [match4,setMatch4] = useState([]);
    //const [match4,setMatch4] = useState<{id:number,type:string,fruit:any,area:any,min_12months:boolean,image:any,text:string,city:string} [] | []>(''); 
    const [test,setTest] = useState('');  
    const [mark,setMark] = useState(0 as any);
    const [b0055,setB0055] = useState(' ' as any);   
    const [width,setWidth] = useState(0 as any);  
    const [newRoomsArray,setNewRoomsArray] = useState<any | []>(''); 
    const [textd,setTextd] = useState();  

    //const [textb,setTextb = useState(Text1c as any);
    //const [style, setStyle] = useState<string | []>("");    

    //const [datax,setDatax] = useState(); 
    //const [users,setUsers] = useState([]);  
    //const [flatsArray,setFlatsArray] = useState([]); 
    //const [legend,setLegend] = useState('this_is_legend');  
    const [folksArray,setFolksArray] = useState([]); 
    //const [usersArray,setUsersArray] = useState([]);
    //const url = "/rrr/peopleapi";  
 
var xx1:any; var vmatch4:any;
var bxx:any; var vulx:any; var vulx_id:any; var v1:any,v3:any,v4:any;
var b00:any=3, b01:any, b02:any, b03:any, b04:any, b05:any; 

useEffect(() => 
  {{/* b00 = document.querySelector(stylesa_x['ams_slide-0_box']); // also works   b00 = document.querySelector("stylesa_x.ams_slide-0_box");   */}
    b00 = document.querySelector(`.${stylesa_x['ams_slide-0_box']}`);  
    console.log("in useEffect    b00  = ",b00);                                                                                                           
   {/*if (b00) {console.log("in useEffect b00 non null. b00 = ",b00);  }else {console.log("in useEffect b00 =  null");  }   */}
    b01 = document.querySelector(`.${stylesa_x['ams_slide-1_box']}`); 
    b02 = document.querySelector(`.${stylesa_x['ams_slide-2_box']}`); 
    b03 = document.querySelector(`.${stylesa_x['ams_slide-3_box']}`); 
    b04 = document.querySelector(`.${stylesa_x['ams_slide-4_box']}`); 
    b05 = document.querySelector(`.${stylesa_x['ams_slide-5_box']}`); 
      
   {/* bxx = document.querySelector(stylesa_x['ams_slider-dot_box']); */} 
  }, []);

  async function  doStopScrollIntoViewVertScr(activeBox:any)
        {var scrTop = pageYOffset || document.documentElement.scrollTop;
         var scrLeft = pageXOffset || document.documentElement.scrollLeft;
         window.onscroll = function () {window.scrollTo(scrLeft,scrTop);};  
         await (activeBox).scrollIntoView({behavior: 'smooth', block: 'nearest'});
         window.onscroll = function () {window.scrollTo(scrLeft,scrTop);};  
         window.onscroll = function () { };   
                            
          
         // await axios.get('/rrr/flats/')     //.then((response) => 
         //       .then ((response) => { setRoomsArray(response.data)//.filter((item:any) =>item.id == 3));
         //                            } 
         //             );                                                                              
   



         //window.onscroll = function () { };        
        }  

   useEffect(() => {console.log("inside  scroll useEffect. mark = ",mark);
    var v1:string = 'b' + String(mark).padStart(2,'0');   // padding with zero
    var numStr:string  =    mark.toString(); 
    var queryStr:any =  "document.querySelector(`.${stylesa_x['ams_slide-" + numStr + "_box']}`)";  
    console.log("inside useEffect. total queryStr = ",queryStr);  
    var activeBox:any = eval(queryStr);  
    console.log("inside useEffect. activeBox = ",activeBox);  
    var idName:any  = activeBox.id;        
    console.log("inside useEffect. idName = ",idName);  
    var elem:any = document.getElementById(idName); 
     var rect_boxx = elem.getClientRects();                
    //.ams_slider > .ams_slider-dot_box      ams_slider-dot_box']}> id="ulx_id"
    //var tbox:any = document.getElementByClassName("ams_slider-dot_box");    //  tbox = thumbnailBox
    var tbox:any = document.getElementById("box_id");    //  tbox = thumbnailBox
    console.log("inside useEffect. thumbnailBox = ",tbox);  
    //var v21 = tbox.offsetWidth; var v22 = tbox.offsetHeight;
    //console.log("inside useEffect. tbox.offsetWidth, tbox.offsetHeight = ",v21,v22); 
    // (activeBox).scrollIntoView({behavior: 'smooth', block: 'nearest'});
     var scrParent:any = document.getElementById("id_scrParent"); 
    
    //(activeBox).scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
    console.log("inside useEffect. scrParent = ",scrParent); 
    var rect = tbox.getClientRects(); console.log("inside useEffect. getClientRects.parent rect = ",rect); 
    var tbox0:any = document.getElementById("box0");
    var v30 = tbox0.offsetParent.clientLeft;
    console.log("inside useEffect. tbox0.offsetParent.clientLeft. v30 = ",v30);   

    if (idName != "box0")   
      {  //leftward scroll
       var vr0l:any =  rect[0].left; 
       var vrl:any =  rect_boxx[0].left;  
       if (vrl < vr0l ) 
         {console.log("inside useEffect. doing leftward scroll");  
          var vdiff = vrl - vr0l - tbox0.offsetParent.clientLeft;  
          console.log("inside useEffect.leftward scroll: vr0l, vrl, vdiff",vr0l,vrl,vdiff);
          tbox.scrollLeft += vdiff;
         }  

      }



    if (idName != "box0") 
      {console.log("inside useEffect. doing box4");         
       var vrw  = rect[0].width + v30;  //((v30)*2) - 10; //real client width;                
       var vrxx = rect_boxx[0].right; 
       if (vrxx > vrw)
        {console.log("inside useEffect. ((vrxx > vrw)) do nothing.  vrxx, vrw = ",vrxx,vrw); 
         var vdiff2 = vrw - vrxx;
         tbox.scrollLeft -= vdiff2;//30;    // see:  jsfiddle.net/pGR3B/2/    scroll-behavior: smooth;
        }
      } 



    if (idName === "box0")  
      {console.log("inside useEffect. doing box0"); 
       var vr0l:any =  rect[0].left; 
       var vrl:any =  rect_boxx[0].left;      //rect_box0[0].left; 
       console.log("inside useEffect. pre  (vr0l < vrl) ",vr0l,vrl);
       //var vdiff:any;
       if (vrl < vr0l ) 
         {var vdiff = vrl - vr0l - tbox0.offsetParent.clientLeft;  
          console.log("inside useEffect. vr0l, vrl, vdiff",vr0l,vrl,vdiff);
          tbox.scrollLeft += vdiff;
         }  
      } 
  
   
      
// elem.offsetParent
  },[mark]); 

///////////////////////////////////////////////////////////////////////////////////////////

 async function  doGetTestd()
   {axios.get('/rrr/thetext').then((response) => {    // "/api"     
    //console.log(" useEffect, response data = ",response.data)    
    setTextd(response.data);                            
    console.log("textd = ",textd);                             
                                                 }
                                  )   
   }
 useEffect(() => {doGetTestd()},[]);

      

///////////////////////////////////////////////////////////////////////////////////////////////////////



   

const helmet = useHelmet();
    var newArray:any;
    

const doAnimationIteration =  (b:any)=>{console.log("doing do Animation. Coefficient = ",b);
                               {/*  var style1:any = window.getComputedStyle(bxx);   */}  
                                console.log("b00 = ",b00);

                                setMark((c:any) => c+1);
                                console.log("in doAnimationIteration, mark = ",mark);
                               {/* var xx = b02.style.visibility;
                                console.log("xx re b02 visibility =",xx);  
                               */}  
                                   }






    //async function  doGetDataFlats()
    //    {


        
        //    axios.get('/rrr/peopleapi').then((response) => {    // "/api"     
        //    //console.log(" useEffect, response data = ",response.data)    
        //     setUsers(response.data);
        //     console.log("users = ",users);
        //                                                  }
        //  
        //                                  )    
   var vresult:any; var vmatch:any; var vmatch2:any;  var vmatch3:any; var vmatch4:any;var vmatch5:any;
    async function  doGetDataFlats()
        {
        console.log("XXXXXXXXXXin Detail,  useEffect, pre axios.get")   
       // in Plus.tsx flats are renamed rooms                             
       //a  vresult = axios.get('/rrr/flats').then((response) => {    // "/api"     
       //a     //console.log(" useEffect, response data = ",response.data)    
       //a     setRoomsArray(response.data);
       //a     console.log("in Detail, doGetDataFlats. rooms(flats)Array = ",roomsArray);
       //a     console.log("in Detail, doGetDataFlats. results = ",vresult);
       //a                                                       }            
       //a                                         )                     
       
          vresult = axios.get('/rrr/folks/')     //.then((response) => 
                 .then ((response) => { setFolksArray(response.data);
                                      }                         
                       );        
      
       //const [match41,setMatch41] = useState<any | []>(''); 
       //var vmatch41:[]; 
       
                await axios.get('/rrr/flats/')     //.then((response) => 
                .then ((response) => { setRoomsArray(response.data)//.filter((item:any) =>item.id == 3));
                                     } 
                      );                                                                              
                                          
                // .then ( vmatch4 = roomsArray.find((item:any) => item.id === 2) );
                // console.log("vvvvvvvvvvvvvmatch4 = ",vmatch4);  
                         
                //  await axios.get('/rrr/flats/')     //.then((response) => 
                // .then ((response) => { setRoomsArray(response.data.filter((item:any) =>item.id == 3));

                //                      }                         
                //       )                   
                // .then ( vmatch4 = roomsArray.find((item:any) => item.id === 2) );
                // console.log("vvvvvvvvvvvvvmatch4 = ",vmatch4);  
                  
                 // setMatch4(vmatch4);      //  setMatchz(vmatch3) );
                 //.then ( setMatch41(roomsArray.find((item:any) => item.id === 2) ));  

          //       return vmatch4;
       //    const newRoomsArray = roomsArray.filter((flat:any) => flat["id"]  !== id);      
          console.log(" in doGetDataFlats, roomsArray = ",roomsArray);
          //return vmatch4;
        }
      async function  doGetItem()
        {console.log("KKKKKKKKKKKKKK in Detail, doGetItem. KKKKKKKKKKKKKKK");
                  roomsArray.filter((item:any) => item.id === fileParamToInt)
                           .map((filteredItem:any) =>(setMatch5(filteredItem['city']))     
                               );




          const vmatchxx:any = roomsArray.find((item:any) => item.id === 2);  
          setMatch2(vmatchxx);   (roomsArray.find((item:any) => item.id === 2));

          //const  {id,type,fruit,area,min_12months,image,text,city}:any = match2;        
          //const  {id,type,fruit,area,min_12months,image,text,city}:any = roomsArray.find((item:any) => item.id === 2); 
          //const  {id,type,fruit,area,min_12months,image,text,city}:any =  vmatchxx;
          //console.log(" in Detail, doGetItem. type = ",type);
          console.log(" in Detail, doGetItem. city = ",match2.city);
         //console.log(" in detail, doGetItem.  info from here");
         //console.log(" in detail, doGetItem. No1, vmatch = ",vmatch);
         //vmatch2 = vmatch.city;
         console.log(" in Detail, doGetItem. No2. vmatchxx = ",vmatchxx);
         console.log(" in Detail, doGetItem. No3 roomsArray = ",roomsArray);
         // setMatch(vmatch); 
        }


        useEffect(() => {doGetDataFlats()},[]);       
        useEffect(() => {doGetItem()},[]);           
        

        //   const names = ["billy","mary","brenda"]; 
        //   const match = roomsArray((name) => name.includes("au")); 
        //   const match = roomsArray.find((city) => city.includes('omt'));  
        const matchx:any =  roomsArray.find((item:any) => item.id ===  fileParam);  
        const {id,type,fruit,area,min_12months,image,text,city} = matchx || {};
        console.log(" aaaaaaaaaaaaaaaaaaa  in Details matchx  = ",type,city)  
        console.log(" in Details vmatch3  = ",vmatch3)  
        useEffect(() => { console.log("in Detail, [matchx] useEffect pre setMatch(matchx)"); 
                           const newArray1 = roomsArray.filter((room:any) => room["city"]  == "Jomtien");               
                           console.log("const newArray1 = ",newArray1);
                           newArray = newArray1;
                           console.log("var newArray = ",newArray);
                           vmatch4 = matchx;
                          const match4 = vmatch4;
                          setMatch(vmatch4); 
                          console.log("in Detail, useEffect matchx =",matchx); 
                          console.log("in Detail, useEffect vmatch3 =",vmatch3); 
                          //const match5:any =  roomsArray.find((item:any) => item.city === "Jomtien");  
                          //setMatch(match5); 
                          //const { id,type,area } = match4;
                          //setTest(match5.city);
                          //console.log("in Detail, useEffect match5 =",match5); 
                          //console.log("in Detail, useEffect match5.city =",match5['city']); 
                          setTest('zzzzzzzzzzzzzz');
                        },[matchx]);    
        //     setMatch([matchx]);

        //     console.log(" in Details roomsArray find  = ",match)  
        console.log(" in detail, vmatch3 = ",vmatch3);
       // const {id,type,area,min_12months,image,text,city} = matchx;
        //const m1 = matchx[Object.(values)];
        //const m2.isArray(matchx);
        //console.log(" m1 = ",m1);
        // const [type:any,city:any,...] = matchx;
        // const m1 = matchx['object'];
        // console.log(" matchx.city = ",matchx['city']);
        // setMatch(matchx.city);
        // console.log(" match = ",match);
        // axios.get('/rrr/flats').then((response) => {    // "/api"     
        //    //console.log(" useEffect, response data = ",response.data)    
        //    setFlatsArray(response.data);
        //    console.log("flatsArray = ",flatsArray);
        //                                           }
        //                            )  
            


      


        //}   //       async function  doGetDataFlats()
        //useEffect(() => {doGetDataFlats()},[]);

    
      
      useEffect(() => 
       {setWidth(window.innerWidth);  //* for initial measurement on load page */
        const handleResize = () =>{setWidth(window.innerWidth);}      
        window.addEventListener("resize",handleResize);
        return() =>{window.removeEventListener("resize",handleResize)};
       }, [])



      useEffect(() => {
            helmet.setTitle("Detail")
        }, [helmet])

    return (
        <>
        <div className={stylesa_x['body1']}>  
        <main>  

              {/*  <button onClick="javascript:window.close('','_parent','');"</button>     */}                    

        <h2>  Detail Page</h2>
         {/* <button onClick={() => doClick()}> button </button>   */}
        <span   >in span: width = {width}px       </span>
        {/* <button onClick={() => window.close()}> go back </button>   */}
        <button onClick={() => { window.open('_parent','_parent'); window.close(); }}> cccccc back </button>
        <p> match = </p>
{/*
<div  style={{background: 'blue', height:'100%', position: 'relative'}}>
  <div style={{background: 'black',  height: '300px', width: '300px', 
             display: 'block',position: 'relative'  }}>
    <img src={roomsArray[2]['image']} alt="Room Pic"   className={stylese.div_box_img}  />  
  </div>

*/}
{/*
return <Room key={room['id']}  {...{room}} removeItem={removeItem} showItemPage={showItemPage
{post.map((post) > (
  <li key={post.id} className="xxxxx">
  {post.title}
  </li>
}

 const newArray1 = roomsArray.filter((room:any) => room["city"]  == "Jomtien");  
 const matchx:any =  roomsArray.find((item:any) => item.id ===  fileParam); 
 const newFlatsArray = flatsArray.filter((flat) => flat["id"]  !== id);                 
 return <Flat key={flat['id']}  {...{flat}} removeItem={removeItem} ></Flat>; 
       {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
const {id,type,fruit,area,min_12months,image,text,city} = props.flat;
const {id,type,fruit,area,min_12months,image,text,city} = room;

    var  {id,type,fruit,area,min_12months,image,text,city} = room;
*/}  

{/*    

   {  setMatch2(roomsArray.find(({id,type,fruit,area,min_12months,image,text,city}:any) => (id ===  fileParam)))}
   
  */}   

   
   



   {roomsArray.map(({id,type,fruits,area,min_12months,image,text,city}:any) =>{
    const xx:any = id;
     if (xx == fileParamToInt) 
     {return(
      <div key= {id}>  
        <h3>  begin answer </h3>  
        <h4>{type}</h4>
        <h4>fruits.oranges = {fruits.oranges}</h4>
        <p>{city}</p>  
        
        <h3>  end answer  </h3>
      </div>    
            )
      }
                                                                              }        
                  )
    } 

<h4>vvvvvvvmatch4= {vmatch4} </h4>
<h4>roooooms= {roomsArray.city} </h4>
 
  {roomsArray.map((room:any) =>(
    <div key= {room.id}>
    
      <h3>XXX  id = {room.id}  XXX</h3>  
       <h4>type = {room.type}</h4>
       <p>city = {room.city}</p>
     </div>    
                                )        
                  )
    } 








{/*                   */}               

            {
            folksArray.map(folk => (
                                    <div key={folk["id"]}> 
                                       <h3>{folk['name']}     XX     {folk['star']}</h3>
                                    </div>  
                                   )         
                          )                 

             }

        
<p>  GGGGGGGGGGGGG match5= {match5} </p> 



{/*  const {id,type,fruit,area,min_12months,image,text,city} = match;   */}
 {/*<h4>vmatch = {room[2].match}  XX match = {match}</h4>  */}  


{/* 
 <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} className="strClass">profile</a>
              </div>
            </li>
          );
        })}
      </ul>
  */}





<div  style={{background: 'pink',  height: '25px', display: 'block'}}>  below here: fader imported from vr23/HLR3 (ie fader) from hbs_test5a(project)/extra2(page)   auto with manual slider 
</div>
<div  style={{background: 'green',  height: '50px', display: 'block'}}> below here: extra2 slider (ie fader) from hbs_test5a(project)/extra2(page)   auto with manual slider   </div>









<section className={stylesa_x.section_extra2}>     




{/*<body>  zxc */}
 <div className={stylesa_x['ams_slider']} id="id_scrParent">        {/*div className={`${stylesx.slider} ${stylesx.slide1}`}>    defaultChecked    */}  

   <input  type="radio"  name="ams_input-slider_x" className={`${stylesa_x["ams_input-slide"]} ${stylesa_x["ams_input-slide-num"]}`} id={stylesa_x['ams_input-slide-0']} defaultChecked />                       
   <input  type="radio"  name="ams_input-slider_x" className={`${stylesa_x["ams_input-slide"]} ${stylesa_x["ams_input-slide-num"]}`} id={stylesa_x['ams_input-slide-1']} />   
   <input  type="radio"  name="ams_input-slider_x" className={`${stylesa_x["ams_input-slide"]} ${stylesa_x["ams_input-slide-num"]}`} id={stylesa_x['ams_input-slide-2']} />                                        
   <input  type="radio"  name="ams_input-slider_x" className={`${stylesa_x["ams_input-slide"]} ${stylesa_x["ams_input-slide-num"]}`} id={stylesa_x['ams_input-slide-3']} />                
   <input  type="radio"  name="ams_input-slider_x" className={`${stylesa_x["ams_input-slide"]} ${stylesa_x["ams_input-slide-num"]}`} id={stylesa_x['ams_input-slide-4']} />                  
   <input  type="radio"  name="ams_input-slider_x" className={`${stylesa_x["ams_input-slide"]} ${stylesa_x["ams_input-slide-num"]}`} id={stylesa_x['ams_input-slide-5']} />   

   <input  type="radio"  name="ams_input-slider_x" className={stylesa_x["ams_input-slide"]}    id={stylesa_x['ams_input-slide-autoplay']}   defaultChecked />                                        
 

   <ul  className={stylesa_x['ulx']}   id="ulx_id">
     <li className={stylesa_x['ams_slide-0']}></li>   
     <li className={stylesa_x['ams_slide-1']}></li>              
     <li className={stylesa_x['ams_slide-2']}></li> 
     <li className={stylesa_x['ams_slide-3']}></li>     
     <li className={stylesa_x['ams_slide-4']}></li>                  
     <li className={stylesa_x['ams_slide-5']}></li>  
   </ul>

   <div className={stylesa_x['ams_slide-description']}  >
     <label className={stylesa_x['ams_slide-0']}  onAnimationStart={()=>(setMark(0))} onAnimationIteration={()=>(setMark(0))}   /* onAnimationIteration={()=>(doAnimationIteration("0"))} */ >
       <div className={stylesa_x['div2']}  >                                                                                                                               
         <img className={stylesa_x['main_img']}  src="https://picsum.photos/id/1015/600/400.jpg" alt="pic no0, 1015"   />
       </div> 
     </label>

     <label className={stylesa_x['ams_slide-1']}  onAnimationStart={()=>(setMark(1))}onAnimationIteration={()=>(setMark(1))}  >
       <div className={stylesa_x['div2']}>  
         <img className={stylesa_x['main_img']}  src="https://picsum.photos/id/1039/600/400.jpg" alt="pic no1, 1039"/>
       </div> 
     </label>
     
     <label className={stylesa_x['ams_slide-2']}  onAnimationStart={()=>(setMark(2))}  onAnimationIteration={()=>(setMark(2))}  /* onAnimationStart={()=>(doAnimationIteration("2"))}  onAnimationIteration={()=>(doAnimationIteration("2"))}  */  >                                        
       <div className={stylesa_x['div2']}>     
         <img className={stylesa_x['main_img']} src="https://picsum.photos/id/1057/600/400.jpg" alt="pic no.2  id=1057"/>                                                                
       </div>              
     </label>

     <label className={stylesa_x['ams_slide-3']}  onAnimationStart={()=>(setMark(3))}   onAnimationIteration={()=>(setMark(3))}    /* onAnimationIteration={()=>(doAnimationIteration("3"))} */    >                       
       <div className={stylesa_x['div2']}> 
         <img className={stylesa_x['main_img']}  src="https://picsum.photos/id/106/600/400.jpg" alt="pic no3, 106"/>      
     
       </div>                                              
     </label>

     <label className={stylesa_x['ams_slide-4']} onAnimationStart={()=>(setMark(4))}  onAnimationIteration={()=>(setMark(4))}  /* onAnimationIteration={()=>(doAnimationIteration("4"))} */ >
       <div className={stylesa_x['div2']}>     
         <img className={stylesa_x['main_img']} src="https://picsum.photos/id/1040/600/400.jpg" alt="pic No.4 id=1040"/>
       </div>              
     </label>

     <label className={stylesa_x['ams_slide-5']} onAnimationStart={()=>(setMark(5))}  onAnimationIteration={()=>(setMark(5))} /*  onAnimationIteration={()=>(doAnimationIteration("5"))} */ >
       <div className={stylesa_x['div2']}>     
         <img className={stylesa_x['main_img']} src="https://picsum.photos/id/1041/600/400.jpg" alt="pic No.5 id=1041"/>      
       </div>              
     </label>
   </div>   


   <div className={stylesa_x['ams_slider-arrow-prev']}>
     <label className={stylesa_x['ams_slide-0']} onClick={()=>(setMark(0))} htmlFor={stylesa_x['ams_input-slide-0']}><FaArrowCircleLeft className={stylesa_x['arrow']}  /></label>
     <label className={stylesa_x['ams_slide-1']} onClick={()=>(setMark(1))} htmlFor={stylesa_x['ams_input-slide-1']}><FaArrowCircleLeft className={stylesa_x['arrow']}  /></label>
     <label className={stylesa_x['ams_slide-2']} onClick={()=>(setMark(2))} htmlFor={stylesa_x['ams_input-slide-2']}><FaArrowCircleLeft className={stylesa_x['arrow']}  /></label>                                      
     <label className={stylesa_x['ams_slide-3']} onClick={()=>(setMark(3))} htmlFor={stylesa_x['ams_input-slide-3']}><FaArrowCircleLeft className={stylesa_x['arrow']}  /></label>                                           
     <label className={stylesa_x['ams_slide-4']} onClick={()=>(setMark(4))} htmlFor={stylesa_x['ams_input-slide-4']}><FaArrowCircleLeft className={stylesa_x['arrow']}  /></label>                                       
     <label className={stylesa_x['ams_slide-5']} onClick={()=>(setMark(5))} htmlFor={stylesa_x['ams_input-slide-5']}><FaArrowCircleLeft className={stylesa_x['arrow']}  /></label> 
   </div>
   <div className={stylesa_x['ams_slider-arrow-next']}>
     <label className={stylesa_x['ams_slide-0']} onClick={()=>(setMark(0))} htmlFor={stylesa_x['ams_input-slide-0']}><FaArrowCircleRight className={stylesa_x['arrow']}  /></label>
     <label className={stylesa_x['ams_slide-1']} onClick={()=>(setMark(1))} htmlFor={stylesa_x['ams_input-slide-1']}><FaArrowCircleRight className={stylesa_x['arrow']}  /></label>
     <label className={stylesa_x['ams_slide-2']} onClick={()=>(setMark(2))} htmlFor={stylesa_x['ams_input-slide-2']}><FaArrowCircleRight className={stylesa_x['arrow']}  /></label>
     <label className={stylesa_x['ams_slide-3']} onClick={()=>(setMark(3))} htmlFor={stylesa_x['ams_input-slide-3']}><FaArrowCircleRight className={stylesa_x['arrow']}  /></label>
     <label className={stylesa_x['ams_slide-4']} onClick={()=>(setMark(4))} htmlFor={stylesa_x['ams_input-slide-4']}><FaArrowCircleRight className={stylesa_x['arrow']}  /></label>
     <label className={stylesa_x['ams_slide-5']} onClick={()=>(setMark(5))} htmlFor={stylesa_x['ams_input-slide-5']}><FaArrowCircleRight className={stylesa_x['arrow']}  /></label>
   </div>        
   <div className={stylesa_x['ams_slider-dot']}>
     <label className={stylesa_x['ams_slide-0']} htmlFor={stylesa_x['ams_input-slide-0']}></label>
     <label className={stylesa_x['ams_slide-1']} htmlFor={stylesa_x['ams_input-slide-1']}></label>
     <label className={stylesa_x['ams_slide-2']} htmlFor={stylesa_x['ams_input-slide-2']}></label>
     <label className={stylesa_x['ams_slide-3']} htmlFor={stylesa_x['ams_input-slide-3']}></label>    
     <label className={stylesa_x['ams_slide-4']} htmlFor={stylesa_x['ams_input-slide-4']}></label>     
     <label className={stylesa_x['ams_slide-5']} htmlFor={stylesa_x['ams_input-slide-5']}></label> 
   </div>  
           
            
   <div    className={stylesa_x['ams_slider-dot_box']}  id="box_id">
     <label   onClick={()=>(setMark(0))} 
              className={stylesa_x['ams_slide-0_box']}  id="box0" htmlFor={stylesa_x['ams_input-slide-0']}>     
       <img   src="https://picsum.photos/id/1015/150/100.jpg" alt="no. 0 1015"/> 
     </label> 

     <label   onClick={()=>(setMark(1))} 
              className={stylesa_x['ams_slide-1_box']}   id="box1" htmlFor={stylesa_x['ams_input-slide-1']}>     
       <img   src="https://picsum.photos/id/1039/150/100.jpg" alt="no. 1 1039"/>  
     </label> 

     <label   onClick={()=>(setMark(2))} 
              className={stylesa_x['ams_slide-2_box']}   id="box2" htmlFor={stylesa_x['ams_input-slide-2']}>     
       <img   src="https://picsum.photos/id/1057/150/100.jpg" alt="no. 2 1057"/> 
     </label> 

     <label   onClick={()=>(setMark(3))} 
              className={stylesa_x['ams_slide-3_box']}  id="box3" htmlFor={stylesa_x['ams_input-slide-3']}>                                                            
       <img   src="https://picsum.photos/id/106/150/100.jpg" alt="no. 3 106"/> 
     </label> 
             
     <label   onClick={()=>(setMark(4))} 
              className={stylesa_x['ams_slide-4_box']}  id="box4" htmlFor={stylesa_x['ams_input-slide-4']}>                                                            
       <img   src="https://picsum.photos/id/1040/150/100.jpg" alt="no. 4 1040"/> 
     </label> 

     <label   onClick={()=>(setMark(5))} 
              className={stylesa_x['ams_slide-5_box']}  id="box5" htmlFor={stylesa_x['ams_input-slide-5']}>                                                            
       <img   src="https://picsum.photos/id/1041/150/100.jpg" alt="no. 5 1041"/> 
    </label> 
  </div>
</div>   {/* end ams_slider    */} 
{/* CB  <div className={stylesa_x["ams_footer"]}>     */}                        
  {/*CA
  <p>
    <span>Pure CSS Slider Autoplay</span>
    <span>by <a href="https://codepen.io/panikaro/#" target="_blank">PaniKaro</a></span>
  </p>
  CA*/}
{/* CB </div>  */}    



 <div className={stylesa_x['ams_slider_to_side']}>  

  {roomsArray.filter((item:any,index:any) => item.id === fileParamToInt)
           .map((fi:any) =>(<>          {/*fi  = filteredItem   */}
{/*  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    below  filtered  item available   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */}
<div className={stylese.div_box} key ={fi['id']}>  

{/*</body>*/}
  <p className={stylesa_x['ams_slider_to_side_p']}>aaa {textd} OOOOOaa</p>
  <p className={stylesa_x['ams_slider_to_side_p2']}>Mary had a little lamb OOOOO.</p> 
  <p className={stylesa_x['ams_slider_to_side_p2']}>city: {fi['city']}</p> 
  <p className={stylesa_x['ams_slider_to_side_p2']}>type: {fi['type']}</p> 
  <p className={stylesa_x['ams_slider_to_side_p2']}>area: {fi['area']}</p>
 
 {fi.fruits.map((fruit:any,index:any) =>
                 {
                  return(
                  <div  key ={fruit['id']}>
                    <h4>fruit: {fruit['pears']} xxxxxxx</h4>
                     <h4>fruit:tttttttttttgggt</h4>
                   </div>
                  
                          );
                  }         
                )
  }


  {/*  <div className={`${stylesx["slider"]} ${stylesx["slide1"]}`}></div>   */} 
  {/* <p className={stylesa_x['ams_slider_to_side_p2']}>fruit.applescc: {fi['fruit[1]']}</p>  */}
  <p className={stylesa_x['ams_slider_to_side_p2']}>type: {fi['type']}</p>


  <p>CCCC   CCCCC</p> 
                    


{/* stylesa_x    //  stylesa_x    stylesa_x    stylesa  stylesa   stylesa   stylesa    stylesa    stylesa  stylesa  */}                   
                                                                                                                                                     
                    {/* <section className={stylesa_x.section_extra2}> */} 



{/*
    <div className={stylese.div_box} key ={filteredItem['id']}>                   
            
      <p>BBBBBBBB   below filtered  BBBBB</p>   
      <p>type = {filteredItem['type']}   XXXX    city = {filteredItem['city']} </p>
      {/*  <div className={stylese.div_box}>    */}
{/*      <img src={filteredItem['image']} alt="Room Pic"   className={stylese.div_box_img}  />          
      {/*  </div>    */}
{/*      <p>PPPPPPPPPPPPPPPPZZZZZZZZZZZZZZZZZZZZZZZZZZZZ </p>    
    </div>  
*/} 

    
      
           
 </div>  

  {/* XXXSSSSFFFXXXXXXXXXXXXXXX    abovefiltered item available    XXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */}  
                                  </>)     
                )                              
  }            {/*   end roomsArray.filter((item:any) => item.id === fileParamToInt)    */}       


</div>  {/* end <div className={stylesa_x['ams_slider']}>   type = {filteredItem['type']}  city = {filteredItem['city']} */}                    



</section>   





{roomsArray.filter((item:any) => item.id === fileParamToInt)
           .map((filteredItem:any) =>(<> 
   // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    below  filtered  item available   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  
       


<section>

  <div  style={{background: 'green',  height: '50px', display: 'block'}}> below here: extra2 slider (ie fader) from hbs_test5a(project)/extra2(page)   auto with manual slider   
  </div>                                                                                        

  <div  style={{background: 'pink',  height: '25px', display: 'block'}}>  above here: fader imported from vr23/HLR3 (ie fader) from hbs_test5a(project)/extra2(page)   auto with manual slider 
  </div>
  <div  style={{background: 'red',  height: '5px', display: 'block'}}>   
  </div>


<div  style={{background: 'grey',  display: 'block', position: 'relative', height: '100%'  }}>  above here: extra2 slider (ie fader) from hbs_test5a(project)/extra2(page)   auto with manual slider 




    <div className={stylese.div_box} key ={filteredItem['id']}>                   
            
      <p>BBBBBBBB   below filtered  BBBBB</p>   
      <p>type = {filteredItem['type']}   XXXX    city = {filteredItem['city']} </p>
      {/*  <div className={stylese.div_box}>    */}
      <img src={filteredItem['image']} alt="Room Pic"   className={stylese.div_box_img}  />          
      {/*  </div>    */}
      <p>PPPPPPPPPPPPPPPPZZZZZZZZZZZZZZZZZZZZZZZZZZZZ </p>    
    </div>  
   

</div>     



</section>

   {/*   XXXXXXXXXXXsssXXXXXXX    abovefiltered item available    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */}  
                                  </>)     
                )                              
  }            {/*   end roomsArray.filter((item:any) => item.id === fileParamToInt)    */}       
    







<div  style={{background: 'blue',  height: '25px', display: 'block'}}>  above here: extra2 slider (ie fader) from hbs_test5a(project)/extra2(page)   auto with manual slider 
</div>



<div  style={{background: 'purple',  height: '25px', display: 'block'}}>  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
</div>   
{/*<!-- end extra2 slider (ie fader) from hbs_test5a from here  ams_:  auto with manual slide  -->*/}

{/*<!-- end extra2 slider (ie fader) from hbs_test5a from here  ams_:  auto with manual slide  -->*/}


<div  style={{background: 'green',  height: '25px', display: 'block'}}>  above here: extra2 slider (ie fader) from hbs_test5a(project)/extra2(page)   auto with manual slider </div>

{/*<!-- end extra2 slider (ie fader) from hbs_test5a from here  ams_:  auto with manual slide  -->*/}

{/*<!-- end extra2 slider (ie fader) from hbs_test5a from here  ams_:  auto with manual slide  -->*/}

<div style={{height: '600px', width:'800px', border:'20px solid red'}}>

  <div className={stylese.youtube}>
    <div className={stylese.youtubeInner}>
      <iframe width="560" height="315"
          /*  src="https://www.youtube.com/embed/rHqR7Foi3Yw"   */    
          /* src="https://@videos/VID_PKCP.mp4" */
          src={Vid1}  
          allowFullScreen                                      
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
      </iframe> 
    </div>               
  </div> 

</div>

<div  style={{background: 'green',  height: '25px', display: 'block'}}>  above here: import mp4 file, below is google map; </div>


{/* google maps. see remark above  */} 





        {/* <button onClick={() => doClick()}> button </button>   */}
{/*<h2 className={stylesd.zh3}>Room</h2>
  <button>button here</button>  */}   
{/*   
<article  className={stylesd.item1}> 
<a href="/contact/12345" target="_blank" rel="noopener noreferrer">
  <p className={`${stylesd["text"]} ${stylesd["prop_title"]}`}>{city} {type} to let</p>
  <div className={stylesd.div_box}>
    <img src={image} alt="Room Pic"   className={stylesd.div_box_img}  />          
  </div>
</a> 
<div className={stylesd.divx}></div>
</article>  
*/}
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
        </main>
         </div> {/*  end  className={stylesa_x['body1']}>  */}
        </>
           )
}    /*  end const Detail: React.FC<DetailProps> = (props) => {   */  

interface DetailProps {
    [key: string]: any
}

export default Detail;




