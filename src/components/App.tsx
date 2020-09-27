// @flow
import * as React from 'react';

function App() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clickeame</button>
            <div> {count}</div>
        </div>
    );
};
export default App;