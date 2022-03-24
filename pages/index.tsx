import Head from "next/head"
import type { NextPage } from "next"
import React, { useEffect, useState } from "react"
import {
	ErrorBoundary as BasicErrorBoundary,
	Component1,
	Component2,
} from "../components"
import { ErrorBoundary as AdvanceErrorBoundary } from "react-error-boundary"

const Home: NextPage = () => {
	const [data, setData] = useState<{ name: string }>({ name: "John Doe" })

	useEffect(() => {
		;(async () => {
			const user: { name: string } = await (await fetch("/api/user")).json()
			setData(user)
		})()
	}, [])

	return (
		<>
			<Head>
				<title>React - Error Boundaries</title>
				<meta name="description" content="React Error boundaries example" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="p-12 flex flex-col gap-12">
				<h1 className="text-4xl">React Error Boundaries</h1>

				<BasicErrorBoundary
					fallback={
						<div>
							Oops Something went wrong - Basic error boundary that does not
							catch errors in network request, event handlers etc.
						</div>
					}
				>
					<Component1 data={data} />
				</BasicErrorBoundary>

				<AdvanceErrorBoundary
					fallback={
						<div>
							Oops Something went wrong - Advance error boundary that does catch
							errors in network request, event handlers etc.
						</div>
					}
					onError={(e) =>
						console.log("Error handler by advance error boundaries", e)
					}
				>
					<Component2 />
				</AdvanceErrorBoundary>
			</main>
		</>
	)
}

export default Home
