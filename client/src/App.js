import Routers from "./Routers";
import { MessageProvider } from "./Components/Common/CustomMessage";
import LoadingPage from "./Components/LoadingPage";
import { useEffect, useState } from "react";
import { GET } from "./Components/ApiFunction/ApiFunction";

function App() {
  const [data, setDatas] = useState([]);
  useEffect(()=>{
    const result = GET("http://localhost:3000/getData")
    setDatas(result.data)
  },[])
  console.log(data)
  return (
    <MessageProvider>
      {/* {data.length === 0 ? <Routers /> : <LoadingPage />} */}
      <Routers />
    </MessageProvider>
  );
}

export default App;
