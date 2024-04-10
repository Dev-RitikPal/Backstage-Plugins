/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FieldProps } from '@rjsf/core';
import React from 'react';

export const CustomEntityPicker = ({
  onChange,
  schema: { title = 'Entity', description = 'An entity from the catalog' },
  required,
  uiSchema,
  rawErrors,
  formData,
  idSchema,
}: FieldProps<string>) => {
  const customOptions = uiSchema['ui:options']?.customOptions as string[];

  // const { value: entities, loading } = useAsync(() =>
  //   catalogApi.getEntities(
  //     allowedKinds ? { filter: { kind: allowedKinds } } : undefined,
  //   ),
  // );

  // const entityRefs = entities?.items.map(e =>
  //   formatEntityRefTitle(e, { defaultKind }),
  // );
  // const DataClassification = ['1', '2', '3'];
  const onSelect = (_: any, value: string | null) => {
    onChange(value || '');
  };
// alert(JSON.stringify(allowedHosts))
  return (
    <FormControl
      margin="normal"
      required={required}
      error={rawErrors?.length > 0 && !formData}
    >
      <Autocomplete
        id={idSchema?.$id}
        value={(formData as string) || ''}
        onChange={onSelect}
        options={customOptions || []}
        autoSelect
        freeSolo
        renderInput={params => (
          <TextField
            {...params}
            label={title}
            margin="normal"
            helperText={description}
            variant="outlined"
            required={required}
            InputProps={params.InputProps}
          />
        )}
      />
    </FormControl>
  );
};
