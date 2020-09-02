/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LuiAlert {
        "accent": boolean;
        "type": string;
    }
    interface LuiBadge {
        "pill": boolean;
        "type": string;
    }
    interface LuiButton {
        "ghost": boolean;
        "type": string;
    }
    interface LuiCard {
    }
    interface LuiContainer {
        "center": boolean;
        "fluid": boolean;
    }
    interface LuiFlex {
        "alignContent": string;
        "alignItems": string;
        "direction": string;
        "gutter": number;
        "hgutter": number;
        "justifyContent": string;
        "vgutter": number;
        "wrap": string;
    }
    interface LuiInput {
        "placeholder": string;
    }
}
declare global {
    interface HTMLLuiAlertElement extends Components.LuiAlert, HTMLStencilElement {
    }
    var HTMLLuiAlertElement: {
        prototype: HTMLLuiAlertElement;
        new (): HTMLLuiAlertElement;
    };
    interface HTMLLuiBadgeElement extends Components.LuiBadge, HTMLStencilElement {
    }
    var HTMLLuiBadgeElement: {
        prototype: HTMLLuiBadgeElement;
        new (): HTMLLuiBadgeElement;
    };
    interface HTMLLuiButtonElement extends Components.LuiButton, HTMLStencilElement {
    }
    var HTMLLuiButtonElement: {
        prototype: HTMLLuiButtonElement;
        new (): HTMLLuiButtonElement;
    };
    interface HTMLLuiCardElement extends Components.LuiCard, HTMLStencilElement {
    }
    var HTMLLuiCardElement: {
        prototype: HTMLLuiCardElement;
        new (): HTMLLuiCardElement;
    };
    interface HTMLLuiContainerElement extends Components.LuiContainer, HTMLStencilElement {
    }
    var HTMLLuiContainerElement: {
        prototype: HTMLLuiContainerElement;
        new (): HTMLLuiContainerElement;
    };
    interface HTMLLuiFlexElement extends Components.LuiFlex, HTMLStencilElement {
    }
    var HTMLLuiFlexElement: {
        prototype: HTMLLuiFlexElement;
        new (): HTMLLuiFlexElement;
    };
    interface HTMLLuiInputElement extends Components.LuiInput, HTMLStencilElement {
    }
    var HTMLLuiInputElement: {
        prototype: HTMLLuiInputElement;
        new (): HTMLLuiInputElement;
    };
    interface HTMLElementTagNameMap {
        "lui-alert": HTMLLuiAlertElement;
        "lui-badge": HTMLLuiBadgeElement;
        "lui-button": HTMLLuiButtonElement;
        "lui-card": HTMLLuiCardElement;
        "lui-container": HTMLLuiContainerElement;
        "lui-flex": HTMLLuiFlexElement;
        "lui-input": HTMLLuiInputElement;
    }
}
declare namespace LocalJSX {
    interface LuiAlert {
        "accent"?: boolean;
        "type"?: string;
    }
    interface LuiBadge {
        "pill"?: boolean;
        "type"?: string;
    }
    interface LuiButton {
        "ghost"?: boolean;
        "type"?: string;
    }
    interface LuiCard {
    }
    interface LuiContainer {
        "center"?: boolean;
        "fluid"?: boolean;
    }
    interface LuiFlex {
        "alignContent"?: string;
        "alignItems"?: string;
        "direction"?: string;
        "gutter"?: number;
        "hgutter"?: number;
        "justifyContent"?: string;
        "vgutter"?: number;
        "wrap"?: string;
    }
    interface LuiInput {
        "placeholder"?: string;
    }
    interface IntrinsicElements {
        "lui-alert": LuiAlert;
        "lui-badge": LuiBadge;
        "lui-button": LuiButton;
        "lui-card": LuiCard;
        "lui-container": LuiContainer;
        "lui-flex": LuiFlex;
        "lui-input": LuiInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "lui-alert": LocalJSX.LuiAlert & JSXBase.HTMLAttributes<HTMLLuiAlertElement>;
            "lui-badge": LocalJSX.LuiBadge & JSXBase.HTMLAttributes<HTMLLuiBadgeElement>;
            "lui-button": LocalJSX.LuiButton & JSXBase.HTMLAttributes<HTMLLuiButtonElement>;
            "lui-card": LocalJSX.LuiCard & JSXBase.HTMLAttributes<HTMLLuiCardElement>;
            "lui-container": LocalJSX.LuiContainer & JSXBase.HTMLAttributes<HTMLLuiContainerElement>;
            "lui-flex": LocalJSX.LuiFlex & JSXBase.HTMLAttributes<HTMLLuiFlexElement>;
            "lui-input": LocalJSX.LuiInput & JSXBase.HTMLAttributes<HTMLLuiInputElement>;
        }
    }
}
