import React, { useState, useEffect } from "react";

function Time() {
  const [indiaTime, setIndiaTime] = useState("");
  const [usTime, setUsTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = { timeZone: "Asia/Kolkata" };
      const indiaTimeString = now.toLocaleTimeString("en-US", options);
      setIndiaTime(indiaTimeString);

      options.timeZone = "America/New_York";
      const usTimeString = now.toLocaleTimeString("en-US", options);
      setUsTime(usTimeString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <p>Indian Standard Time : {indiaTime} </p>
         <p>U.S. Standard time : {usTime} </p>
    </div>
  );
}

export default Time;




// import React, { useState, useEffect } from 'react';

// function Time() {
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
//   const [UStime, setUStime] = useState(new Date().toLocaleTimeString("en-US", options));

//   useEffect(() => {
//     options.timeZone = "America/New_York";
//     const interval = setInterval(() => {
//       setUStime(new Date().toLocaleTimeString("en-US", options));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date().toLocaleTimeString());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <p>Indian Standard Time: {currentTime}</p>
//       <p>Us Eastern Time:{UStime}</p>
//     </div>
//   );
// }

// export default Time;
