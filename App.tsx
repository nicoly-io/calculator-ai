import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './navigation/BottomNav';
import CalculatorScreen from './pages/Calculator/CalculatorScreen';
import GamesHome from './pages/Games/GamesHome';
import QuizEngine from './pages/Games/QuizEngine';
import LevelSelector from './pages/Games/LevelSelector';
import HistoryPage from './pages/History/HistoryPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen pb-20 bg-[#121212]">
        <Routes>
          <Route path="/" element={<CalculatorScreen />} />
          <Route path="/games" element={<GamesHome />} />
          <Route path="/games/level/:subjectId" element={<LevelSelector />} />
          <Route path="/games/play/:id" element={<QuizEngine />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}