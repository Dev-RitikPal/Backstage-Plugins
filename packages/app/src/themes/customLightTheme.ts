import {
  BackstageTheme,
  createTheme,
  genPageTheme,
  shapes,
} from '@backstage/theme';
import { yellow } from '@material-ui/core/colors';
/**
 * The default Backstage light theme.
 *
 * @public
 */
export const lightTheme: BackstageTheme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: '#F8F8F8',
    },
    status: {
      ok: '#1DB954',
      warning: '#FF9800',
      error: '#E22134',
      running: '#2E77D0',
      pending: '#FFED51',
      aborted: '#757575',
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
      main: '#033cad',
    },
    banner: {
      info: '#2E77D0',
      error: '#E22134',
      text: '#FFFFFF',
      link: '#000000',
      warning: '#FF9800',
    },
    border: '#E6E6E6',
    textContrast: '#000000',
    textVerySubtle: '#DDD',
    textSubtle: '#6E6E6E',
    highlight: '#FFFBCC',
    errorBackground: '#FFEBEE',
    warningBackground: '#F59B23',
    infoBackground: '#ebf5ff',
    errorText: '#CA001B',
    infoText: '#004e8a',
    warningText: '#000000',
    linkHover: '#2196F3',
    link: '#0A6EBE',
    gold: yellow.A700,
    navigation: {
      background: '#00143c',
      indicator: '#dfc891',
      color: '#b5b5b5',
      selectedColor: '#dfc891',
    },
    pinSidebarButton: {
      icon: '#181818',
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
