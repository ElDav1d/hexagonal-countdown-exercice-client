import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CountdownList } from "./countdowns/CountdownList/CountdownList";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <header>
          <h1>A list of countdowns</h1>
        </header>
        <main>
          <CountdownList />
        </main>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
