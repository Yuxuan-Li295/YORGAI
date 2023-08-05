import { FileMeta } from "contexts/UploadContext";

export type KB = {
  name: string;
  selectedCount: number;
  files: (FileMeta & { selected: boolean; visible: boolean })[];
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
