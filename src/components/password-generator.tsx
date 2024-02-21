'use client'

import PageLayout from '@/Layout/Layout';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import React from 'react';
import { Input, Slider, Checkbox } from 'antd';
import type { GetProp } from 'antd';

const Page = () => {
  const [inputValue, setInputValue] = React.useState(20);
  const [password, setPassword] = React.useState('');
  const [optionsSelected , setOptionsSelected] = React.useState<Array<CheckboxValueType>>([]);

  const options = [
    { label: 'Numbers', value: 'includeNumbers' },
    { label: 'Symbols', value: 'includeSymbols' },
  ];

  const generatePin = (length: number, includeDigits: boolean, includeSymbols: boolean): string => {
    const digits = '0123456789';
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let possibleOptions = alphabets;

    if (length < 1) {
      length = 16;
    }

    if (includeDigits) {
      possibleOptions += digits;
    }

    if (includeSymbols) {
      possibleOptions += symbols;
    }



    let pin = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * possibleOptions.length);
      pin += possibleOptions.charAt(randomIndex);
    }

    return pin;
  };

  React.useEffect(() => {
    setPassword(generatePin(inputValue, optionsSelected.includes('includeNumbers'), optionsSelected.includes('includeSymbols')));
  }, [inputValue, optionsSelected]);

  const onChange = (newValue: number) => {
    setInputValue(newValue);
  };

  const onCheckBoxChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues: CheckboxValueType[]) => {
    setOptionsSelected(checkedValues);
  };


  return (
    <PageLayout>
      <div>
        <Input placeholder="Basic usage" value={password} />

        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />

        <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onCheckBoxChange} />
      </div>
    </PageLayout>
  );
};

export default Page;
