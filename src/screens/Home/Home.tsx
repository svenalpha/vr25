import React, { useEffect, useState } from 'react';
import reactLogo from '@assets/react.svg'
import viteLogo from '/vite.svg'
import { useLoaderData } from 'react-router-dom';
import useHelmet from '@hooks/useHelmet';
import axios from "axios";
//import styles from './Home.module.scss';
import styles from './Home.module.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home: React.FC<HomeProps> = (_props) => {
    const [legend, setLegend] = useState("  here is useState original legend");
    const [legend1, setLegend1] = useState(" proxy1 didn't work. legend1  here is useState original legend1 ");
    const [count, setCount] = useState(0)
    const data = useLoaderData()

    const helmet = useHelmet()

    useEffect(() => {
        helmet.setTitle(`Home Page - Vite SSR + React`)
    }, [helmet])

    useEffect(() => {
        axios.get('/rrr/tsmessage').then((response) => {    // "/api"     
        //console.log(" useEffect, response data = ",response.data)    
         setLegend(response.data);
                                                      }
                                        )               
                    }, [])


  //  useEffect(() => {
  //      axios.get('/api/proxy1').then((response) => {    // "/api"     
  //      //console.log(" useEffect, response data = ",response.data)    
  //      setLegend1(response.data);               
  //                                                  }            
  //                                   )               
  //                  }, [])
var v1:any,v2:any;
const div_click=()=>
  {/*    const c1:any = window.document.querySelector(`.${styles['divxx']}`);  works  */
   /* v1 = window.document.querySelector(`.${styles['divxx']}`);      works  */
   /*  v1 = window.document.getElementById(`${styles['divid']}`);   works  */    
   v1 = window.document.querySelector(`.${styles['divxx']}`);     
   if (v1)
    {console.log("in div_click.xxx v1 non null. v1 =",v1);         
     v2 = window.getComputedStyle(v1);
     if (v2.visibility === "visible")
      {console.log("in div_click:  visible,    v2.visibility = ",v2.visiblity);  
      } else     
      {console.log("in div_click.xxx v2 not visible,  v2.visibility = ",v2.visiblity);  
      }                  
     console.log("v2    re v2 (style1)  =",v2);                 
    } else                                         
    {console.log("in div_click. v1 null. ");                     
    }                          
  }  /* end  const div_click=()=>    */

    return (
        <>
            <div>
                <h4>....vr25....no.06....14:07....19/02/2026....</h4>
                <p>{legend}</p>
                <p>{legend1}</p>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className={styles.logo} alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={styles.react} alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

<div  className={styles['divxx']}   id={styles['divid']}   >
 
</div>
<button onClick={()=>div_click()}>button here</button>  

        </>
         

    )
}

interface HomeProps {
    [key: string]: any
}

export default Home;