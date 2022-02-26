import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const userAuth = atom({
  key: "userAuth", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
