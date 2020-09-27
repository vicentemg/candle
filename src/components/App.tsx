// @flow
import * as React from 'react';
type Props = {
    buttonName: string
}

function App(props: Props) {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clickeame</button>
            <div> {count}</div>
        </div>
    );
};
export default App;