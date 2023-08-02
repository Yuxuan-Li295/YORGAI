enum ToolsMode {
  KnowledgeBase,
  Home,
  Chat,
  Compose,
  Paint,
  Podcast,
}

type ToolsNormalModes =
  | ToolsMode.Home
  | ToolsMode.Chat
  | ToolsMode.Compose
  | ToolsMode.Paint
  | ToolsMode.Podcast;

export { ToolsMode };
export type { ToolsNormalModes };
