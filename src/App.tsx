import React,{FC} from 'react';
import logo from './logo.svg';
import './App.css';
import Page from "./containers/Page";
import Search from './components/Search';

const App:FC =() =>{
  return(
      <Page>
        <Search></Search>
      </Page>
  )
}

export default App;
