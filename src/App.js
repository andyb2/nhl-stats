import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import { Provider } from 'react-redux'
import store from './store/store'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={Landing} />
      </Router>
    </Provider>
  );
}

export default App;
