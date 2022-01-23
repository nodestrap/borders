// cssfn:
import type {
    Prop,
    Cust,
}                           from '@cssfn/css-types'   // ts defs support for cssfn
import createCssConfig      from '@cssfn/css-config'  // Stores & retrieves configuration using *css custom properties* (css variables)

// nodestrap utilities:
import * as radius          from './borders-radiuses.js'



const radiuses = radius.radiuses;
export { radiuses, radius };
export { radiuses as borderRadiuses, radius as borderRadius };



// general types:
export type BorderWidth = Prop.BorderWidth | Cust.Expr
export type BorderColor = Prop.BorderColor | Cust.Expr
export type BorderStyle = Prop.BorderStyle | Cust.Expr
export type Border      = Prop.Border      | Cust.Expr



// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    const widths = {
        none  : '0px' as BorderWidth,
        hair  : '1px' as BorderWidth,
        thin  : '2px' as BorderWidth,
        bold  : '4px' as BorderWidth,
    };
    
    const styles = {
        color : 'currentColor' as BorderColor,
        style : 'solid'        as BorderStyle,
    };
    
    const defaults = {
        defaultWidth : widths.hair                                 as BorderWidth,
        default      : [[styles.style, widths.hair, styles.color]] as Border,
    };
    
    return {
        ...widths,
        ...styles,
        ...defaults,
    };
}, { prefix: 'bd' });
export { cssProps as borders, cssProps as default }



// setup css variables:
cssProps.defaultWidth = cssProps.hair;
cssProps.default      = [[cssProps.style, cssProps.defaultWidth, cssProps.color]] as any;
