'use client'

import PageLayout from '@/Layout/Layout';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import React from 'react';
import { Input, Slider } from 'antd';

const PinGenerator = () => {
  const [inputValue, setInputValue] = React.useState(4);
  const [password, setPassword] = React.useState('');
  const [optionsSelected , setOptionsSelected] = React.useState<Array<CheckboxValueType>>([]);

  const options = [
    { label: 'Numbers', value: 'includeNumbers' },
    { label: 'Symbols', value: 'includeSymbols' },
  ];

  const generatePin = (length: number): string => {
    const digits = '0123456789';



    if (length < 1) {
      length = 16;
    }



    let pin = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      pin += digits.charAt(randomIndex);
    }

    return pin;
  };

  React.useEffect(() => {
    setPassword(generatePin(inputValue));
  }, [inputValue, optionsSelected]);

  const onChange = (newValue: number) => {
    setInputValue(newValue);
  };



  return (
    <PageLayout>
      <div>
        <Input placeholder="Basic usage" value={password} />

        <Slider
          min={3}
          max={12}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />

      </div>
    </PageLayout>
  );
};

export default PinGenerator;
