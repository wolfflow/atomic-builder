import styles from './styles.css';
import StaticMolecule from 'Atomic/Molecules/static';

export default ({
  settings,
  Main
}) => (
  <div className={styles.wrap} styles={{ backgroundColor: settings.background }}>
    <div className={styles.container}>
      <Main theme={{ wrap: styles.moleculeWrap, container: styles.moleculeContainer }} />
    </div>
  </div>
);