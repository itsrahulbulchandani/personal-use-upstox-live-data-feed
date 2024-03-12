import React, { useEffect, useState } from "react";
import proto from "./marketDataFeed.proto";
import { Buffer } from "buffer";
const protobuf = require("protobufjs");

// Initialize Protobuf root
let protobufRoot = null;
const initProtobuf = async () => {
  protobufRoot = await protobuf.load(proto);
  console.log("Protobuf part initialization complete");
};

// Function to get WebSocket URL
const getUrl = async (token) => {
  const apiUrl = "https://api-v2.upstox.com/feed/market-data-feed/authorize";
  let headers = {
    "Content-type": "application/json",
    Authorization: "Bearer " + token,
  };
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: headers,
  });
  if (!response.ok) {
    console.log(response, headers);
    throw new Error("Network response was not ok");
  }
  const res = await response.json();
  return res.data.authorizedRedirectUri;
};

// Helper functions for handling Blob and ArrayBuffer
const blobToArrayBuffer = async (blob) => {
  if ("arrayBuffer" in blob) return await blob.arrayBuffer();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject();
    reader.readAsArrayBuffer(blob);
  });
};

// Decode Protobuf messages
const decodeProfobuf = (buffer) => {
  if (!protobufRoot) {
    console.warn("Protobuf part not initialized yet!");
    return null;
  }
  const FeedResponse = protobufRoot.lookupType(
    "com.upstox.marketdatafeeder.rpc.proto.FeedResponse"
  );
  return FeedResponse.decode(buffer);
};

// MarketDataFeed component
function MarketDataFeed({ token, backButton }) {
  const [isConnected, setIsConnected] = useState(false);
  const [feedData, setFeedData] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [commodityValue, setCommodityValue] = useState("427413");

  // Establish WebSocket connection
  useEffect(() => {
    const connectWebSocket = async (token) => {
      try {
        const wsUrl = await getUrl(token);
        const ws = new WebSocket(wsUrl);

        ws.onopen = () => {
          setIsConnected(true);
          console.log("Connected");
          const data = {
            guid: "someguid",
            method: "sub",
            data: {
              mode: "ltpc",
              instrumentKeys: [`MCX_FO|${commodityValue}`],
            },
          };
          ws.send(Buffer.from(JSON.stringify(data)));
        };

        ws.onclose = () => {
          setIsConnected(false);
          console.log("Disconnected");
        };

        ws.onmessage = async (event) => {
          const arrayBuffer = await blobToArrayBuffer(event.data);
          let buffer = Buffer.from(arrayBuffer);
          let response = decodeProfobuf(buffer);
          setFeedData((currentData) => {
            // If there are at least two items, keep only the last one before adding the new one
            const newData =
              currentData.length >= 2 ? currentData.slice(-4) : currentData;
            return [...newData, JSON.stringify(response)];
          });
        };

        ws.onerror = (error) => {
          setIsConnected(false);
          console.log("WebSocket error:", error);
        };

        return () => ws.close();
      } catch (error) {
        console.error("WebSocket connection error:", error);
      }
    };

    initProtobuf();
    connectWebSocket(token);
  }, [token, commodityValue]);

  let ltt;
  let lastTraded;
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
      {isConnected && (
        <div style={{ display:'flex', justifyContent:'center' }}>
          <textarea
            value={textValue}
            onChange={(data) => {
              setTextValue(data.target.value);
            }}
            className="app-container-text-area"
          ></textarea>
          <button
            onClick={() => {
              setCommodityValue(textValue);
            }}
            style={{ maxHeight: "100px" }}
          >
            SET VALUE
          </button>
        </div>
      )}
      <div className="feed-container">
        <div className="header-section">
          <h1>Market Feed</h1>
          <h3
            className={`status ${isConnected ? "connected" : "not-connected"}`}
          >
            Status: <span>{isConnected ? "Connected" : "Not Connected"}</span>
          </h3>
          {!isConnected && (
            <button style={{width:'100%', maxWidth: "200px" }} onClick={() => backButton()}>
              Go Back
            </button>
          )}
        </div>
        {isConnected && (
          <div className="feed-section">
            <div className="title">Feed</div>
            <div>
              {feedData?.map((data, index) => {
                // Only process and render the last two items
                if (index) {
                  let datas = JSON.parse(data);
                  let dataa = datas["feeds"][`MCX_FO|${commodityValue}`].ltpc.ltp;
                  let qty =
                    parseInt(datas["feeds"][`MCX_FO|${commodityValue}`].ltpc.ltq) / 1250;
                  let lttt = ltt === datas["feeds"][`MCX_FO|${commodityValue}`].ltpc.ltt;
                  ltt = datas["feeds"][`MCX_FO|${commodityValue}`].ltpc.ltt;
                  let lastTradedPnewHigh =
                    lastTraded > datas["feeds"][`MCX_FO|${commodityValue}`].ltpc.ltp;
                  lastTraded = datas["feeds"][`MCX_FO|${commodityValue}`].ltpc.ltp;
                  return (
                    <div key={index} className="feed-item">
                      {!lttt
                        ? !lastTradedPnewHigh
                          ? `HIGH ${dataa} - [${qty}]`
                          : `LOW ${dataa} - [${qty}]`
                        : ""}
                    </div>
                  );
                }
                // If not one of the last two items, do not render anything
                return null;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MarketDataFeed;
