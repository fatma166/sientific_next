// EDIT COLORS ALSO IN 'tailwind.config', 'general.css' and 'ANTD_THEME' files
import { ThemeConfig, theme } from 'antd';


const MAIN_THEME_TOKEN: ThemeConfig['token'] = {
  borderRadius: 10,
  borderRadiusLG: 12,
  borderRadiusOuter: 12,
  fontFamily: `inherit`,
  fontSize: 14,
  fontSizeXL: 16,
  controlHeight: 48,
  controlHeightLG: 51,

  colorPrimary: 'rgb(86, 81, 225)',
  colorError: '#B81428',
  colorInfo: '#05B2DC',
  colorSuccess: '#136741',
  colorWarning: '#FD7E14',
}


export const ANTD_THEME: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgBase: 'rgba(247, 249, 252, 1)',
    colorTextBase: 'rgba(22, 20, 57, 0.85)',
    colorBorder: '#dee2e6',
    ...MAIN_THEME_TOKEN

  },
  components: {

  }
};


export const ANTD_THEME_DARK: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorBgBase: 'rgb(15, 15, 27)',
    colorTextBase: 'rgba(255, 255, 255, 75)',
    colorBorder: 'rgb(47, 47, 80)',

    ...MAIN_THEME_TOKEN
  },
  components: {
    Segmented: {
      trackBg: '#171727',
      itemSelectedBg: 'rgba(138, 43, 226, 0.15)'
    }
  }
};



// export const ANTD_THEME: ThemeConfig = {
//   algorithm: theme.darkAlgorithm,
//   token: {
//     colorBgBase: '#0F0F1B',
//     colorBgContainer: "#171727",
//     colorPrimary: '#511D85',
//     colorLink: '#8A2BE2',
//     colorTextBase: '#ffffff',
//     colorError: '#B81428',
//     colorInfo: '#05B2DC',
//     colorSuccess: '#136741',
//     colorWarning: '#FD7E14',

//     colorBorder: "#171727",

//     borderRadius: 12,
//     fontFamily: `inherit`,
//     fontSize: 16,
//     controlHeight: 48,
//   },
//   components: {
//     Segmented: {
//       itemActiveBg: '#511D85',
//       itemSelectedBg: '#511D85',
//     },
//   }
// };


