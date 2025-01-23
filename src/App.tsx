import React from 'react';
import { Button } from 'ui-library';

const App = () => {
  return (
    <div>
      <h1>Проект с UI-библиотекой</h1>
      <Button label="Нажми меня" onClick={() => alert('Кнопка нажата!')} />
    </div>
  );
};

export default App;
