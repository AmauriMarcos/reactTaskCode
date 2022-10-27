import React from 'react';
import List from './components/repoList/List';
import WrapperComponent from './HOC/wrapper';

function App() {
  const [isExpanded, setExpanded] = React.useState(false);
  const ExpandedList = WrapperComponent(List);

  const handleButtonFunctionality = () => {
    setExpanded(prevState => !prevState)
  }

  return (
    <div className="App">
        <ExpandedList isExpanded={isExpanded}/>
        <button onClick={handleButtonFunctionality}>{isExpanded ? 'See less' : 'See more'}</button>
    </div>
  );
}

export default App;
