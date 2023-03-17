import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({name}) {
    console.log(name)
    return (
        <div>
            {name && `Welcome - ${name}`}
        </div>
    )
}
