// import PaintingList from './components/paintingList';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Alert from './components/Alert/Alert';
// import Container from './components/Container/Container';
// import Box from './components/Box/Box';
// import paintings from './paintings.json';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPickerNew from './components/ColorPickerNew';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

function App() {
  return (
    <>
      <ColorPickerNew options={colorPickerOptions} />
      <Dropdown />
      <Counter initialValue={10} />
      {/* <Container>
        <Box type="small" classNames="big red" styles={{ color: '#ffffff' }} />
        <Box type="medium" />
        <Box type="large" />

        <Alert text="Upcc!" type="success" />
        <Alert text="Upcc!" type="warning" />
        <Alert text="Upcc!" type="error" />
        <ColorPicker options={colorPickerOptions} />
        <PaintingList items={paintings} />
      </Container> */}
    </>
  );
}

export default App;
