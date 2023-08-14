import React from "react";
const Tabs = ({tabs})=>{

    function showMessage(content){
        let message = document.getElementById("message");
        message.innerText = content;
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
            <p id="message"></p>
        </div>
    );    
};

export default Tabs;