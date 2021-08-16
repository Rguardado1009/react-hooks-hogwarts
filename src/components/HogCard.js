import { useState } from "react";
import HogInfo from "./HogInfo";

function HogCard({ hog }) {
	const [showInfo, setShowInfo] = useState(false);
	const [showCard, setShowCard] = useState(true);

	return (
		<div>
			<br></br>
			<button onClick={() => setShowCard(!showCard)}>
				{showCard ? "Hide Card" : "Show Card"}
			</button>
			{showCard ? (
				<>
					<h1>{hog.name}</h1>
					<img src={hog.image} alt={hog.name} />
					<br></br>
					<button onClick={() => setShowInfo(!showInfo)}>
						{showInfo ? "Hide Info" : "Show Info"}
					</button>
					{showInfo ? <HogInfo hog={hog} /> : null}
				</>
			) : null}
		</div>
	);
}

export default HogCard;
