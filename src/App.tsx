import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CountdownList } from "./countdowns/CountdownList/CountdownList";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <header className="text-center">
          <h1 className="font-bold text-5xl text-blue-600 mb-8">
            A list of countdowns to 2024
          </h1>
        </header>
        <main>
          <section className="px-2 md:px-4 lg:px-12">
            <CountdownList />
          </section>
        </main>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
