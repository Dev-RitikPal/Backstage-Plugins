import {
  BackstageTheme,
  createTheme,
  genPageTheme,
  shapes,
} from '@backstage/theme';
import { yellow } from '@material-ui/core/colors';

export const darkTheme: BackstageTheme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#333333',
    },
    status: {
      ok: '#71CF88',
      warning: '#FFB84D',
      error: '#F84C55',
      running: '#3488E3',
      pending: '#FEF071',
      aborted: '#9E9E9E',
    },
    bursts: {
      fontColor: '#FEFEFE',
      slackChannelText: '#ddd',
      backgroundColor: {
        default: '#7C3699',
      },
      gradient: {
        linear: 'linear-gradient(-137deg, #ddc690 0%, #00153c 100%)',
      },
    },
    primary: {
      main: '#a0c1ff',
      dark: '#a0c1ff',
    },
    secondary: {
      main: '#FF88B2',
    },
    banner: {
      info: '#2E77D0',
      error: '#E22134',
      text: '#FFFFFF',
      link: '#000000',
      warning: '#FF9800',
    },
    border: '#E6E6E6',
    textContrast: '#FFFFFF',
    textVerySubtle: '#727272',
    textSubtle: '#CCCCCC',
    highlight: '#FFFBCC',
    errorBackground: '#FFEBEE',
    warningBackground: '#F59B23',
    infoBackground: '#ebf5ff',
    errorText: '#CA001B',
    infoText: '#004e8a',
    warningText: '#000000',
    linkHover: '#82BAFD',
    link: '#9CC9FF',
    gold: yellow.A700,
    navigation: {
      background: '#00143c',
      indicator: '#dfc891',
      color: '#b5b5b5',
      selectedColor: '#dfc891',
    },
    pinSidebarButton: {
      icon: '#404040',
      background: '#BDBDBD',
    },
    tabbar: {
      indicator: '#9BF0E1',
    },
  },
  defaultPageTheme: 'home',
  pageTheme: {
    // home: genPageTheme(['#00143c', '#faff05'], shapes.wave),
    home: genPageTheme({ colors: ['#00143c', '#dfc891'], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: ['#00143c', '#00143c', '#dfc891', '#123456', '#123456'],
      shape: shapes.wave,
    }),
    tool: genPageTheme({
      colors: ['#00143c', '#00143c', '#dfc891', '#123456', '#123456'],
      shape: shapes.wave,
    }),
    service: genPageTheme({
      colors: ['#00143c', '#00143c', '#dfc891', '#123456', '#123456'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#00143c', '#00143c', '#dfc891', '#123456', '#123456'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#00143c', '#00143c', '#dfc891', '#123456', '#123456'],
      shape: shapes.wave,
    }),
    other: genPageTheme({
      colors: ['#00143c', '#00143c', '#dfc891', '#123456', '#123456'],
      shape: shapes.wave,
    }),
    app: genPageTheme({
      colors: ['#00143c', '#00143c', '#dfc891', '#123456', '#123456'],
      shape: shapes.wave,
    }),
    apis: genPageTheme({
      colors: ['#00143c', '#00143c', '#dfc891', '#123456', '#123456'],
      shape: shapes.wave,
    }),
  },
});
