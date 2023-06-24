import Input from "./InputSection/input";
import Premenu from "./MenuSection/premenu";
import Append from "./AppendSection/append";

export const PromptSearchBar = () => (
  <Input prepend={<Premenu />} append={<Append />}></Input>
);
