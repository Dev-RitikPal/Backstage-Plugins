
import { FieldProps } from '@rjsf/core';
import React from 'react';
import { CustomEntityPicker } from '.';

export const CustomEntityPickerController = ({
  schema: { title = 'Custom Drop Down', description = 'For customized needs' },
  uiSchema,
  ...props
}: FieldProps<string>) => {
  const CustomUiSchema = {
    ...uiSchema,
    'ui:options': {
      customOptions: (uiSchema['ui:options']?.customOptions || []) as string[],
      defaultKind: 'NonPublic',
    },
  };
  return (
    <CustomEntityPicker
      {...props}
      schema={{ title, description }}
      uiSchema={CustomUiSchema}
    />
  );
};
