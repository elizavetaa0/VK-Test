import { createRoot } from 'react-dom/client';
import App from './app';
import { ConfigProvider } from '@vkontakte/vkui';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
