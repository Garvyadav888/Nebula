/** @format */

import './App.css';
import Home from './Pages/Home';
import PageTransition from './components/layout/PageTransition';
import ErrorBoundary from './components/common/ErrorBoundary';
import { ToastProvider } from './components/ui/toast';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
	return (
		<ErrorBoundary>
			<ToastProvider />
			<PageTransition>
				<Home />
			</PageTransition>
			<ScrollToTop />
		</ErrorBoundary>
	);
}

export default App;
