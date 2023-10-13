import { ThemeProvider } from "./providers/ThemeProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  //TODO wrap later in AppProvider(s)
  return (
    <ThemeProvider defaultTheme="dark" storageKey="cv-ui-theme">
      <AppRoutes />;
    </ThemeProvider>
  );
}

export default App;
