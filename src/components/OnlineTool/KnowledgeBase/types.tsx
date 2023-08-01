export enum FileStatus {
  Offline = "Offline",
  Done = "Done",
  Protect = "Protect",
  Testing = "Testing",
}
export type FileMeta = {
  name: string;
  visible: boolean;
  status: FileStatus;
  selected: boolean;
  uploadTime: string;
  size: string;
  type: string;
};
export type KB = {
  name: string;
  selectedCount: number;
  files: FileMeta[];
};
export type ToolState = {
  kbList: KB[];
  selected: number;
  maxSelectedCount: number;
  initialized: boolean;
};
export type InitMsg = { cmd: "loadKB"; kbList: KB[] };
export type SetDirMsg = { cmd: "setKB"; idx: number };
export type ToggleFileMsg = {
  cmd: "toggleFile";
  kbIdx?: number;
  fileIdx: number;
};
export type ToggleAllFilesMsg = { cmd: "toggleAllFiles"; kbIdx?: number };
export type ToolMsg = InitMsg | SetDirMsg | ToggleFileMsg | ToggleAllFilesMsg;
