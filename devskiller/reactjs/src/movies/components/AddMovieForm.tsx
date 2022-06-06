import React, { useState } from 'react';

import { InputField, Button } from 'shared/components';
import { MoviesAction } from 'types';

interface AddMovieFormProps {
  onSubmit: (data: Record< "imageUrl" | "title" | "subtitle" | "description", string>) => void,
  onCancel: () => void,
}

export function AddMovieForm({ onSubmit, onCancel }: AddMovieFormProps) {
  // TODO: Implement form for adding a movie

  return (
    <form className="p-4 ">
      {/* TODO: Add code to make form actions work */}
      <InputField name="Url"/>
      <InputField name="Title"/>
      <InputField name="Subtitle"/>
      <InputField name="Description"/>
      <div className="text-center">
      <Button onClick={() => {}}>
        Submit
      </Button>
      <Button onClick={() => {}}>
        Cancel
      </Button>
      </div>
    </form>
  );
}
