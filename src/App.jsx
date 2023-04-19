import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Cat } from "./Cat";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
       refetchOnWindowFocus: false, 
      },
    },
  });
  return (
    <div className="App">
     <QueryClientProvider client={client}>
      <Cat />
     </QueryClientProvider>
    </div>

  )
}

export default App
