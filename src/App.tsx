import React from 'react';

interface AppProps {
  message? : string;
}

//「Function Component」に対するアノテーションのベストプラクティス
const App: React.FunctionComponent<AppProps> = ({message}: AppProps) => {
  return (
  <div>
    <h1>{message}</h1>
    <h2>React Starter Kit in TypeScript</h2>
  </div>
  );
};

App.defaultProps = {
  message : 'Hello, defaultProps',
  // description : 'This is App Component'
}

export default App;
