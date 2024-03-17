export interface CatFactsProps {
  catFact: string;
  getCatFact: () => Promise<void>; 
}

export interface AgePredictorProps {
  predictedAge: string;
  nameInput: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isNameValid: boolean;
}