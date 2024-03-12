import OrderDataFeed from "./socket/OrderDataFeed";
import MarketDataFeed from "./socket/MarketDataFeed";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  //const auth_token = "eyJ0eXAiOiJKV1QiLCJrZXlfaWQiOiJza192MS4wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiI2RkFNMzQiLCJqdGkiOiI2NWYwODQ4MzcyY2QwMzM0ODA5ODcxMjYiLCJpc011bHRpQ2xpZW50IjpmYWxzZSwiaXNBY3RpdmUiOnRydWUsInNjb3BlIjpbImludGVyYWN0aXZlIiwiaGlzdG9yaWNhbCJdLCJpYXQiOjE3MTAyNjEzNzksImlzcyI6InVkYXBpLWdhdGV3YXktc2VydmljZSIsImV4cCI6MTcxMDI4MDgwMH0.neOom64XepEfZdogv_oRbwF-bxNLnvcvMjT0ZLPni8g";
  const [auth_token, setAuthToken] = useState("");
  const [textValue, setTextValue] = useState("");
  const [backButtonValue, setBackButtonValueP] = useState(true);

  useEffect(()=>{
    if(backButtonValue){
      setAuthToken("");
      setTextValue("");
    }
  },[backButtonValue]);
  console.log(auth_token,backButtonValue,textValue)
  return (
    <div className="app-container">
      {auth_token && !backButtonValue ? (
        <MarketDataFeed token={auth_token} backButton={()=>{setBackButtonValueP(true);}}/>
      ) : (
        <div style={{ display: "flex", justifyItems:"center" }}>
          <textarea value={textValue} onChange={(data)=>{setTextValue(data.target.value);}} className="app-container-text-area"></textarea>
          <button onClick={()=>{setAuthToken(textValue);setBackButtonValueP(false)}} style={{ maxHeight: "100px" }}>SET AUTH TOKEN{auth_token}</button>
        </div>
      )}
      {/* <OrderDataFeed token={auth_token} /> */}
    </div>
  );
}

export default App;
