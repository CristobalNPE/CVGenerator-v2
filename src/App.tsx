import { ThemeProvider } from "./providers/ThemeProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
 
  return (
    <ThemeProvider defaultTheme="system" storageKey="cv-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
