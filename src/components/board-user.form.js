import React, {useEffect, useState, setState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThankYouPage from './board-user.thankyou'
import axios from "axios";

// const field1 = [""]
// const field2 = [""]
// const field3 = [""]
// const field4 = [""]
// const field5 = [""]
// const field6 = [""]
// const field7 = [""]
// const field8 = [""]

function ConsumerPage(){
       const [field1data, setfield1data] = useState("")
       const [field2data, setfield2data] = useState("")
       const [field3data, setfield3data] = useState("")
       const [field4data, setfield4data] = useState("")
       const [field5data, setfield5data] = useState("")
       const [field6data, setfield6data] = useState("")
       const [field7data, setfield7data] = useState("")
       const [field8data, setfield8data] = useState("")
       const [page, setPage] = useState(0)
       
       let field1name = ["Location/Address"]
       let field2name = ["Interior/Exterior?"]
       let field3name = ["When do you want the project to start?"]
       let field4name = ["Brief description of project: (rooms & surfaces to be painted)" ]
       let field5name = ["Drop"]
       let field6name = ["Preferred Paint"]
       let field7name = ["Drop"]
       let field8name = ["Dropdown w/ I want to purchase paint or painter for me."]
        

    // if they select they want to purchase their own paint, say you will receive a discounted price, will likely be ~12.5%. Contractors can get additional 10% less than that
    // extra discount by painter might be $100 on a $1000 paint cost
      
   
   
   // aura, regal, ben, advanced, cabinet coat, satin & pervo

   const API_URL = "https://bmp-backend-nodemysql.herokuapp.com/api/";
 
    




       const pagedata = ({
        "Location/Address": field1data,
        "Interior/Exterior?": field2data,
        "When do you want the project to start?": field3data,
        "Brief description of project? (rooms to be painted, as much detail as you can provide)": field4data,
        "Is this an apartment or house?": field5data,
        "Preferred Paint": field6data,
        "Estimated square footage?": field7data,
        "Who will be ordering the paint?": field8data
    }) 
    function createProject() {
        axios.post(API_URL + "project/create", {
            location: field1data,
            typeofproject: field2data,
            timeline: field3data,
            description: field4data
        })
    }



        const incrementpage = () => {
            if (page == 0) {

          
           setPage(prevCount => prevCount +1);


        }
        if (page == 1) {

          
            setPage(prevCount => prevCount +1);

         }


        };
        const decrementpage = () => {
            if (page == 0) {

          
           setPage(prevCount => prevCount -0);

        }
        else {

          
            setPage(prevCount => prevCount -1);

         }

        };

        return (
            
            <div style={{paddingTop: "20vh"}}>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Ben Moore Painter</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
            {page == 2 ?  
                <ThankYouPage name={field1data} >
                    </ThankYouPage> :
                    
            


            <div className="consumerbox">
            <form className="box">
                <div className="field">
                    <label className="label">
                        {page == 0 ? field1name[page] : field5name[0]}
                    
                
                </label>
                    <div className="control">
                    <input className="input" 
                    type="text" 
                    placeholder="123 Example Street, Example Town 00000" 
                    value={page == 0 ? field1data : field5data}
                    onChange={page == 0 ? e => setfield1data(e.target.value) : e => setfield5data(e.target.value)}   
                    />
                    </div>
                </div>
             <div className="field">
                    <label className="label">{page == 0 ? field2name[page] : field6name[0]}</label>
                    <div className="control">
                    <input className="input" 
                    type="text" 
                    placeholder="example" 
                    value={page == 0 ? field2data : field6data}
                    onChange={page == 0 ? e => setfield2data(e.target.value) : e => setfield6data(e.target.value)}
                    
                    
                    />
                    </div>
                </div>
                <div className="field">
                    <label className="label">{page == 0 ? field3name[page] : field7name[0]}</label>
                    <div className="control">
                    <input className="input" 
                    type="text" 
                    placeholder="ASAP" 
                    value={page == 0 ? field3data : field7data}
                    onChange={page == 0 ? e => setfield3data(e.target.value) : e => setfield7data(e.target.value)}                   
                    />
                    </div>
                </div>
                <div className="field">
                    <label className="label">{page == 0 ? field4name[page] : field8name[0]}</label>
                    <div className="control">
                    <input className="input" 
                    type="text" 
                    placeholder="Cabinets, trims, whole house." 
                    value={page == 0 ? field4data : field8data}
                    onChange={page == 0 ? e => setfield4data(e.target.value) : e => setfield8data(e.target.value)}/>
                    
                    </div> 

                    {page ==1 ? (
                        <div>
                        <span className="icon">
                            <a onClick={decrementpage} style={{marginTop: "2vw"}}>
                            <FontAwesomeIcon icon={faArrowLeft}>
                            </FontAwesomeIcon>
                            </a>


                        </span>
 
                </div>
                    ) 
                    :                 
                    <span className="icon" style={{paddingLeft: "55vw", marginTop: "1vw"}}>
                <a onClick={incrementpage}>
                <FontAwesomeIcon icon={faArrowRight}>
                    

                    

                </FontAwesomeIcon>
                </a>
                    </span>}
                </div>

                </form>
                {page == 1 ? 
                <a onClick={incrementpage, createProject}>
                    <button className="button is-primary">Submit Project</button>
                </a>
                    : null}
                </div>}

          </div>       
            

           


)}
  
   
    


export default ConsumerPage;

