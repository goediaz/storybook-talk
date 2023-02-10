import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '../src/wrappers/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeToggle = (Story) => <ThemeProvider><Story /></ThemeProvider>;

export const decorators = [withThemeToggle];