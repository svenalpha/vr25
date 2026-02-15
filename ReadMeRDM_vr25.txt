re a25/vr25: cloned from a24/vr24 ie with scss removed 

below react-datepicker, from: reactdatepicker.com/#example-external-form
footer in css file added to enable size variation 
from:  https://github.com/Hacker0x01/react-datepicker/issues/624#issuecomment-261696513 

npm install react-datepicker --save

import DatePicker from "react-datepicker";   
//import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css"
//(ie apparently not using css modules)


/////////from vr25/about.tsx   /////////////////////////////////////////////////////////////////////////////////
    const [selectedDate,setSelectedDate] = useState<Date | null>(new Date());
    const [startDate,setStartDate] = useState< Date | null>(new Date());
    const [endDate,setEndDate] = useState< Date | null>(null);

    function handleDateChange (date:any)             
        {setSelectedDate(date);              
        }                      
    function onChange (dates :[Date | null, Date | null])                
        {const [start,end] = dates;
         setStartDate(start);   
         setEndDate(end);              
        }    




<h4>calendar starts</h4>
         {/* include footer to node_modules/react-datepicker/dist/react-datepicker.css in ReadMeRDM_vr25.txt
                when replacing node_modules          
           */}
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
            <h4> calendar ends</h4>
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
footer in node_modules/react-datepicker/dist/react-datepicker.css
/*zz start footer added to adjust size
   from: https://github.com/Hacker0x01/react-datepicker/issues/624#issuecomment-261696513 
zz*/

.react-datepicker {
  font-size: 0.75em;           /* changed from 1.0em, important in overall calendar size  */
  border: 10px solid blue;   /* added */
}
.react-datepicker__header {
  padding-top: 0.8em;
  border: 5px solid pink;      /* added */
}
.react-datepicker__month {
  margin: 0.4em 1.0em;
  border: 5px solid green;      /* added */
}
.react-datepicker__day-name, .react-datepicker__day {
  width: 1.9em;
  line-height: 1.9em;
  margin: 0.1666em;
  border: 5px solid brown;    color:red;    /* added */
}
.react-datepicker__current-month {
  font-size: 1.0em;
  border: 5px solid yellow;           /* added */
}
.react-datepicker__navigation {
  top: 1.0em;
  line-height: 1.7em;
  border: 0.45m solid transparent;
}
.react-datepicker__navigation--previous {
  border-right-color: #ccc;
  left: 1.0em;
}
.react-datepicker__navigation--next {
  border-left-color: #ccc;
  right: 1.0em;
}
/*xx end footer added 
xx*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////










re: vr24:
cloned from vr13 originally with the intention of creating a flats to let application. But scss 
global values chose this time to become deprecated, after I had added an extra screen (named Extra). 
Thus vr24 became the template vr13 with extra screen with sass removed. All future projects will have 
this format. Where parts are cloned from pre vr24 projects, the cloned parts will need to be updated. 
Note: 
1) xxx.css and xxx.scss have different notation for remarks (ie /* */ instead of //). (Thus the 
contents  of xxx.scss cannot simply be copied to xxx.css.)
2)index.scss has a line:  #app {text-align: center;  width: 100%;} . This line will not work in its 
replacement index.module.css. This line was removed to index html <head><style> ...<style>xxxx</style>
later: lines removed to: Layout.module.css, :root{ .

3)global values (eg specific colours) are in src/assets/styles/global.module.css. This file is 
imported into other css files (ie @import "@assets/styles/global.module.css";  ) 
4) scss to css file via www.cssportal.com/scss-to-css (in css no nesting methods)
5) automatic creation of slide in /Home leads to annoying movement in menu.



from youtube:https://www.youtube.com/watch?v=H5JXz1RzRTY   11:16 "Unlock Lightning-fast SEO-friendly 
Apps with Vite SSR and React"
from github:gihanrangana/vite-express-ssr-ts  //  Unlock Lightning-fast SEO-friendly Apps with Vite SSR and React
saved in c:\web\00_archives/vite-express-ssr-ts-main

the github example is more built out than the youtube example. It has 3 pages (react-router), helmet). 

stack: "Y@https://vr13.onrender.com/assets/index-6mBp7LUM.js:75:13400\nXw@https://vr13.onrender.com/assets/index-6mBp7LUM.js:77:1042\nE@https://vr13.onrender.com/assets/index-6mBp7LUM.js:77:4233\n"



vr13 is built out vite-express-ssr-ts-main using react, succesful fetch from backend, fetching 
entries from mongo but not C-UD of crud. Successfully uploaded to render.
vr13 is to be left as is.
vr18 to be vr13 built out to include crud, including (react) useContext to update local totals 
to be in synch with remote mongo db.




had this message in render log when deploying: 
" Poetry (1.7.1) is installed now. Great!
To get started you need Poetry's bin directory (/opt/render/project/poetry/bin) in your `PATH`
environment variable.
Add `export PATH="/opt/render/project/poetry/bin:$PATH"` to your shell configuration file.
Alternatively, you can call Poetry explicitly with `/opt/render/project/poetry/bin/poetry`.
You can test that everything is set up by executing:
`poetry --version` "

settings in render
// the following, static website did not work 
Branch:     main
Root Directory:   blank(ie nothing entered)
Build Command:   npm install
Publish Directory:   ./dist/app/client



vr13 successful deployment with successful api facility
in render as "web service"     
  branch =  main   
  root directory = blank     
  Build Command =   npm install; npm run build       
  Start Command  =  npm run serve       





to do:
separate file for data to be imported. (ie /folks).
see youtube see 6:00 of  poXp9uP8TfM  19:50   "How to deploy frontend and backend on 
Render in the same folder?"                  


using array in xxx.map  do <div key={dat["id"]}>  <h6>{dat['title']}  {dat['reps']} {dat['load']}</h6> </div>  
workoutControllers changed to .ts from .js and changed (req,res) to (req:any,res:any)




         <div>
            {
            users.map(user => (
                                    <div key={user.id}> 
                                       <h4>{user.username}</h4>
                                       <h4>{user.city}</h4>
                                     </div>  
                              )         
                      )                 

              }
         </div> 



 {roomsArray.filter((item:any) => item.id === fileParamToInt)
           .map((filteredItem:any) =>(
   // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    below  filtered  item available   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  
          
    <div className={stylese.div_box} key ={filteredItem['id']}> type = {filteredItem['type']} city = {filteredItem['city']} 
    <p>BBBBBBBB   below filtered  BBBBB</p>   
    
    {/*  <div className={stylese.div_box}>    */}
        <img src={filteredItem['image']} alt="Room Pic"   className={stylese.div_box_img}  />          
    {/*  </div>    */}
    <p>ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ </p>    
    </div>  
    
    // XXXXXXXXXXXXXXXXXX    abovefiltered item available    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                     )   
                )                              
  }            {/*   roomsArray.filter((item:any) => item.id === fileParamToInt)    */}       
    






