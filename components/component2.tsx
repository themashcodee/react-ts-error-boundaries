import React, { useState } from "react"
import { useErrorHandler } from "react-error-boundary"

export const Component2 = () => {
	const [counter, setCounter] = useState(1)
	const errorHandler = useErrorHandler()

	function handleClick() {
		try {
			if (counter > 2) {
				throw new Error("Counter can not be more than 3")
			}
			setCounter((prev) => prev + 1)
		} catch (err) {
			errorHandler(err)
		}
	}

	return (
		<button
			className="bg-blue-400 text-white px-3 py-2 rounded-lg max-w-max"
			onClick={handleClick}
		>
			Click me {3 + 1 - counter} times more to test error boundary
		</button>
	)
}
