import React, { useState } from 'react'

function HookCounterThree() {

    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h1>First Name : {name.firstName} </h1>
            <h1>First Name : {name.lastName} </h1>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree
