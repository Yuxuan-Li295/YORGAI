import { Append } from "./Append";
import { Prepend } from "./Prepend";
import { Input } from "./Input";

export const PromptSearchBar = () => (
  <Input prepend={<Prepend />} append={<Append />}></Input>
);
