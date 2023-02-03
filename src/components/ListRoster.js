import React from "react";

const ListRoster = ({data}) => {
    return(
        <>
            <ul>{data.map((row, index) => <li>{row.name}</li>)}</ul>
        </>
    )
}

export default ListRoster;