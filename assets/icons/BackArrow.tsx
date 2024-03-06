import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="#000433" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

export default () => <SvgXml xml={xml} width={35} height={35} />;
