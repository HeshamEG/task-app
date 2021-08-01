import { localStorageCommands } from "core/utils/localStorageCommands";
import {
  setLocalState,
  getLocalState,
  unsetLocaleState,
} from "core/utils/localStorage";

export const setLocaleAuth = (data: Object) => {
  setLocalState(localStorageCommands.user, data);
};

export const removeLocaleAuth = () => {
  unsetLocaleState(localStorageCommands.user);
};
