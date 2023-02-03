import React from 'react';
import ListRoster from './ListRoster';
import TeamTwoData from './TeamTwoData';
const playerRoster1 = [{name: 'me'}, {name: 'you'}, {name: 'her'}];
//const playerRoster2 = [{name: 'him'}, {name: 'bob'}, {name: 'jim'}];
const playerRoster2 = TeamTwoData;
const Roster = () => {
    const [listTeamOne, setTeamOne] = React.useState(playerRoster1);
    const [listTeamTwo, setTeamTwo] = React.useState(playerRoster2);
    
    return(
        <>
            <ListRoster data={listTeamOne} />
            <ListRoster data={listTeamTwo} />
        </>
    )    
}
export default Roster;