import molecule from 'Editor/molecule';
import styles from './styles.css';
import { shape as Shape } from 'Editor/creators/createShape';

export default molecule({
  component: require('./Component').default,
  props: {
    type: 'static',
    settings: {
      colors: Shape.color({ background: 'transparent', color: '' }),
      spacing: Shape.spacing({
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        padding: { top: 0, right: 0, bottom: 0, left: 0 }
      })
    }
  }
});
