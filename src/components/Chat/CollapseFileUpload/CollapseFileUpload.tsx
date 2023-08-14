import { Collapse } from "components/shared/Collapse";
import { FileUploadBox } from "components/shared/FileUploadBox";
import { ReactComponent as Help } from "resources/img/Help.svg";
import { ReactComponent as ImageEdit } from "resources/img/ImageEdit.svg";

const CollapseFileUpload = () => {
  return (
    <div>
      <Collapse title="参考图" icon={<ImageEdit />} helpIcon={<Help />}>
        <FileUploadBox handleFileInput={() => { }} />
      </Collapse>
    </div>
  );
};

export { CollapseFileUpload };
