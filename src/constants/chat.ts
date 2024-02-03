import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are ChatGPT, a large language model trained by OpenAI.
Carefully heed the user's instructions. 
Respond using Markdown.`;

export const modelOptions: ModelOptions[] = [
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-16k',
  'gpt-4',
  'gpt-4-32k',
  'gpt-4-turbo-preview',
  'gpt-3.5-turbo-0301',
  'gpt-3.5-turbo-0613',
  'gpt-3.5-turbo-1106',
  'gpt-3.5-turbo-0125',
  'gpt-3.5-turbo-16k-0613',
  'gpt-4-0314',
  'gpt-4-0613',
  'gpt-4-1106-preview',
  'gpt-4-0125-preview',
  'gpt-4-32k-0314',
  'gpt-4-32k-0613',
  'hyllm',
];

export const defaultModel = 'gpt-3.5-turbo-16k';

export const modelMaxToken = {
  'gpt-3.5-turbo': 4096,
  'gpt-3.5-turbo-0301': 4096,
  'gpt-3.5-turbo-0613': 4096,
  'gpt-3.5-turbo-16k': 16384,
  'gpt-3.5-turbo-16k-0613': 16384,
  'gpt-3.5-turbo-1106': 16384,
  'gpt-3.5-turbo-0125': 16384,
  'gpt-4': 8192,
  'gpt-4-0314': 8192,
  'gpt-4-0613': 8192,
  'gpt-4-32k': 32768,
  'gpt-4-32k-0314': 32768,
  'gpt-4-32k-0613': 32768,
  'gpt-4-turbo-preview': 128000,
  'gpt-4-1106-preview': 128000,
  'gpt-4-0125-preview': 128000,
  'hyllm': 3000,
};

export const modelCost = {
  'gpt-3.5-turbo': {
    prompt: { price: 0.011, unit: 1000 },
    completion: { price: 0.014, unit: 1000 },
  },
  'gpt-3.5-turbo-0301': {
    prompt: { price: 0.011, unit: 1000 },
    completion: { price: 0.014, unit: 1000 },
  },
  'gpt-3.5-turbo-0613': {
    prompt: { price: 0.011, unit: 1000 },
    completion: { price: 0.014, unit: 1000 },
  },
  'gpt-3.5-turbo-16k': {
    prompt: { price: 0.021, unit: 1000 },
    completion: { price: 0.028, unit: 1000 },
  },
  'gpt-3.5-turbo-16k-0613': {
    prompt: { price: 0.021, unit: 1000 },
    completion: { price: 0.028, unit: 1000 },
  },
  'gpt-3.5-turbo-1106': {
    prompt: { price: 0.004, unit: 1000 },
    completion: { price: 0.007, unit: 1000 },
  },
  'gpt-3.5-turbo-0125': {
    prompt: { price: 0.0018, unit: 1000 },
    completion: { price: 0.0053, unit: 1000 },
  },
  'gpt-4': {
    prompt: { price: 0.21, unit: 1000 },
    completion: { price: 0.42, unit: 1000 },
  },
  'gpt-4-0314': {
    prompt: { price: 0.21, unit: 1000 },
    completion: { price: 0.42, unit: 1000 },
  },
  'gpt-4-0613': {
    prompt: { price: 0.21, unit: 1000 },
    completion: { price: 0.42, unit: 1000 },
  },
  'gpt-4-32k': {
    prompt: { price: 0.42, unit: 1000 },
    completion: { price: 0.84, unit: 1000 },
  },
  'gpt-4-32k-0314': {
    prompt: { price: 0.42, unit: 1000 },
    completion: { price: 0.84, unit: 1000 },
  },
  'gpt-4-32k-0613': {
    prompt: { price: 0.42, unit: 1000 },
    completion: { price: 0.84, unit: 1000 },
  },
  'gpt-4-turbo-preview': {
    prompt: { price: 0.035, unit: 1000 },
    completion: { price: 0.105, unit: 1000 },
  },
  'gpt-4-1106-preview': {
    prompt: { price: 0.035, unit: 1000 },
    completion: { price: 0.105, unit: 1000 },
  },
  'gpt-4-0125-preview': {
    prompt: { price: 0.035, unit: 1000 },
    completion: { price: 0.105, unit: 1000 },
  },
  'hyllm': {
    prompt: { price: 0.10, unit: 1000 },
    completion: { price: 0.10, unit: 1000 },
  },
};

export const defaultUserMaxToken = 4096;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string,
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
