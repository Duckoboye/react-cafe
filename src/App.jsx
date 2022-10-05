import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
