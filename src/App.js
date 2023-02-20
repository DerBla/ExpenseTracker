import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { History } from "./components/History";
import { AddNewTransaction } from "./components/AddNewTransaction";

import { GlobalProvider } from "./context/GlobalState"; // with the data that can be referenced by all the elements inside it

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <History />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
