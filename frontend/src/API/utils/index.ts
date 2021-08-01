import { postFormData, get } from "core/network";

const uploadFileAPI = (data: any) => postFormData("/utils/upload", data);

export { uploadFileAPI };
