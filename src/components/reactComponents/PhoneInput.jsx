// components/PhoneInputComponent.jsx
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputComponent = () => {
    const [value, setValue] = useState('0700484252');

    return (
        <PhoneInput
        country={'kg'}
        value={value}
        onChange={phone => setValue(phone)}
        defaultCountry={'kg'}
        inputClass="form-control phone"
        />
    );
};

export default PhoneInputComponent;
