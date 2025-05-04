import React from 'react';
import { InputWithLabel } from '@nadyakarandasheva/common';

export const App = () => {
  return (
    <div>
      <h1>Проект с UI-библиотекой</h1>
      <div style={{ width: '500px' }}>
        <InputWithLabel id={'0'} label={'This input used in dependet project'} placeholder={'placeholder'} />
      </div>
    </div>
  );
};