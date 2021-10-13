import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
// import { Provider } from ''


function App() {
  return (
    <Router>
      <Route path='/' exact component={Landing} />
    </Router>
  );
}

export default App;
