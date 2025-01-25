import React from 'react';
import { Button } from '@nadyakarandasheva/ui-library';

export const App = () => {
  return (
    <div>
      <h1>Проект с UI-библиотекой</h1>
      <Button label="click!" onClick={() => alert('Кнопка нажата!')} />
    </div>
  );
};