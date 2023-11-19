import packageJson from '../../../package.json';

export const ROLLUP_EXTERNALS = [
  'dayjs/locale/ru',
  'dayjs/plugin/customParseFormat.js',
  'dayjs/plugin/customParseFormat',
  'dayjs/plugin/utc.js',
  'dayjs/plugin/timezone.js',
  'klona/full',
  'highlight.js/lib/languages/typescript',
  '@mantine/carousel',
  '@mantine/code-highlight',
  '@mantine/colors-generator',
  '@mantine/core',
  '@mantine/dates',
  '@mantine/dropzone',
  '@mantine/ds',
  '@mantine/form',
  '@mantine/hooks',
  '@mantine/modals',
  '@mantine/notifications',
  '@mantine/nprogress',
  '@mantine/spotlight',
  '@mantine/store',
  '@mantine/tiptap',
  '@tests/core',
  '@tests/dates',
  '@docs/styles-api',
  '@docs/demos',
  '@mantine/vanilla-extract',
  ...Object.keys({
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  }),
];
