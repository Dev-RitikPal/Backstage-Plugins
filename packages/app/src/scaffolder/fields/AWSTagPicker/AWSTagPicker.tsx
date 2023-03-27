import { FieldProps } from '@rjsf/core';
import React from 'react';
import { CustomEntityPicker } from '../CustomEntityPicker';

export const AWSTagPicker = ({
  schema: { title = 'AWS Security Tag', description = 'AWS Security Tag' },
  uiSchema,
  ...props
}: FieldProps<string>) => {
  // const ownerUiSchema = {
  //   ...uiSchema,
  //   'ui:options': {
  //     allowedKinds: (uiSchema['ui:options']?.allowedKinds || [
  //       'Group',
  //       'User',
  //     ]) as string[],
  //     defaultKind: 'Group',
  //   },
  // };
  const AWSTagsUiSchema = {
    ...uiSchema,
    'ui:options': {
      customOptions: (uiSchema['ui:options']?.customOptions || [
        'HighlyConfidential',
        'Confidential',
        'NonPublic',
        'Public',
      ]) as string[],
      defaultKind: 'NonPublic',
    },
  };
  return (
    <CustomEntityPicker
      {...props}
      schema={{ title, description }}
      uiSchema={AWSTagsUiSchema}
    />
  );
};
