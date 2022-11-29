import React from 'react'
import Card from './Card/Card'

const CardContainer = ({ post }) =>{
    return(
        <div className="flex flex-1 flex-col  items-center">
            <Card post={post} />
        </div>
    )
}

export default CardContainer;