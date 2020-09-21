// 外部モジュールからのインポート
import React from 'react';

// 内部モジュールからのインポート
import Counter from './Counter';
import CounterWithReducer from './CounterWith';

interface AppProps {
  message? : string;
}

/**
 * @概要 Function Componentに対するアノテーション
 * @説明 「コンポーネント名 : React.FunctionComponent<interface> 」がベストプラクティス
 * @param {AppProps} {message}
 * @returns
 */

const App: React.FunctionComponent<AppProps> = ({message}: AppProps) => {
  return (
  <div>
   <CounterWithReducer />
  </div>
  );
};

// defaultPropsの指定
App.defaultProps = {
  message : 'Hello, defaultProps',
  // description : 'This is App Component'
}

export default App;
