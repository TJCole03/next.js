import { useState } from 'react'

const Card = () => {
    const [state, updateState] = useState()

//what happens when we call updateState from state hook in a react component?
    //it renders it again with updated data
    updateState()
}

/* 
const count = () => {
    let n = 1
    n++
}

count()
count()
count()

what is output??

Output is 2; n = 2

When the function is called, the line runs that sets num to one, 
and increments it, therefore resulting in n = 2; 
Since there is nothing keeping track of the result, 
the value of n will always revert back to 1 after the function runs.

So in order to do that, you have to tell React that you're interested in
keepingtrack of this thing, and that's where hooks come in.So that's because
React is gonna just call your function,and it's just gonna just initialize it.
So, you have to tell React, hey, I'm interested in keeping track of this 
thing.And React's like, cool, yeah, you could tell me that. Just make sure 
you use this hook, andyou can tell me that by using this function that I give 
you, right?If you give me this function, or I'm sorry, if you call this 
function that Igive you, this function right here, that's you telling React 
that, yeah,change that thing that I told you to keep track of.And React's 
like, cool, here's that thing you told me to keep track of, right?So this 
is a long way of saying with server components,none of this matters, you 
can just forget about it.

*/