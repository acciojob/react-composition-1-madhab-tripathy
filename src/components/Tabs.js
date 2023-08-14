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
                        return <li onClick={()=>{showMessage(tab.content)}} key={index}>{tab.title}</li>
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