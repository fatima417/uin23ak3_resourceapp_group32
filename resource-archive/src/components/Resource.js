import React, { useEffect, useState } from "react"
import {resources} from "../resources/ressurser"

const Resource = ({category, title})=>{


    return (
        <>
            <h2>{title}</h2>
            <ul>
                {resources.map((element, index) => (
                    <>
                        
                        { element.category== category &&
                        
                        <li key={index}><a href={element.url} key={index}>{element.title}</a></li>
                        }
                        
                    </>
                    
                ))}
            </ul>

                
        </>
    )
}

export default Resource;