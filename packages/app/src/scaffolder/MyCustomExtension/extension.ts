import { scaffolderPlugin, createScaffolderFieldExtension } from '@backstage/plugin-scaffolder/alpha';
import { AWSTagPicker } from '../fields';
import { CustomEntityPickerController } from '../fields';

export const AWSTagPickerExtension = scaffolderPlugin.provide(
  createScaffolderFieldExtension(({
    name: 'AWSTagPicker',
    component: AWSTagPicker,
  }),
));

export const CustomEntityPickerExtension = scaffolderPlugin.provide(
  createScaffolderFieldExtension(({
    name: 'CustomEntityPicker',
    component: CustomEntityPickerController,
  }),
));
