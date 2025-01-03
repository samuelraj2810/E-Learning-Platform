import Routers from "./Routers";
import { MessageProvider } from "./Components/Common/CustomMessage";
import LoadingPage from "./Components/Student/Home/LoadingPage";
import { GET } from "./Components/ApiFunction/ApiFunction";

function App() {

  return (
    <MessageProvider>
      <Routers/>
    </MessageProvider>
  );
}

export default App;
