// == Import
import './app.scss';

// import composants
import Form from 'src/components/Form';
import Messages from 'src/components/Messages';

// == Composant
function App() {
  return (
    <div className="app">
      <Messages />
      <Form />
    </div>
  );
}

// == Export
export default App;
