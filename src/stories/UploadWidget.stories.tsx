import { css } from "@emotion/css";
import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "components/shared/Button";
import { UploadWidget } from "components/shared/UploadWidget";
import { FileMeta, FileStatus, UploadContext } from "contexts/UploadContext";
import { useContext, useState } from "react";

const meta = {
  title: "Components/UploadWidget",
  component: UploadWidget,
  tags: ["autodocs"],
} satisfies Meta<typeof UploadWidget>;

export default meta;

const UseContextButton = () => {
  const { setVisibility } = useContext(UploadContext);

  return (
    <Button onClick={() => setVisibility(true)}>Show upload widget</Button>
  );
};

const Template: StoryFn<typeof UploadWidget> = () => {
  const [visibility, setVisibility] = useState(true);
  const [lastUploadIndex, setLastUploadIndex] = useState<number>(0);
  const [uploadFiles, setUploadFiles] = useState<Record<number, FileMeta>>(
    Object.fromEntries(
      [...Array(5)].map((_, i) => [
        i,
        {
          name: `file${i}`,
          type: "img",
          uploadTime: new Date().toString(),
          size: "1000 KB",
          status: FileStatus.Done,
        },
      ]),
    ),
  );

  return (
    <div
      className={css`
        display: flex;
        margin-bottom: 300px;
      `}
    >
      <UploadContext.Provider
        value={{
          visibility: visibility,
          setVisibility: setVisibility,
          files: uploadFiles,
          addFile: (file) => {
            // Why this is safe? Well, the value of MAX_SAFE_INTEGER in JavaScript is $2^{51} - 1$.
            // Suppose each file is only one byte large, this would result in petabytes of data,
            // which is unlikely storable in memory of a personal computer in recent future.
            if (lastUploadIndex === Number.MAX_SAFE_INTEGER) {
              // This is unreachable.
              throw new Error("Too many files");
            }
            const newIdx = lastUploadIndex + 1;
            setUploadFiles({ ...uploadFiles, [newIdx]: file });
            setLastUploadIndex(newIdx);
            return newIdx;
          },
          removeFile: (index) => {
            const { [index]: _, ...rest } = uploadFiles;
            setUploadFiles(rest);
          },
        }}
      >
        <UseContextButton />
        <UploadWidget />
      </UploadContext.Provider>
    </div>
  );
};

export const Example = Template.bind({});
