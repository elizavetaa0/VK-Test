import React, { useState } from 'react';
import { AdaptivityProvider, AppRoot, SplitLayout, SplitCol, View, Panel, PanelHeader } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import CatFacts from './components/CatFacts';
import AgePredictor from './components/AgePredictor';
import { getCatFact } from './api/catApi';
import { predictAge } from './api/ageApi';

const App = () => {
  const [catFact, setCatFact] = useState('');
  const [predictedAge, setPredictedAge] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true); 
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleCatFact = async () => {
    const fact = await getCatFact();
    setCatFact(fact);
  };

  const handleAgePrediction = async (name: string) => {
    const prediction = await predictAge(name);
    setPredictedAge(prediction);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;

    const isValid = /^[a-zA-Z\s]+$/.test(newName);
    setIsNameValid(isValid);

    setNameInput(newName);

    if (newName.trim() !== currentName) {
      setCurrentName(newName.trim());

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (isValid && newName.trim() !== '') {
          handleAgePrediction(newName.trim());
        }
      }, 3000);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameInput.trim() === '' || !isNameValid) {
      return;
    }

    handleAgePrediction(nameInput.trim());
    setNameInput('');
    setCurrentName('');
  };

  return (
    <AdaptivityProvider>
      <AppRoot>
        <SplitLayout>
          <SplitCol>
            <View activePanel="main">
              <Panel id="main">
                <PanelHeader>Cat's Facts and Age Prediction App</PanelHeader>
                <CatFacts catFact={catFact} getCatFact={handleCatFact} />
                <AgePredictor
                  predictedAge={predictedAge}
                  nameInput={nameInput}
                  isNameValid={isNameValid}
                  handleNameChange={handleNameChange}
                  handleSubmit={handleSubmit}
                />
              </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
