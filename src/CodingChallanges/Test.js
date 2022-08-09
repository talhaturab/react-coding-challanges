import { useState } from "react";

const Test = () => {
	const [state, setState] = useState({ a: "apple" });
	const handleClick = () => {
		setState({ b: "banana" });
	};

    console.log(state);

	return (
		<div>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
};

export default Test;
