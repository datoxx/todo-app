import bgImageLight from './images/bg-mobile-light.jpg';
import bgImagedark from './images/bg-mobile-dark.jpg';
import deskgBgImageLight from './images/bg-desktop-light.jpg';
import deskBgImagedark from './images/bg-desktop-dark.jpg';

export const lightTheme = {
    bgColor: '#F2F2F2',
    bgImg: bgImageLight,
    desktopBgImage: deskgBgImageLight,
    componentBgColor: '#FFFFFF',
    shadow: '0px 35px 50px -15px rgba(194, 195, 214, 0.5)',
    inputColor: '#393A4B',
    placeholderColor: '#9495A5',
    textColor: '#494C6B',
    textDecorationlineColor: '#D1D2DA',
    border: '#E3E4F1',
    listFooterText: '#9495A5',
    hoverButton: '#494C6B',

}

export const darkTheme = {
    bgColor: '#171823',
    bgImg: bgImagedark,
    desktopBgImage: deskBgImagedark,
    componentBgColor: '#25273D',
    shadow: '0px 35px 50px -15px rgba(0, 0, 0, 0.5)',
    inputColor: '#C8CBE7',
    placeholderColor: '#767992',
    textColor: '#C8CBE7',
    textDecorationlineColor: '#4D5067',
    border: '#393A4B',
    listFooterText: '#5B5E7E',
    hoverButton: '#E3E4F1',
}