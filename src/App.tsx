import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuctionDetails from "./components/AuctionDetails";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route path='/auction/:id' element={<AuctionDetails />} />
					
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
