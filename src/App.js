import './App.css';
import 'antd/dist/antd.css';
import {Fragment} from 'react';
import Header from './Components/Header';
import LoginForm from './Components/Form';
import Image from './Components/Image';
function App() {
  return (
    <Fragment>
<Header></Header>
<LoginForm></LoginForm>
<Image></Image>
</Fragment>
  );
}

export default App;
