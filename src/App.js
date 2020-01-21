//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function Dynamic(data){
  return (
    <div className = {data.team}>
      <h2 className = {data.team + '__name'}>{data.name}</h2>
      <div className = {data.team + '__score'}>{data.teamScore}</div>
    </div>
  )
}


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeCount, setHomeCount] = useState(0);
  const [awayCount, setAwayCount] = useState(0);



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
         
        <Dynamic team="home" teamScore={homeCount} name="lions" />
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            
         
          <div className="timer">00:03</div>

        <Dynamic team="away" teamScore={awayCount} name="tigers" />
        
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick ={() => setHomeCount(homeCount + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick ={() => setHomeCount(homeCount + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick ={() => setAwayCount(awayCount + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick ={() => setAwayCount(awayCount + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
