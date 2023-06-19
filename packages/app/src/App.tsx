import { SuperThemeProvider } from '@super-ds/theme';
import { Home } from './pages/Home';

export function App() {
  return (
    <SuperThemeProvider>
      <Home />
    </SuperThemeProvider>
  );
}
