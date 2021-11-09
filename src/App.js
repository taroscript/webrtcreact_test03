import logo from './logo.svg';
import './App.css';

function App(props) {

  const user = props.user

  return (
    <div className="row">
      <div class="col-md-6 col-xl-3">
      <div className="user-profile">
      <a href={user.url}>
        <img src={user.icon} alt="test"/>
      </a>
    </div>
      </div>
    </div>
    
  );
}

export default App;
