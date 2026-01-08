import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { RootNavigator } from './src/navigation/root';
import { store } from './src/store/store';

function App() {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
