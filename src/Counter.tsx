// 外部モジュールからのインポート
import React, { useEffect, useRef , useState } from 'react'

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

  const reset = () => {
    setCount(initialCount);
  }

  const increment = () => {
    setCount((prevState) => prevState + 1);
  }

  const decrement = () => {
    setCount((prevState) => prevState - 1);
  }

  const renderTimes = useRef<number>(0);

  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  })

  const ref = useRef<HTMLInputElement>(null!)

  const focusInput = () => {
     ref.current.focus();
  }
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current}</div>
      <input ref={ref} type="text"/>
      <button onClick={focusInput}>click Me!</button>
    </div>
  )
}

export default Counter;
