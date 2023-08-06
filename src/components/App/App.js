import styles from './App.module.scss';
import TitleHeader from '../../TitleHeader/TitleHeader';
import MainCard from '../MainCard/MainCard';
import AboutMeCard from '../AboutMeCard/AboutMeCard';

function App() {
  return (
    <div className={styles.app}>
      <MainCard />
      {/* <TitleHeader /> */}
      <AboutMeCard />
    </div>
  );
}

export default App;
