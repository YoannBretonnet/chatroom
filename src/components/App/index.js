// == Import
import './app.scss';

// import composants
import Form from 'src/components/Form';
import Messages from 'src/components/Messages';
import Settings from 'src/components/Settings';

// == Composant
function App() {
  return (
    <div className="app">
      <Messages />
      <Form />
      <Settings />
    </div>
  );
}

// == Export
export default App;
