import { createTheme } from '@mui/material/styles';

export const helixMuiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F5A623',
      light: '#FBBF24',
      dark: '#D98B12',
      contrastText: '#060911',
    },
    secondary: {
      main: '#38BDF8',
      contrastText: '#060911',
    },
    background: {
      default: '#060911',
      paper: '#0B111E',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
    h1: {
      fontFamily: '"Outfit", system-ui, -apple-system, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: '"Outfit", system-ui, -apple-system, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: '"Outfit", system-ui, -apple-system, sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: '"Outfit", system-ui, -apple-system, sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.015em',
    },
    button: {
      fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: 'none',
          padding: '10px 20px',
          whiteSpace: 'nowrap',
          transition: 'transform 160ms cubic-bezier(0.16, 1, 0.3, 1), background-color 160ms ease, border-color 160ms ease',
          '&:hover': {
            boxShadow: 'none',
          },
          '&.MuiButton-containedPrimary': {
            backgroundColor: '#F5A623',
            color: '#060911',
            '&:hover': {
              backgroundColor: '#FBBF24',
            },
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
          backgroundColor: '#0B111E',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 16,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          borderRadius: 10,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.1)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.22)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#F5A623',
            borderWidth: 1.5,
          },
        },
      },
    },
  },
});
