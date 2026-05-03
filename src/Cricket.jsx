import { useState } from "react"

export default function Cricket(){
    const [runs, setRuns]= useState(0)
    const [fours, setFour]=useState(0)
    const [sixes, setSix]=useState(0)

    let handleSingles = () =>{
        let newRuns = runs+1;
        setRuns(newRuns)
    }
    let handledoubles = () =>{
        let newRuns = runs+2;
        setRuns(newRuns)
    }
    let handleTriples = () =>{
        let newRuns = runs+3;
        setRuns(newRuns)
    }
    let handleFours = () =>{
        let newRuns = runs+4;
        setRuns(newRuns)
        setFour(fours+1)
    }
    let handleSixes = () =>{
        let newRuns = runs+6;
        setRuns(newRuns)
        setSix(sixes+1)
    }

    const cricketStyle={
        border: '2px solid yellow',
        padding: '20px'
    }

    const btnsStyle={
        display:"flex",
        flexDirection: 'row',
        gap: '5px',
        justifyContent: "center",
        alignItems: "center",
    }

    const btnStyle={
        padding:'5px 20px',
        fontSize: '16px'
    }
    return(
        <section style={cricketStyle}>
            <h1>Batsman Information</h1>
            <br />
            <h2>Runs : {runs}</h2>
            <h3>Fours Hit: {fours} ,   Sixes Hit: {sixes}</h3>
            <br />
            <div style={btnsStyle}>
                <button onClick={handleSingles} style={btnStyle}>Single</button>
                <button onClick={handledoubles} style={btnStyle}>Double</button>
                <button onClick={handleTriples} style={btnStyle}>Triple</button>
                <button onClick={handleFours} style={btnStyle}>Four</button>
                <button onClick={handleSixes} style={btnStyle}>Six</button>
            </div>
        </section>
    )
}