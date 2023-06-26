import { ReactComponent as Pencil } from "resources/img/Pencil.svg";

const ToolCategoryCard = () => (

    <div
        style={{
            display: "flex",
            padding: "16px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            flex: "1 0 0",
            borderRadius: "8px",
            border: "1px solid ${basisAlt.border_subtle}",
            background: "white",
            width: "355px",
            height: "42px",
        }}
    >
        <div
            style={{
                display: "flex",
            }}
        >
            <div
                style={{
                    width: "42px",
                    height: "42px",
                    flexShrink: "0",
                    borderRadius: "10px",
                    border: "1px solid ${basisAlt.border_subtle}",
                    background: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "11px",
                }}
            >
                <img
                    src={Pencil} alt="pencil icon"
                    style={{
                        width: "20px",
                        height: "20px",
                        flexShrink: "0",
                    }}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h2
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "stretch",
                        color: "${basis.text_loud}",
                        fontSize: "14px",
                        fontFamily: "PingFang SC",
                        fontWeight: "500",
                        lineHeight: "20px",
                        marginBottom: "6px",
                        marginTop: "0px",
                    }}
                >
                    生产力工具
                </h2>
                <p
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "stretch",
                        color: "${basis.text}",
                        fontSize: "12px",
                        fontFamily: "PingFang SC",
                        lineHeight: "16px",
                        marginTop: "0px",
                    }}
                >
                    文章总结、长文翻译、头脑风暴...
                </p>
            </div>
        </div>
    </div>
)

export default ToolCategoryCard;
