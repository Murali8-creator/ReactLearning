import { useState } from "react";
import Output from "./Output";

const Greeting = () => {

    const [changedText, setChangedText] = useState(false);

    function changeTextHandler() {
        setChangedText(true);
    }

    return (
        <div>
            <h2>Hello world!</h2>
            {!changedText && <Output>It's good to see you!</Output>}
            {changedText && <Output>Changed</Output> }
            <button onClick={changeTextHandler}>change</button>
        </div>
    );
}

export default Greeting;