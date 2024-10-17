import { useState } from "react"

export default function Team () {
    const [teamCount, setTeamCount] = useState(11);
    const handleAdd = () => {
        const newTeamCount = teamCount + 1;
        setTeamCount(newTeamCount);
    }

    const handleRemove = () => {
        setTeamCount(teamCount - 1);
    }

    const teamStyle = {
        padding: '16px',
        margin: '10px',
        border: '2px solid purple',
        borderRadius: '10px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {teamCount}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}