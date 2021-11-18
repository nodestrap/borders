import createCssConfig from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    const basics = {
        none: '0px',
        sm: '0.2rem',
        md: '0.25rem',
        lg: '0.3rem',
        pill: '50rem',
        circle: '50%',
    };
    const defaults = {
        default: basics.md,
    };
    return {
        ...basics,
        ...defaults,
    };
}, { prefix: 'bd-rd' });
export { cssProps as radiuses, cssProps as default };
