import Routers from "./Routers";
import { MessageProvider } from "./Components/Common/CustomMessage";
import LoadingPage from "./Components/LoadingPage";
import { useEffect, useState } from "react";
import { GET } from "./Components/ApiFunction/ApiFunction";
import ForgotPassword from "./Components/Forgotpass";

function App() {
  const [data, setDatas] = useState([]);
  const fetch = async () => {
    const result = await GET("http://localhost:3000/getData");
    setDatas(result.data);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <MessageProvider>
      {/* {data?.length > 0 ? <Routers /> : <LoadingPage />} */}
      <ForgotPassword/>
    </MessageProvider>
  );
}

export default App;
