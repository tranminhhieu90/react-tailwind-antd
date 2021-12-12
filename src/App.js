import "./styles/index.less";
import { Button } from "antd";
import { useSelector } from "react-redux";
import CounterFeature from "./containers/Counter";
function App() {
 
  return (
    <div className="flex mt-4">
      <div>div1</div>
      <div>div2</div>
      <Button type="primary">Button</Button>
      <CounterFeature/>
    </div>
  );
}

export default App;
