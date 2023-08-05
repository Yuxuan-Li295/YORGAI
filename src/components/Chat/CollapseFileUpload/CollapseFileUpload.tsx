import { Collapse } from "components/shared/Collapse";
import { FileUploadBox } from "components/shared/FileUploadBox";

const CollapseFileUpload = () => {
  return (
    <div>
      {/* TODO: The reuse of `<Collapse>` here seems to be somehow improper */}
      <Collapse>
        <FileUploadBox handleFileInput={() => {}} />
      </Collapse>
    </div>
  );
};

export { CollapseFileUpload };
