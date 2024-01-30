import { useState } from 'react'

const Card = () => {
    const [state, updateState] = useState()

//what happens when we update state from state hook in a react component?
    //to render it again with updated data
    updateState()
}