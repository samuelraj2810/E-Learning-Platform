import Routers from "./Routers";
import { MessageProvider } from "./Components/Common/CustomMessage";
import LoadingPage from "./Components/LoadingPage";

function App() {
  return (
    <MessageProvider>
      {/* <LoadingPage/> */}
      <Routers />
    </MessageProvider>
  );
}

export default App;
