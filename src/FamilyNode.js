import React from 'react'

function FamilyNode(props){
    console.log(props);
    return (
        <div className='cell' key={props.node.id}>
            {props.node.id}
        </div>
    )
}

export default FamilyNode;