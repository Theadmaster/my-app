import logo from './logo.svg';
import icp from './ICP-icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload 111.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className="copy" data-v-1aac2bb8="">
        ©2024 Gert的生活空间 gertyt.cn | 
        <a href="http://beian.miit.gov.cn/" target="_blank" rel='noreferrer' className="a1">
        <img src={icp} alt="ICP" class="ICP" />
        浙ICP备2023007501号</a>
      </p>
    </div>
  );
}

export default App;
