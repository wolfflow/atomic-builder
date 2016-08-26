import atom from 'Editor/atom';
import { shape as Shape } from 'Editor/creators/createShape';

export default atom({
  preview: require('./preview.png'),
  component: require('./Component').default,
  props: {
    type: 'button',
    content: 'Your text',
    groups: {
      spacing: 'Box spacing and alignment',
      border: 'Borders and shadows',
      colors: 'Colors',
      url: 'Add a link:'
    },
    settings: {
      colors: Shape.color({ background: '#E6E6E6', color: '#333' }),
      align: Shape.align(),
      padding: Shape.padding({ top: 8, right: 16, bottom: 8, left: 16 }),
      font: Shape.font({ weight: 400, size: 16, style: 'normal', family: 'Arial' }),
      border: Shape.border({ width: 0, style: 'solid', color: '#000', radius: 0 }),
      shadow: Shape.shadow({ x: 0, y: 0, blur: 0, spread: 0, color: '#333' }),
      url: Shape.link({ url: '', target: '_blank' }, { title: '' })
    }
  }
});
