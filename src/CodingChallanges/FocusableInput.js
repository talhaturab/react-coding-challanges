import React from "react";

function FocusableInput() {
	const inputRef = React.useRef(null);
	React.useEffect(() => {
		inputRef.current.focus();
	}, []);
	return <input ref={inputRef} />;
}

export default FocusableInput;
