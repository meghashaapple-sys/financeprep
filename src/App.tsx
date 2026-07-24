import { HashRouter, Routes, Route } from 'react-router-dom';
import { SettingsProvider } from './context/SettingsContext';
import Home from './pages/Home';
import ChapterList from './pages/ChapterList';
import ChapterDetail from './pages/ChapterDetail';
import TestList from './pages/TestList';
import TestRunner from './pages/TestRunner';
import TestResults from './pages/TestResults';

export default function App() {
  return (
    <SettingsProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<ChapterList />} />
          <Route path="/study/:chapterId" element={<ChapterDetail />} />
          <Route path="/tests" element={<TestList />} />
          <Route path="/tests/:testId" element={<TestRunner />} />
          <Route path="/tests/:testId/results" element={<TestResults />} />
        </Routes>
      </HashRouter>
    </SettingsProvider>
  );
}
