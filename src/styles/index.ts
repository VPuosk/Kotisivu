import { vertical, horizontal } from "./shapes";
import { colors } from "./colors";

const style = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    barBackground: '#253030',
    barFont: '#ccc',
    background: '#CCC',
    repositoryBackground: '#eee',
    languageBackground: '#55d',
    errorTextColor: '#ee2222',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: 'System',
    android: 'Roboto',
    ios: 'Arial',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },

  bigbox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#22d',
    color: '#ccc',
    padding: 10,
    margin: 5
  },

  bigredbox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#d22',
    color: '#ccc',
    padding: 10,
    margin: 5
  },

  navbar: {
    ...vertical,
    padding:10,
    width: '700px',
    borderRadius: '5% / 50%',
    borderStyle: 'solid',
    borderColor: 'rgb(100,100,255)',
    background: 'rgba(220,220,255,0.65)'
    //backgroundImage: "linear-gradient(to right, rgba(220,220,255,1) 50%, rgba(20,20,155,0))",
  },
  
  navbarButton: {
    padding: 2,
    margin: 5,
    width: '120px', // jotta tuo borderRadius toimisi oikein...
    background: 'rgba(200,200,255,0.95)',
    borderRadius: '10% / 50%'
  },

  navbarText: {
    padding: 5,
    fontSize: '1.35em',
  },

  CVlist: {
    ...horizontal,
    margin: 3,
    paddingLeft: 40,
    width: '650px',
    borderStyle: 'solid',
    borderColor: colors.CVBorderColor,
    background: colors.CVBackgroundColor,
  },

  CVitemBar: {
    ...vertical,
  },

  CVitemHeader: {
    ...vertical,
    fontSize: '1.25em',
  },

  CVHR: {
    border: '1px',
    borderStyle: 'solid',
    borderColor: colors.CVBorderColor
  },

  muutOhjelmointiPalkki: {
    ...horizontal
  },

  muutOhjelmointiRivi: {
    ...vertical
  },

  backgroundImage: {
    backgroundImage: `url(/Ruissalo_06m.jpg)`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  backgroundFilter: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.BackgroundImageFilter,
  }
  
};

export default style;