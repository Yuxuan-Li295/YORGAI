import { Collapse } from "components/shared/Collapse";
import { FileUploadBox } from "components/shared/FileUploadBox";
import { useState } from "react";
import { ReactComponent as Help } from "resources/img/Help.svg";
import { ReactComponent as ImageEdit } from "resources/img/ImageEdit.svg";

const CollapseFileUpload = () => {
  const [isShow, setisShow] = useState(true);

  const onToggle = () => setisShow(!isShow);

  const collapseHeader = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '308px' }}>
      <ImageEdit />
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: '1 0 0' }}>
        <div>参考图</div>
        <Help />
      </div>
    </div>
  );

  const collapseBody = <FileUploadBox handleFileInput={() => { }} />;

  return (
    <div>
      <Collapse collapseHeader={collapseHeader} collapseBody={collapseBody} isShow={isShow} onToggle={onToggle} />
    </div>
  );
};

export { CollapseFileUpload };
