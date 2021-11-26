import type { Prop, Cust } from '@cssfn/css-types';
import * as radius from './borders-radiuses.js';
declare const radiuses: import("@cssfn/css-config").Refs<{
    default: radius.BorderRadius;
    none: radius.BorderRadius;
    sm: radius.BorderRadius;
    md: radius.BorderRadius;
    lg: radius.BorderRadius;
    pill: radius.BorderRadius;
    circle: radius.BorderRadius;
}>;
export { radiuses, radius };
export { radiuses as borderRadiuses, radius as borderRadius };
export declare type BorderWidth = Prop.BorderWidth | Cust.Expr;
export declare type BorderColor = Prop.BorderColor | Cust.Expr;
export declare type BorderStyle = Prop.BorderStyle | Cust.Expr;
export declare type Border = Prop.Border | Cust.Expr;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    defaultWidth: BorderWidth;
    default: Border;
    color: BorderColor;
    style: BorderStyle;
    none: BorderWidth;
    hair: BorderWidth;
    thin: BorderWidth;
    bold: BorderWidth;
}>, cssDecls: import("@cssfn/css-config").Decls<{
    defaultWidth: BorderWidth;
    default: Border;
    color: BorderColor;
    style: BorderStyle;
    none: BorderWidth;
    hair: BorderWidth;
    thin: BorderWidth;
    bold: BorderWidth;
}>, cssVals: import("@cssfn/css-config").Vals<{
    defaultWidth: BorderWidth;
    default: Border;
    color: BorderColor;
    style: BorderStyle;
    none: BorderWidth;
    hair: BorderWidth;
    thin: BorderWidth;
    bold: BorderWidth;
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export { cssProps as borders, cssProps as default };
