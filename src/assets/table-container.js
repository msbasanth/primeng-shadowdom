import { css, html, LitElement } from "lit-element";

/**
 * @prop {String} theme - Default light. Defines the color theme of the page. Accepted values are light and dark.
 * @prop {Boolean} scrollable - Default false. Defines whether the page scrolls or not.
 * @prop {Boolean} flat - Default false. Changes the page background to Base 3 for cases when cards are not necessary for hosting the content.
 * @prop {Boolean} dicom - Default false. Changes the UI2, UI3 and UI4 colors of the page so that the orange shades can be adapted to DICOM compliant monitors.
 * @prop {Boolean} noPadding - Default undefined. Removes the default padding from the main content area of the page.
 * @slot unnamed - Takes any component as a child. Corresponds to the main content area.
 * @slot access - Takes Access Bar as a child.
 * @slot nav - Takes Navigation Bar as a child.
 * @slot left - Takes Pane as a child.
 * @slot right - Takes Pane as a child.
 * @slot footer - Takes Navigation Bar as a child.
 */

export class TableContainer extends LitElement {
  static get properties() {
    return {
      theme: { type: String, reflect: true },
      scrollable: { type: Boolean, reflect: true },
      flat: { type: Boolean, reflect: true },
      dicom: { type: Boolean, reflect: true },
      noPadding: { type: Boolean, reflect: true, attribute: "no-padding" },
    };
  }

  static styles = css`
    :host {
      width: 100%;
      height: 1000px;
      display: block;
    }

    .page-wrapper {
      display: block;
      width: 100%;
      height: 1000px;
    }
  `;

  /*createRenderRoot() {
    return this;
  }*/

  render() {
    return html`<div class="page-wrapper"><slot></slot></div>`;
  }

  constructor() {
    super();
    this.theme = "light";
  }
}

customElements.define("table-container", TableContainer);
