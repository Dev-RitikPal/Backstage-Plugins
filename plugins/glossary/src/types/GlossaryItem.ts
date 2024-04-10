export type GlossaryItem = {
  id: number;
  entity_ref: string;
  term: string;
  definition: string;
  title: string;
  created_by: string;
};

export type GlossaryItemForm = {
  id: number;
  term?: string;
  entityRef?: string;
  definition?: string;
  isActive?: string;
  isApproved?: string;
  created_by?: string;
};
