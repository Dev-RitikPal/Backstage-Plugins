import { BackstageOverrides } from '@backstage/core-components';
import { BackstageOverrides as CatalogReactOverrides } from '@backstage/plugin-catalog-react';
import { BackstageTheme, createTheme, genPageTheme, lightTheme, shapes } from '@backstage/theme';

import { AutocompleteClassKey } from '@material-ui/lab/Autocomplete';
import { AlertClassKey } from '@material-ui/lab/Alert';
import SignInBackgroud from './../../assets/rp-signin-page.png'


// Labs types not included in overrides; https://github.com/mui/material-ui/issues/19427
declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey {
    MuiAlert: AlertClassKey;
    MuiAutocomplete: AutocompleteClassKey;
  }
}

const baseTheme = createTheme({
  palette: {
    ...lightTheme.palette,
    primary: {
      main: '#1F40E6',
      light: '#4C9AFF',
      dark: '#172B4D',
    },
    secondary: {
      main: '#FF5630',
      light: '#FFAB00',
      dark: '#6554C0',
    },
    grey: {
      50: '#C1C7D0',
      100: '#7A869A',
      200: '#6B778C',
      300: '#5E6C84',
      400: '#505F79',
      500: '#42526E',
      600: '#344563',
      700: '#253858',
      800: '#172B4D',
      900: '#091E42',
    },
    error: {
      main: '#FF5630',
      light: '#FF8F73',
      dark: '#DE350B',
    },
    warning: {
      main: '#FFAB00',
      light: '#FFE380',
      dark: '#FF8B00',
    },
    success: {
      main: '#36B37E',
      light: '#79F2C0',
      dark: '#006644',
    },
    info: {
      main: '#0065FF',
      light: '#4C9AFF',
      dark: '#0747A6',
    },
    navigation: {
      ...lightTheme.palette.navigation,
      background: '#1F40E6',
      color: '#FFFFFF',
      indicator: '#1F4100',
      selectedColor: '#63C5DA',
      navItem: {
        hoverBackground: '#0492C2',
      },
    },
    text: {
      primary: '#000000',
    },
    background: {
      default: '#F0F0F0',
      paper: '#F8F8F8',
    },
  },

  fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
  defaultPageTheme: 'home',

  pageTheme: {
    home: genPageTheme({colors: ['#1F40E6', '#1F40E6'], shape: shapes.round}),
    documentation: genPageTheme({colors: ['#1F40E6', '#1F40E6'], shape: shapes.round}),
    tool: genPageTheme({colors: ['#1F40E6', '#1F40E6'], shape: shapes.round}),
    service: genPageTheme({colors: ['#1F40E6', '#1F40E6'], shape: shapes.round}),
    website: genPageTheme({colors: ['#1F40E6', '#1F40E6'], shape: shapes.round}),
    library: genPageTheme({colors: ['#1F40E6', '#1F40E6'], shape: shapes.round}),
    other: genPageTheme({colors: ['#1F40E6', '#1F40E6'], shape: shapes.round}),
    app: genPageTheme({colors: ['#1F40E6', '#1F40E6'], shape: shapes.round}),
    apis: genPageTheme({colors: ['#1F40E6', '#1F40E6'], shape: shapes.round}),
  },
});

type CustomValues = {
  SignInPageBackground: string
}

const createCustomThemeOverrides = (
  theme: BackstageTheme,
): BackstageOverrides & CatalogReactOverrides & {
   CustomValues?: CustomValues
} => {
  return {
    CustomValues: {
      SignInPageBackground: `url(${SignInBackgroud})`
    },
    BackstageHeader: {
      header: {
        boxShadow: theme.shadows[4],
        paddingBottom: theme.spacing(3),
      },
      title: {
        color: '#FFFFFF',
        fontWeight: 800,
      },
      subtitle: {
        color: '#FFFFFF',
      },
      type: {
        color: '#FFFFFF',
      },
    },
    BackstageHeaderTabs: {
      defaultTab: {
        fontSize: 'inherit',
        textTransform: 'none',
      },
    },
    BackstageOpenedDropdown: {
      icon: {
        '& path': {
          fill: '#FFFFFF',
        },
      },
    },
    BackstageTable: {
      root: {
        '&> :first-child': {
          borderBottom: '1px solid #D5D5D5',
          boxShadow: 'none',
        },
        '& th': {
          borderTop: 'none',
          textTransform: 'none !important',
        },
      },
    },
    CatalogReactUserListPicker: {
      title: {
        textTransform: 'none',
      },
      root: {
        backgroundColor: '#F8F8F8',
        boxShadow: 'none',
        margin: theme.spacing(1, 0, 1, 0),
      },
    },
    MuiAlert: {
      root: {
        borderRadius: 0,
      },
      standardError: {
        color: '#FFFFFF',
        backgroundColor: theme.palette.error.dark,
        '& $icon': {
          color: '#FFFFFF',
        },
      },
      standardInfo: {
        color: '#FFFFFF',
        backgroundColor: theme.palette.primary.dark,
        '& $icon': {
          color: '#FFFFFF',
        },
      },
      standardSuccess: {
        color: '#FFFFFF',
        backgroundColor: theme.palette.success.dark,
        '& $icon': {
          color: '#FFFFFF',
        },
      },
      standardWarning: {
        color: theme.palette.grey[700],
        backgroundColor: theme.palette.secondary.light,
        '& $icon': {
          color: theme.palette.grey[700],
        },
      },
    },
    MuiAutocomplete: {
      root: {
        '&[aria-expanded=true]': {
          backgroundColor: '#FFFFFF',
          color: '#000000',
        },
        '&[aria-expanded=true] path': {
          fill: '#FFFFFF',
        },
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(9,30,69,0.54)',
      },
    },
    MuiButton: {
      root: {
        borderRadius: 3,
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
      },
    },
    MuiChip: {
      root: {
        borderRadius: 3,
        backgroundColor: theme.palette.grey[50],
        color: theme.palette.primary.dark,
        margin: 4,
      },
    },
    MuiSelect: {
      root: {
        '&[aria-expanded]': {
          backgroundColor: '#FFFFFF',
          color: '#000000',
        },
      },
    },
    MuiSwitch: {
      root: {
        padding: 10,
      },
      switchBase: {
        padding: 12,
      },
      thumb: {
        backgroundColor: '#FFFFFF',
        height: 14,
        width: 14,
      },
      track: {
        borderRadius: 9,
      },
    },
    MuiTabs: {
      indicator: {
        transition: 'none',
      },
    },
    MuiTypography: {
      button: {
        textTransform: 'none',
      },
    },
  };
};

export const jioTheme: BackstageTheme = {
  ...baseTheme,
  overrides: {
    ...baseTheme.overrides,
    ...createCustomThemeOverrides(baseTheme),
  },
};
