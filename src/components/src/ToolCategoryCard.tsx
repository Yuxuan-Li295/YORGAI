import pencil from "pencil.png";

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
            border: "1px solid var(--basis-border-subtle, #E9E9EC)",
            background: "#FFF",

            // added this
            width:"355px",
            height: "42px",
        }}
    >
        {/*enable texts and logos be displayed side-by-side*/}
        <div
            style={{
                display: "flex",
            }}
        >
        
            {/*box with pencil icon*/}
            <div
                style={{
                    width: "42px",
                    height: "42px",
                    flexShrink: "0",
                    borderRadius: "10px",
                    border: "1px solid var(--basis-border-subtle, #E9E9EC)",
                    background: "#FFF",

                    // added this 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "11px",
                }}
            >
                <img
                    src={pencil} alt="pencil icon"
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
                {/*title*/}
                <h2
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "stretch",
                        color: "var(--basis-text-loud, #18181B)",
                        /* inter/body/sm/500 - medium */
                        fontSize: "14px",
                        fontFamily: "PingFang SC",
                        fontWeight: "500",
                        lineHeight: "20px",

                        // added this
                        marginBottom:"6px",
                        marginTop: "0px",
                    }}
                >
                    生产力工具
                </h2>

                {/*description*/}
                <p
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "stretch",
                        color: "var(--basis-text, #707480)",
                        /* inter/body/xs/400 - regular */
                        fontSize: "12px",
                        fontFamily: "PingFang SC",
                        lineHeight: "16px",

                        // added this
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