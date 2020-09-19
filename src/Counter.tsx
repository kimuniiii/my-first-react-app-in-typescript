// 外部モジュールからのインポート
import React, { useState } from 'react'

/**
 * @概要 Counterコンポーネント
 * @状態 { value }に1を足す / 引く
 * @インタラクション
 * - +1ボタンがクリックされたら{ value }に1を足す
 * - -1ボタンがクリックされたら{ value }から1を引く
 * @params
 * @returns
 */
const Counter: React.FC<{}> = () => {
  const initialCount : any = 0;
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  }

  const decrement = () => {
    setCount((prevState) => prevState - 1);
  }

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}

export default Counter;
