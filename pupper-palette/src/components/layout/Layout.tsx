import Header from "./Header";
import Footer from "./Footer";
import ThemeProvider, { useTheme } from "../../context/ThemeContext";
import styles from "../../styles/Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { darkMode, toggleTheme } = useTheme()!;

  return (
    <main className={`${styles.main} ${!darkMode && styles.light}`}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
