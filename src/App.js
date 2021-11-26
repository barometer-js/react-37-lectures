import PaintingList from './components/paintingList';
import Section from './components/Section';
import paintings from './paintings.json';

function App() {
  return (
    <div>
      <Section title="Wow@">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}

export default App;
