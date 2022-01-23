import createCssConfig from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import * as radius from './borders-radiuses.js';
const radiuses = radius.radiuses;
export { radiuses, radius };
export { radiuses as borderRadiuses, radius as borderRadius };
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    const widths = {
        none: '0px',
        hair: '1px',
        thin: '2px',
        bold: '4px',
    };
    const styles = {
        color: 'currentColor',
        style: 'solid',
    };
    const defaults = {
        defaultWidth: widths.hair,
        default: [[styles.style, widths.hair, styles.color]],
    };
    return {
        ...widths,
        ...styles,
        ...defaults,
    };
}, { prefix: 'bd' });
export { cssProps as borders, cssProps as default };
// setup css variables:
cssProps.defaultWidth = cssProps.hair;
cssProps.default = [[cssProps.style, cssProps.defaultWidth, cssProps.color]];
