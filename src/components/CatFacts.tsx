import React from 'react';
import { CatFactsProps } from '../types';
import { Group, Div, FormItem, Input, Button } from '@vkontakte/vkui';

export const CatFacts: React.FC<CatFactsProps> = ({ catFact, getCatFact }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    if (typeof getCatFact === 'function') {
      await getCatFact();
    }
  };

  return (
    <Group>
      <Div>
        <h2>Cat Fact</h2>
        <form onSubmit={handleSubmit}>
          <FormItem top="Here's a cat fact for you">
            <Input
              value={catFact}
              placeholder="Cat fact will appear here..."
              readOnly
            />
          </FormItem>
          <Button type="submit">Get Cat Fact</Button>
        </form>
      </Div>
    </Group>
  );
};

export default CatFacts;
