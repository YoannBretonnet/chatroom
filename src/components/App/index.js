// == Import
import './styles.css';

import Form from '../Form';
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
