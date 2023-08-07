import { createContext } from "react";

export enum FileStatus {
  Offline = "Offline",
  Done = "Done",
  Protect = "Protect",
  Testing = "Testing",
}

export type FileMeta = {
  name: string;
  status: FileStatus;
  uploadTime: string;
  size: string;
  type: string;
};

export type UploadContextType = {
  visibility: boolean;
  setVisibility: (newState: boolean) => void;
  files: Record<number, FileMeta>;
  addFile: (file: FileMeta) => number;
  removeFile: (index: number) => void;
};

export const UploadContext = createContext<UploadContextType>({
  visibility: false,
  setVisibility: () => {},
  files: {},
  addFile: () => 0,
  removeFile: () => {},
});
