"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.borders = exports.cssConfig = exports.cssVals = exports.cssDecls = exports.cssProps = exports.borderRadius = exports.borderRadiuses = exports.radius = exports.radiuses = void 0;
const css_config_1 = __importDefault(require("@cssfn/css-config")); // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
const radius = __importStar(require("./borders-radiuses"));
exports.radius = radius;
exports.borderRadius = radius;
const radiuses = radius.radiuses;
exports.radiuses = radiuses;
exports.borderRadiuses = radiuses;
// configs:
_a = (0, css_config_1.default)(() => {
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
}, { prefix: 'bd' }), exports.default = exports.borders = exports.cssProps = _a[0], exports.cssDecls = _a[1], exports.cssVals = _a[2], exports.cssConfig = _a[3];
exports.borders = exports.cssProps;
exports.default = exports.cssProps;
