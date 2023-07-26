import { APP_TITLE } from '@my-app/common';
import * as React from 'react';

export function App(): React.ReactElement {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>部署成功 {APP_TITLE}!</h1>
      <p>
        Product inspired by https://github.com/halftheopposite/tutorial-app
      </p>

      <p>Current count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}