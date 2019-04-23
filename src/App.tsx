import * as React from 'react'
import { WrapperModal } from './components';
import { Home } from './containers/Home';

const App: React.FC<any> = (): JSX.Element => (
  <WrapperModal>
    <Home />
  </WrapperModal>
);

export default App
