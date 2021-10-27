import logo from './logo.svg';
import './App.css';

function App(props) {

  const user = props.user

  return (
    <div className="user-profile">
      <a href={user.url}>
        <img src={user.icon} alt="test"/>
        <h2>{user.name}</h2>
      </a>
    </div>
  );
}

export default App;
