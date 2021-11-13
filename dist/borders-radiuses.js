"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.radiuses = exports.cssConfig = exports.cssVals = exports.cssDecls = exports.cssProps = void 0;
const css_config_1 = __importDefault(require("@cssfn/css-config")); // Stores & retrieves configuration using *css custom properties* (css variables)
// configs:
_a = (0, css_config_1.default)(() => {
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
}, { prefix: 'bd-rd' }), exports.default = exports.radiuses = exports.cssProps = _a[0], exports.cssDecls = _a[1], exports.cssVals = _a[2], exports.cssConfig = _a[3];
exports.radiuses = exports.cssProps;
exports.default = exports.cssProps;
