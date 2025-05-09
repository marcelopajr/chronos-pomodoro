import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading>
        Hello World!
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </>
  );
}
