// libraries
import { MantineProvider } from '@mantine/core';
// static
import '@mantine/core/styles.css';

const App = () => {
  return (
    <MantineProvider>
      <div className="App">
        <h1>Hello World</h1>
      </div>
    </MantineProvider>
  )
}

export default App;
