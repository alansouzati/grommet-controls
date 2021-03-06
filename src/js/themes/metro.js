import { deepFreeze, deepMerge } from 'grommet/utils';
import base from './base';
import colorsFromArray from './colorsFromArray';
import colorsFromObject from './colorsFromObject';


const brandColor = '#0072c6';
const accentColors = ['#fa6800', '#128023', '#0050ef', '#d80073'];
const neutralColors = ['#a4c400', '#00aba9', '#BF5A15', '#8F6C53', '#9A1616'];
const statusColors = {
  critical: '#ce352c',
  error: '#a20025',
  warning: '#e3c800',
  ok: '#60a917',
  unknown: '#eeeeee',
  disabled: '#999999',
};

const shadowColor = 'rgba(0, 86, 150, 0.50)';
const textColor = '#333333';

const colors = {
  'brand': brandColor,
  'text': textColor,
};

colorsFromArray(colors, accentColors, 'accent');
colorsFromArray(colors, neutralColors, 'neutral');
colorsFromObject(colors, statusColors, 'status');

export default deepFreeze(deepMerge(base, {
  global: {
    text: {
      color: {
        dark: '#ffffff',
        light: '#333333',
      },
    },
    colors,
    drop: {
      background: '#005696',
      border: {
        width: '0px',
        radius: '0px',
      },
      shadow: {
        light: '0px 3px 8px rgba(100, 100, 100, 0.50)',
        dark: '0px 3px 8px rgba(255, 255, 255, 0.40)',
      },
    },
    hover: {
      backgroundColor: '#0079d3',
      textColor: '#ffffff',
    },
    focus: {
      border: {
        color: brandColor,
      },
    },
    elevation: {
      none: 'none',
      xsmall: `0px 1px 2px ${shadowColor}`,
      small: `0px 2px 4px ${shadowColor}`,
      medium: `0px 3px 8px ${shadowColor}`,
      large: `0px 6px 12px ${shadowColor}`,
      xlarge: `0px 8px 16px ${shadowColor}`,
    },
    font: {
      family: "'Open Sans', sans-serif",
      face: `
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 300;
          src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 800;
          src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN8rsOUuhpKKSTjw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
      size: '16px',
    },
    input: {
      border: {
        radius: '0px',
      },
    },
    control: {
      color: {
        dark: '#ffffff',
        light: '#333333',
      },
    },
  },
  button: {
    border: {
      radius: '0px',
    },
  },
  icon: {
    colors,
  },
  anchor: {
    color: {
      light: '#0078D4',
      dark: '#ffffff',
    },
  },
  checkBox: {
    border: {
      color: {
        light: 'rgba(0, 188, 212, 0.5)',
        dark: 'rgba(255, 255, 255, 0.5)',
      },
      radius: '0px',
    },
    check: {
      color: brandColor,
    },
    toggle: {
      color: {
        dark: '#bdbdbd',
        light: brandColor,
      },
      radius: '0px',
    },
  },
  layer: {
    backgroundColor: '#eef3fc',
    border: {
      radius: '0px',
    },
  },
  radioButton: {
    border: {
      color: {
        light: 'rgba(0, 188, 212, 0.5)',
        dark: 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  heading: {
    font: false,
  },
}));
