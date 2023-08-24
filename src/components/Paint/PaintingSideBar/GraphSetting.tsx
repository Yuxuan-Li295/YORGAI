import { basis } from "components/constants/colors";
import { Dropdown } from "components/shared/Dropdown";
import { SingleLineInputField } from "components/shared/SingleLineInputField";
import { ReactComponent as ArrowAngleDownMd } from "resources/img/ArrowAngleDownMd.svg";
import { ReactComponent as XLarge } from "resources/img/XLarge.svg";

const GraphSetting = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "356px",
        height: "auto",
        minHeight: "98px",
        padding: "16px 24px 16px 0px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "auto",
          height: "20px",
          fontFamily: "PingFang SC",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "20px",
          color: basis.text_loud,
          marginBottom: "10px",
          marginLeft: "0",
        }}
      >
        图片比例
      </div>
      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        <Dropdown
          menuItems={["宽度1", "宽度2", "宽度3"]}
          setValue={(item: string) => {
            console.log(item);
          }}
        >
          <div style={{ position: "relative" }}>
            <SingleLineInputField
              width={132}
              height={36}
              value=""
              placeholder="宽度"
            />
            <div
              style={{
                position: "absolute",
                right: "12px",
                top: "9px",
                display: "flex",
                alignItems: "center",
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
            >
              <ArrowAngleDownMd />
            </div>
          </div>
        </Dropdown>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <XLarge width={20} height={20} />
        </div>
        <Dropdown
          menuItems={["高度1", "高度2", "高度3"]}
          setValue={(item: string) => {
            console.log(item);
          }}
        >
          <div style={{ position: "relative" }}>
            <SingleLineInputField
              width={132}
              height={36}
              value=""
              placeholder="高度"
            />
            <div
              style={{
                position: "absolute",
                right: "12px",
                top: "9px",
                display: "flex",
                alignItems: "center",
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
            >
              <ArrowAngleDownMd />
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export { GraphSetting };
