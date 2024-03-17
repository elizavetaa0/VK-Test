import React from 'react';
import { AgePredictorProps } from '../types';
import { Group, Div, FormItem, Input, Button } from '@vkontakte/vkui';

const AgePredictor: React.FC<AgePredictorProps> = ({
  predictedAge,
  nameInput,
  isNameValid,
  handleNameChange,
  handleSubmit,
}) => (
  <Group>
    <Div>
      <h2>Age Predictor</h2>
      <form onSubmit={handleSubmit}>
        <FormItem top="Enter your name">
          <Input
            type="text"
            placeholder="Name"
            value={nameInput}
            onChange={handleNameChange}
            required
            status={isNameValid ? 'default' : 'error'} 
          />
        </FormItem>
        <Button size="l" type="submit" disabled={!isNameValid}> 
          Predict Age
        </Button>
      </form>
      <Div>{predictedAge}</Div>
    </Div>
  </Group>
);

export default AgePredictor;
