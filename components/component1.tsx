import React from "react"

type P = {
	data: {
		name: string
	}
}

export const Component1 = ({ data }: P) => {
	return <div>{data.name.toUpperCase()}</div>
}
