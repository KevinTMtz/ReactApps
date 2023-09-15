import { ChangeEvent } from 'react';

export interface useInputReturn {
  value: string;
  valueIsValid: boolean;
  hasError: boolean;
  valueChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  blurHandler: () => void;
  reset: () => void;
}
