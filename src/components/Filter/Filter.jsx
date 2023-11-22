import React from 'react';
import { Div, Label, Input } from './Filter.styled';
export const Filter = ({ value, onChangeFilter }) => {
  return (
    <Div>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </Div>
  );
};
