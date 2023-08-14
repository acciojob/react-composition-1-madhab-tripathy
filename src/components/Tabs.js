import React,{useState} from "react";
const Tabs = ({tabs})=>{
    let [clickTab, setClickTab] = useState("");

    function showMessage(content){
        setClickTab(content);
    }
    return (
        <div>
            <ul>
                {
                    tabs.map((tab,index)=>{
                        return <li onClick={()=>{showMessage(tab.contents)}} key={index}>{tab.titles}</li>
                    })
                }
            </ul>
            {
                clickTab && <p>{clickTab}</p>
            }
        </div>
    );    
};

export default Tabs;