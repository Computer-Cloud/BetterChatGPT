export const officialAPIEndpoint = 'https://api.openai.ds.ac.cn/v1/chat/completions';
const customAPIEndpoint =
  import.meta.env.VITE_CUSTOM_API_ENDPOINT || 'https://api.openai.ds.ac.cn/v1/chat/completions';
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || officialAPIEndpoint;

export const availableEndpoints = [officialAPIEndpoint, customAPIEndpoint];
