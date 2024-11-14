import Routers from "./Routers";
import { MessageProvider } from "./Components/Common/CustomMessage";

function App() {

  return (
    <MessageProvider>
      <Routers/>
    </MessageProvider>
  );
}

export default App;
