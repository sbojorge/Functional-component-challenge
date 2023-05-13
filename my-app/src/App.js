import css from "./App.module.css";
// import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';


function App() {
  return (
    <div className={css.App}>
      <Content />
      <NavBarForm />
      <Sidebar />
     
    </div>
  );
}

export default App;