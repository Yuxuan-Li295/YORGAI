import { ConfigCollapse } from "components/OnlineTool/ConfigCollapse";
import { FileUploadBox } from "components/shared/FileUploadBox";
import { ReactComponent as Help } from "resources/img/Help.svg";
import { ReactComponent as ImageEdit } from "resources/img/ImageEdit.svg";

const ConfigReferencePic = () => {
  return (
    <ConfigCollapse
      icon={<ImageEdit />}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flex: "1 0 0",
          }}
        >
          <div>参考图</div>
          <Help />
        </div>
      }
    >
      <FileUploadBox handleFileInput={() => {}} />
    </ConfigCollapse>
  );
};

export { ConfigReferencePic };
