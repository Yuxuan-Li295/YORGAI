import { Collapse } from "components/shared/Collapse/Collapse";
import { FileUploadBox } from "components/shared/FileUploadBox";

const CollapseFileUpload = () => {
  return (
    <div>
      <Collapse>
        <FileUploadBox handleFileInput={() => {}} />
      </Collapse>
    </div>
  );
};

export { CollapseFileUpload };
