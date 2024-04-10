import { createApiRef } from '@backstage/core-plugin-api';
import { GlossaryItemForm } from '../types/GlossaryItem';

export const glossaryApiRef = createApiRef<GlossaryApi>({
  id: 'glossary',
});

export interface GlossaryApi {
  getGlossaryByRef(entityRef: string): Promise<any>;
  addGlossaryItem(glossaryItem: any): Promise<any>;
  updateGlossaryItem(glossaryItem: GlossaryItemForm): Promise<any>;
  getGlossary(): Promise<any>;
  getGlossaryBySearch(searchText: string): Promise<any>;
  getFilteredGlossary(searchText: string, entityRef: string): Promise<any>;
}
