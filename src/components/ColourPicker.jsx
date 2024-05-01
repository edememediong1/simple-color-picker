import { useState } from "react"

export default function ColourPicker(){
    const [colour , setColour] = useState('#FFFFFF')

    return(
        <main className="main-card">
            <h1>Colour Picker</h1>
            <article  className="colour-card" style={{backgroundColor: colour}}>
            </article>
            <p>The Colour is {colour}</p>
            <label>Pick Colour</label>  
            <input type="color"  value={colour} onChange={(e) => setColour(e.target.value)}/>
            

        </main>
    )
}