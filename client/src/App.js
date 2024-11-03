import { useEffect, useState } from "react";
import Routers from "./Routers";
import { MessageProvider } from "./Components/Common/CustomMessage";
import LoadingPage from "./Components/LoadingPage";
import { GET } from "./Components/ApiFunction/ApiFunction";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await GET("http://localhost:3000/getData");
      setData(result?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MessageProvider>
      {isLoading ? <LoadingPage /> : <Routers data={data} />} {/* Pass data to Routers if needed */}
    </MessageProvider>
  );
}

export default App;
