import React from "react";

import "./App.css";
import Counter from "./useState/Counter";
import MemoDemo from "./useMemo/memoDemo";
import CallbackDemo from "./useCallback/CallBackDemo";
import RefDemo from "./useRef/RefDemo";
import LayoutDemo from "./layoutDemo/LayoutDemo";
import Countries from "./dataFetching/Countries";
import UseEffectCounter from "./useEffect/UseEffectCounter";
import UseEffectNameState from "./useEffect/UseEffectNameState";
import UseEffectNumber from "./useEffect/UseEffectNumber";
import UseEffectToggle from "./useEffect/UseEffectToggle";
import CallbackUI from "./useCallback/CallbackUI";
import Header from "./render/Header";
import Footer from "./render/Footer";
import useRenderTimes from "./render/UseRenderTimes";
import DemoReducer from "./useReducer/DemoReducer";
import Square from "./tic-toc/Square";
import Board from "./tic-toc/Board";
import Game from "./tic-toc/Game";
import FilterableProductTable from "./ui/mock/productsTable/FilterableProductTable";

function App() {
  // const count = useRenderTimes();
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <MemoDemo /> */}
      {/* <CallbackDemo /> */}
      {/* <RefDemo /> */}
      {/* <LayoutDemo /> */}
      {/* <Countries /> */}
      {/* <UseEffectCounter /> */}
      {/* <UseEffectNameState /> */}
      {/* <UseEffectNumber /> */}
      {/* <UseEffectToggle /> */}
      {/* <CallbackUI /> */}
      {/* <Header />
      <main>
        <p>Hey, nice to see you again 👋🏼</p>
        <p>The App component has re-rendered {count} times</p>
      </main>
      <Footer /> */}
      {/* <DemoReducer /> */}
      {/* <Square /> */}
      {/* <Board /> */}
      {/* <Game /> */}
      <FilterableProductTable />
    </div>
  );
}

export default App;
