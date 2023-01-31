// == Import
import './app.scss';

// import composants
import Form from 'src/components/Form';
import Message from 'src/components/Message';

// == Composant
function App() {
  return (
    <div className="app">
      <Form />
      <Message />
    </div>
  );
}

// == Export
export default App;
