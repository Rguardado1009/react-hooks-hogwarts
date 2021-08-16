import React, { useState } from "react";
import Nav from "./Nav";
import AllHogs from "./AllHogs.js";
import hogs from "../porkers_data";

function App() {
	const [showGreased, setShowGreased] = useState(false);
	const [sortOption, setSortOption] = useState("all");
	const hogsToShow = hogs
		.filter((hog) => (showGreased ? hog.greased : true))
		.sort((a, b) => {
			if (sortOption === "weight") {
				return a.weight - b.weight;
			} else if (sortOption === "name") {
				return a.name - b.name;
			}
		});
	return (
		<div className="App">
			<Nav />
			<button onClick={() => setShowGreased(!showGreased)}>
				{showGreased ? "All Hogs" : "Show Greased Hogs"}
			</button>
			<select onChange={(e) => setSortOption(e.target.value)}>
				<option value="all">All</option>
				<option value="name"> Name </option>
				<option value="weight">Weight </option>
			</select>
			<AllHogs hogs={hogsToShow} />
		</div>
	);
}

export default App;
