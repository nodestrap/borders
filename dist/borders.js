import createCssConfig from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import * as radius from './borders-radiuses';
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
