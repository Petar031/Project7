import React from 'react';
import TableMake from "./TableMake";

const Vehicle = function(props)
{
    console.log(props);
    return (
        <div>
            <TableMake {...props} />
        </div>
    );
}
export default Vehicle; 
