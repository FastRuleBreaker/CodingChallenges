import React from 'react';

interface InputFieldProps {
  name: string,
  value?: string,
  setter?: React.Dispatch<React.SetStateAction<string>>,
  type?: string
}

export function InputField({name, value, setter, type="text"}: InputFieldProps) {
  return (
    <div className="form-group">
      <label className="text-capitalize" htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        id={name}
        aria-describedby={name + "Help"}
        placeholder={"Enter " + name}
        value={value}
        onChange={(event) => {
          if (!setter) return
          setter(event.target.value);
        }}
      />
    </div>
  );
}
