// The Message component contains an anchor element and a paragraph below the anchor. Rendering of the paragraph should be toggled by clicking on the anchor element using the following logic:

// At the start, the paragraph should not be rendered.
// After a click, the paragraph should be rendered.
// After another click, the paragraph should not be rendered.
// Finish the Message component by implementing this logic.

import React from "react";

class ToggleMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: false };

        this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({show: !this.state.show});
	}

	render() {
		return (
			<React.Fragment>
				<a onClick={this.toggle}>Want to buy a new car?</a>
                {this.state.show && <p>Call +11 22 33 44 now!</p>}
			</React.Fragment>
		);
	}
}

export default ToggleMessage;
