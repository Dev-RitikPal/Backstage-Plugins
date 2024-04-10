export type ReleaseData = {
  html_url: string;
  name: string;
  tag_name: string;
};

export type FileData = {
  getFileData: any;
};

export type UptlData = {
  getUptlData: any;
};

export interface ProviderInterface {
  getLatestProjectRelease(): Promise<ReleaseData | undefined>;
  getRawFile(path: string): Promise<FileData | undefined>;
  getUptlData(): Promise<UptlData>;
}
