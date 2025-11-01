import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IntroScene, MainHallScene } from './scenes';
import { Global } from '@emotion/react';
import { globalStyles } from './App.styled';

function App() {
  const [currentScene, setCurrentScene] = useState('intro');

  const handleEnter = () => {
    setCurrentScene('main');
  };

  return (
    <>
      <Global styles={globalStyles} />
      <main className="app-container">
        <AnimatePresence mode="wait">
          {currentScene === 'intro' && (
            <motion.div key="intro">
              <IntroScene onEnter={handleEnter} />
            </motion.div>
          )}

          {currentScene === 'main' && (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              <MainHallScene />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
