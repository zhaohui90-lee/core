// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

// This code is based on react definition in DefinitelyTyped published under the MIT license.
//      Repository: https://github.com/DefinitelyTyped/DefinitelyTyped
//      Path in the repository: types/react/index.d.ts
//
// Copyrights of original definition are:
//      AssureSign <http://www.assuresign.com>
//      Microsoft <https://microsoft.com>
//                 John Reilly <https://github.com/johnnyreilly>
//      Benoit Benezech <https://github.com/bbenezech>
//      Patricio Zavolinsky <https://github.com/pzavolinsky>
//      Digiguru <https://github.com/digiguru>
//      Eric Anderson <https://github.com/ericanderson>
//      Dovydas Navickas <https://github.com/DovydasNavickas>
//                 Josh Rutherford <https://github.com/theruther4d>
//                 Guilherme Hübner <https://github.com/guilhermehubner>
//                 Ferdy Budhidharma <https://github.com/ferdaber>
//                 Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
//                 Olivier Pascal <https://github.com/pascaloliv>
//                 Martin Hochel <https://github.com/hotell>
//                 Frank Li <https://github.com/franklixuefei>
//                 Jessica Franco <https://github.com/Jessidhia>
//                 Saransh Kataria <https://github.com/saranshkataria>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 Sebastian Silbermann <https://github.com/eps1lon>

import * as CSS from 'csstype'

export interface CSSProperties
  extends CSS.Properties<string | Numberish>,
    CSS.PropertiesHyphen<string | Numberish> {
  /**
   * The index signature was removed to enable closed typing for style
   * using CSSType. You're able to use type assertion or module augmentation
   * to add properties or an index signature of your own.
   *
   * For examples and more information, visit:
   * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
   */
  [v: `--${string}`]: string | Numberish | undefined
}

type Booleanish = boolean | 'true' | 'false'
type Numberish = number | string
type CrossOrigin = 'anonymous' | 'use-credentials' | '' | undefined

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
export interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: string | undefined
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: Booleanish | undefined
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both' | undefined
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  /**
   * Defines a string value that labels the current element, which is intended to be converted into Braille.
   * @see aria-label.
   */
  'aria-braillelabel'?: string | undefined
  /**
   * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
   * @see aria-roledescription.
   */
  'aria-brailleroledescription'?: string | undefined
  'aria-busy'?: Booleanish | undefined
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  'aria-checked'?: boolean | 'false' | 'mixed' | 'true' | undefined
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  'aria-colcount'?: Numberish | undefined
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  'aria-colindex'?: Numberish | undefined
  /**
   * Defines a human readable text alternative of aria-colindex.
   * @see aria-rowindextext.
   */
  'aria-colindextext'?: string | undefined
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  'aria-colspan'?: Numberish | undefined
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  'aria-controls'?: string | undefined
  /** Indicates the element that represents the current item within a container or set of related elements. */
  'aria-current'?:
    | boolean
    | 'false'
    | 'true'
    | 'page'
    | 'step'
    | 'location'
    | 'date'
    | 'time'
    | undefined
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  'aria-describedby'?: string | undefined
  /**
   * Defines a string value that describes or annotates the current element.
   * @see related aria-describedby.
   */
  'aria-description'?: string | undefined
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  'aria-details'?: string | undefined
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  'aria-disabled'?: Booleanish | undefined
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  'aria-dropeffect'?:
    | 'none'
    | 'copy'
    | 'execute'
    | 'link'
    | 'move'
    | 'popup'
    | undefined
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  'aria-errormessage'?: string | undefined
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded'?: Booleanish | undefined
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  'aria-flowto'?: string | undefined
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  'aria-grabbed'?: Booleanish | undefined
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?:
    | boolean
    | 'false'
    | 'true'
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog'
    | undefined
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  'aria-hidden'?: Booleanish | undefined
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  'aria-invalid'?:
    | boolean
    | 'false'
    | 'true'
    | 'grammar'
    | 'spelling'
    | undefined
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  'aria-keyshortcuts'?: string | undefined
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  'aria-label'?: string | undefined
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  'aria-labelledby'?: string | undefined
  /** Defines the hierarchical level of an element within a structure. */
  'aria-level'?: Numberish | undefined
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  'aria-live'?: 'off' | 'assertive' | 'polite' | undefined
  /** Indicates whether an element is modal when displayed. */
  'aria-modal'?: Booleanish | undefined
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline'?: Booleanish | undefined
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable'?: Booleanish | undefined
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  'aria-orientation'?: 'horizontal' | 'vertical' | undefined
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  'aria-owns'?: string | undefined
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  'aria-placeholder'?: string | undefined
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  'aria-posinset'?: Numberish | undefined
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  'aria-pressed'?: boolean | 'false' | 'mixed' | 'true' | undefined
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  'aria-readonly'?: Booleanish | undefined
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  'aria-relevant'?:
    | 'additions'
    | 'additions removals'
    | 'additions text'
    | 'all'
    | 'removals'
    | 'removals additions'
    | 'removals text'
    | 'text'
    | 'text additions'
    | 'text removals'
    | undefined
  /** Indicates that user input is required on the element before a form may be submitted. */
  'aria-required'?: Booleanish | undefined
  /** Defines a human-readable, author-localized description for the role of an element. */
  'aria-roledescription'?: string | undefined
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  'aria-rowcount'?: Numberish | undefined
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  'aria-rowindex'?: Numberish | undefined
  /**
   * Defines a human readable text alternative of aria-rowindex.
   * @see aria-colindextext.
   */
  'aria-rowindextext'?: string | undefined
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  'aria-rowspan'?: Numberish | undefined
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  'aria-selected'?: Booleanish | undefined
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  'aria-setsize'?: Numberish | undefined
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | undefined
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax'?: Numberish | undefined
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin'?: Numberish | undefined
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  'aria-valuenow'?: Numberish | undefined
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext'?: string | undefined
}

// Vue's style normalization supports nested arrays
export type StyleValue = string | CSSProperties | Array<StyleValue>

export interface HTMLAttributes extends AriaAttributes, EventHandlers<Events> {
  innerHTML?: string

  class?: any
  style?: StyleValue

  // Standard HTML Attributes
  accesskey?: string
  contenteditable?: Booleanish | 'inherit'
  contextmenu?: string
  dir?: string
  draggable?: Booleanish
  hidden?: Booleanish | '' | 'hidden' | 'until-found'
  id?: string
  inert?: Booleanish
  lang?: string
  placeholder?: string
  spellcheck?: Booleanish
  tabindex?: Numberish
  title?: string
  translate?: 'yes' | 'no'

  // Unknown
  radiogroup?: string // <command>, <menuitem>

  // WAI-ARIA
  role?: string

  // RDFa Attributes
  about?: string
  datatype?: string
  inlist?: any
  prefix?: string
  property?: string
  resource?: string
  typeof?: string
  vocab?: string

  // Non-standard Attributes
  autocapitalize?: string
  autocorrect?: string
  autosave?: string
  color?: string
  itemprop?: string
  itemscope?: Booleanish
  itemtype?: string
  itemid?: string
  itemref?: string
  results?: Numberish
  security?: string
  unselectable?: 'on' | 'off'

  // Living Standard
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
   */
  inputmode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
  /**
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  is?: string
}

type HTMLAttributeReferrerPolicy =
  | ''
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url'

type HTMLAttributeAnchorTarget =
  | '_self'
  | '_blank'
  | '_parent'
  | '_top'
  | (string & {})

type AriaRole =
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'button'
  | 'cell'
  | 'checkbox'
  | 'columnheader'
  | 'combobox'
  | 'complementary'
  | 'contentinfo'
  | 'definition'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'form'
  | 'grid'
  | 'gridcell'
  | 'group'
  | 'heading'
  | 'img'
  | 'link'
  | 'list'
  | 'listbox'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'search'
  | 'searchbox'
  | 'separator'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tablist'
  | 'tabpanel'
  | 'term'
  | 'textbox'
  | 'timer'
  | 'toolbar'
  | 'tooltip'
  | 'tree'
  | 'treegrid'
  | 'treeitem'
  | (string & {})

export interface AnchorHTMLAttributes extends HTMLAttributes {
  download?: any
  href?: string | undefined
  hrefLang?: string | undefined
  media?: string | undefined
  ping?: string | undefined
  target?: HTMLAttributeAnchorTarget | undefined
  type?: string | undefined
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined
}

interface AudioHTMLAttributes extends MediaHTMLAttributes {}

export interface AreaHTMLAttributes extends HTMLAttributes {
  alt?: string | undefined
  coords?: string | undefined
  download?: any
  href?: string | undefined
  hrefLang?: string | undefined
  media?: string | undefined
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined
  shape?: string | undefined
  target?: string | undefined
}

export interface BaseHTMLAttributes extends HTMLAttributes {
  href?: string | undefined
  target?: string | undefined
}

export interface BlockquoteHTMLAttributes extends HTMLAttributes {
  cite?: string | undefined
}

export interface ButtonHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish | undefined
  form?: string | undefined
  formAction?: string | undefined
  formEncType?: string | undefined
  formMethod?: string | undefined
  formNoValidate?: Booleanish | undefined
  formTarget?: string | undefined
  name?: string | undefined
  type?: 'submit' | 'reset' | 'button' | undefined
  value?: string | ReadonlyArray<string> | Numberish | undefined
}

export interface CanvasHTMLAttributes extends HTMLAttributes {
  height?: Numberish | undefined
  width?: Numberish | undefined
}

export interface ColHTMLAttributes extends HTMLAttributes {
  span?: Numberish | undefined
  width?: Numberish | undefined
}

export interface ColgroupHTMLAttributes extends HTMLAttributes {
  span?: Numberish | undefined
}

export interface DataHTMLAttributes extends HTMLAttributes {
  value?: string | ReadonlyArray<string> | Numberish | undefined
}

export interface DetailsHTMLAttributes extends HTMLAttributes {
  open?: Booleanish | undefined
}

export interface DelHTMLAttributes extends HTMLAttributes {
  cite?: string | undefined
  dateTime?: string | undefined
}

export interface DialogHTMLAttributes extends HTMLAttributes {
  open?: Booleanish | undefined
}

export interface EmbedHTMLAttributes extends HTMLAttributes {
  height?: Numberish | undefined
  src?: string | undefined
  type?: string | undefined
  width?: Numberish | undefined
}

export interface FieldsetHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish | undefined
  form?: string | undefined
  name?: string | undefined
}

export interface FormHTMLAttributes extends HTMLAttributes {
  acceptCharset?: string | undefined
  action?: string | undefined
  autoComplete?: string | undefined
  encType?: string | undefined
  method?: string | undefined
  name?: string | undefined
  noValidate?: Booleanish | undefined
  target?: string | undefined
}

export interface HtmlHTMLAttributes extends HTMLAttributes {
  manifest?: string | undefined
}

export interface IframeHTMLAttributes extends HTMLAttributes {
  allow?: string | undefined
  allowFullScreen?: Booleanish | undefined
  allowTransparency?: Booleanish | undefined
  /** @deprecated */
  frameBorder?: Numberish | undefined
  height?: Numberish | undefined
  loading?: 'eager' | 'lazy' | undefined
  /** @deprecated */
  marginHeight?: Numberish | undefined
  /** @deprecated */
  marginWidth?: Numberish | undefined
  name?: string | undefined
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined
  sandbox?: string | undefined
  /** @deprecated */
  scrolling?: string | undefined
  seamless?: Booleanish | undefined
  src?: string | undefined
  srcDoc?: string | undefined
  width?: Numberish | undefined
}

export interface ImgHTMLAttributes extends HTMLAttributes {
  alt?: string | undefined
  crossOrigin?: CrossOrigin
  decoding?: 'async' | 'auto' | 'sync' | undefined
  height?: Numberish | undefined
  loading?: 'eager' | 'lazy' | undefined
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined
  sizes?: string | undefined
  src?: string | undefined
  srcSet?: string | undefined
  useMap?: string | undefined
  width?: Numberish | undefined
}

export interface InsHTMLAttributes extends HTMLAttributes {
  cite?: string | undefined
  dateTime?: string | undefined
}

type HTMLInputTypeAttribute =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | (string & {})

export interface InputHTMLAttributes extends HTMLAttributes {
  accept?: string | undefined
  alt?: string | undefined
  autoComplete?: string | undefined
  capture?: Booleanish | 'user' | 'environment' | undefined // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
  checked?: Booleanish | undefined
  disabled?: Booleanish | undefined
  enterKeyHint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send'
    | undefined
  form?: string | undefined
  formAction?: string | undefined
  formEncType?: string | undefined
  formMethod?: string | undefined
  formNoValidate?: Booleanish | undefined
  formTarget?: string | undefined
  height?: Numberish | undefined
  list?: string | undefined
  max?: Numberish | undefined
  maxLength?: Numberish | undefined
  min?: Numberish | undefined
  minLength?: Numberish | undefined
  multiple?: Booleanish | undefined
  name?: string | undefined
  pattern?: string | undefined
  placeholder?: string | undefined
  readOnly?: Booleanish | undefined
  required?: Booleanish | undefined
  size?: Numberish | undefined
  src?: string | undefined
  step?: Numberish | undefined
  type?: HTMLInputTypeAttribute | undefined
  value?: string | ReadonlyArray<string> | Numberish | undefined
  width?: Numberish | undefined
}

export interface KeygenHTMLAttributes extends HTMLAttributes {
  challenge?: string | undefined
  disabled?: Booleanish | undefined
  form?: string | undefined
  keyType?: string | undefined
  keyParams?: string | undefined
  name?: string | undefined
}

export interface LabelHTMLAttributes extends HTMLAttributes {
  form?: string | undefined
  htmlFor?: string | undefined
}

export interface LiHTMLAttributes extends HTMLAttributes {
  value?: string | ReadonlyArray<string> | Numberish | undefined
}

export interface LinkHTMLAttributes extends HTMLAttributes {
  as?: string | undefined
  crossOrigin?: CrossOrigin
  fetchPriority?: 'high' | 'low' | 'auto'
  href?: string | undefined
  hrefLang?: string | undefined
  integrity?: string | undefined
  media?: string | undefined
  imageSrcSet?: string | undefined
  imageSizes?: string | undefined
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined
  sizes?: string | undefined
  type?: string | undefined
  charSet?: string | undefined
}

export interface MapHTMLAttributes extends HTMLAttributes {
  name?: string | undefined
}

export interface MenuHTMLAttributes extends HTMLAttributes {
  type?: string | undefined
}

export interface MediaHTMLAttributes extends HTMLAttributes {
  autoPlay?: Booleanish | undefined
  controls?: Booleanish | undefined
  controlsList?: string | undefined
  crossOrigin?: CrossOrigin
  loop?: Booleanish | undefined
  mediaGroup?: string | undefined
  muted?: Booleanish | undefined
  playsInline?: Booleanish | undefined
  preload?: string | undefined
  src?: string | undefined
}

export interface MetaHTMLAttributes extends HTMLAttributes {
  charSet?: string | undefined
  httpEquiv?: string | undefined
  name?: string | undefined
  media?: string | undefined
  content?: string | undefined
}

export interface MeterHTMLAttributes extends HTMLAttributes {
  form?: string | undefined
  high?: Numberish | undefined
  low?: Numberish | undefined
  max?: Numberish | undefined
  min?: Numberish | undefined
  optimum?: Numberish | undefined
  value?: string | ReadonlyArray<string> | Numberish | undefined
}

export interface QuoteHTMLAttributes extends HTMLAttributes {
  cite?: string | undefined
}

export interface ObjectHTMLAttributes extends HTMLAttributes {
  classID?: string | undefined
  data?: string | undefined
  form?: string | undefined
  height?: Numberish | undefined
  name?: string | undefined
  type?: string | undefined
  useMap?: string | undefined
  width?: Numberish | undefined
  wmode?: string | undefined
}

export interface OlHTMLAttributes extends HTMLAttributes {
  reversed?: Booleanish | undefined
  start?: Numberish | undefined
  type?: '1' | 'a' | 'A' | 'i' | 'I' | undefined
}

export interface OptgroupHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish | undefined
  label?: string | undefined
}

export interface OptionHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish | undefined
  label?: string | undefined
  selected?: Booleanish | undefined
  value?: string | ReadonlyArray<string> | Numberish | undefined
}

export interface OutputHTMLAttributes extends HTMLAttributes {
  form?: string | undefined
  htmlFor?: string | undefined
  name?: string | undefined
}

export interface ParamHTMLAttributes extends HTMLAttributes {
  name?: string | undefined
  value?: string | ReadonlyArray<string> | Numberish | undefined
}

export interface ProgressHTMLAttributes extends HTMLAttributes {
  max?: Numberish | undefined
  value?: string | ReadonlyArray<string> | Numberish | undefined
}

export interface SlotHTMLAttributes extends HTMLAttributes {
  name?: string | undefined
}

export interface ScriptHTMLAttributes extends HTMLAttributes {
  async?: Booleanish | undefined
  /** @deprecated */
  charSet?: string | undefined
  crossOrigin?: CrossOrigin
  defer?: Booleanish | undefined
  integrity?: string | undefined
  noModule?: Booleanish | undefined
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined
  src?: string | undefined
  type?: string | undefined
}

export interface SelectHTMLAttributes extends HTMLAttributes {
  autoComplete?: string | undefined
  disabled?: Booleanish | undefined
  form?: string | undefined
  multiple?: Booleanish | undefined
  name?: string | undefined
  required?: Booleanish | undefined
  size?: Numberish | undefined
  value?: string | ReadonlyArray<string> | Numberish | undefined
}

export interface SourceHTMLAttributes extends HTMLAttributes {
  height?: Numberish | undefined
  media?: string | undefined
  sizes?: string | undefined
  src?: string | undefined
  srcSet?: string | undefined
  type?: string | undefined
  width?: Numberish | undefined
}

export interface StyleHTMLAttributes extends HTMLAttributes {
  media?: string | undefined
  scoped?: Booleanish | undefined
  type?: string | undefined
}

export interface TableHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | undefined
  bgcolor?: string | undefined
  border?: Numberish | undefined
  cellPadding?: Numberish | undefined
  cellSpacing?: Numberish | undefined
  frame?: Booleanish | undefined
  rules?: 'none' | 'groups' | 'rows' | 'columns' | 'all' | undefined
  summary?: string | undefined
  width?: Numberish | undefined
}

export interface TextareaHTMLAttributes extends HTMLAttributes {
  autoComplete?: string | undefined
  cols?: Numberish | undefined
  dirName?: string | undefined
  disabled?: Booleanish | undefined
  form?: string | undefined
  maxLength?: Numberish | undefined
  minLength?: Numberish | undefined
  name?: string | undefined
  placeholder?: string | undefined
  readOnly?: Booleanish | undefined
  required?: Booleanish | undefined
  rows?: Numberish | undefined
  value?: string | ReadonlyArray<string> | Numberish | undefined
  wrap?: string | undefined
}

export interface TdHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined
  colSpan?: Numberish | undefined
  headers?: string | undefined
  rowSpan?: Numberish | undefined
  scope?: string | undefined
  abbr?: string | undefined
  height?: Numberish | undefined
  width?: Numberish | undefined
  valign?: 'top' | 'middle' | 'bottom' | 'baseline' | undefined
}

export interface ThHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined
  colSpan?: Numberish | undefined
  headers?: string | undefined
  rowSpan?: Numberish | undefined
  scope?: string | undefined
  abbr?: string | undefined
}

export interface TimeHTMLAttributes extends HTMLAttributes {
  dateTime?: string | undefined
}

export interface TrackHTMLAttributes extends HTMLAttributes {
  default?: Booleanish | undefined
  kind?: string | undefined
  label?: string | undefined
  src?: string | undefined
  srcLang?: string | undefined
}

interface VideoHTMLAttributes extends MediaHTMLAttributes {
  height?: Numberish | undefined
  playsInline?: Booleanish | undefined
  poster?: string | undefined
  width?: Numberish | undefined
  disablePictureInPicture?: Booleanish | undefined
  disableRemotePlayback?: Booleanish | undefined
}

export interface WebViewHTMLAttributes extends HTMLAttributes {
  allowFullScreen?: Booleanish | undefined
  allowpopups?: Booleanish | undefined
  autosize?: Booleanish | undefined
  blinkfeatures?: string | undefined
  disableblinkfeatures?: string | undefined
  disableguestresize?: Booleanish | undefined
  disablewebsecurity?: Booleanish | undefined
  guestinstance?: string | undefined
  httpreferrer?: string | undefined
  nodeintegration?: Booleanish | undefined
  partition?: string | undefined
  plugins?: Booleanish | undefined
  preload?: string | undefined
  src?: string | undefined
  useragent?: string | undefined
  webpreferences?: string | undefined
}

// this list is "complete" in that it contains every SVG attribute
// The three broad type categories are (in order of restrictiveness):
//   - "Numberish"
//   - "string"
//   - union of string literals
interface SVGAttributes extends AriaAttributes, EventHandlers<Events> {
  innerHTML?: string

  /**
   * SVG Styling Attributes
   * @see https://www.w3.org/TR/SVG/styling.html#ElementSpecificStyling
   */
  class?: any
  style?: StyleValue

  color?: string | undefined
  height?: Numberish | undefined
  id?: string | undefined
  lang?: string | undefined
  max?: Numberish | undefined
  media?: string | undefined
  method?: string | undefined
  min?: Numberish | undefined
  name?: string | undefined
  target?: string | undefined
  type?: string | undefined
  width?: Numberish | undefined

  // Other HTML properties supported by SVG elements in browsers
  role?: AriaRole | undefined
  tabIndex?: Numberish | undefined
  crossOrigin?: CrossOrigin

  // SVG Specific attributes
  accentHeight?: Numberish | undefined
  accumulate?: 'none' | 'sum' | undefined
  additive?: 'replace' | 'sum' | undefined
  alignmentBaseline?:
    | 'auto'
    | 'baseline'
    | 'before-edge'
    | 'text-before-edge'
    | 'middle'
    | 'central'
    | 'after-edge'
    | 'text-after-edge'
    | 'ideographic'
    | 'alphabetic'
    | 'hanging'
    | 'mathematical'
    | 'inherit'
    | undefined
  allowReorder?: 'no' | 'yes' | undefined
  alphabetic?: Numberish | undefined
  amplitude?: Numberish | undefined
  arabicForm?: 'initial' | 'medial' | 'terminal' | 'isolated' | undefined
  ascent?: Numberish | undefined
  attributeName?: string | undefined
  attributeType?: string | undefined
  autoReverse?: Booleanish | undefined
  azimuth?: Numberish | undefined
  baseFrequency?: Numberish | undefined
  baselineShift?: Numberish | undefined
  baseProfile?: Numberish | undefined
  bbox?: Numberish | undefined
  begin?: Numberish | undefined
  bias?: Numberish | undefined
  by?: Numberish | undefined
  calcMode?: Numberish | undefined
  capHeight?: Numberish | undefined
  clip?: Numberish | undefined
  clipPath?: string | undefined
  clipPathUnits?: Numberish | undefined
  clipRule?: Numberish | undefined
  colorInterpolation?: Numberish | undefined
  colorInterpolationFilters?:
    | 'auto'
    | 'sRGB'
    | 'linearRGB'
    | 'inherit'
    | undefined
  colorProfile?: Numberish | undefined
  colorRendering?: Numberish | undefined
  contentScriptType?: Numberish | undefined
  contentStyleType?: Numberish | undefined
  cursor?: Numberish | undefined
  cx?: Numberish | undefined
  cy?: Numberish | undefined
  d?: string | undefined
  decelerate?: Numberish | undefined
  descent?: Numberish | undefined
  diffuseConstant?: Numberish | undefined
  direction?: Numberish | undefined
  display?: Numberish | undefined
  divisor?: Numberish | undefined
  dominantBaseline?: Numberish | undefined
  dur?: Numberish | undefined
  dx?: Numberish | undefined
  dy?: Numberish | undefined
  edgeMode?: Numberish | undefined
  elevation?: Numberish | undefined
  enableBackground?: Numberish | undefined
  end?: Numberish | undefined
  exponent?: Numberish | undefined
  externalResourcesRequired?: Booleanish | undefined
  fill?: string | undefined
  fillOpacity?: Numberish | undefined
  fillRule?: 'nonzero' | 'evenodd' | 'inherit' | undefined
  filter?: string | undefined
  filterRes?: Numberish | undefined
  filterUnits?: Numberish | undefined
  floodColor?: Numberish | undefined
  floodOpacity?: Numberish | undefined
  focusable?: Booleanish | 'auto' | undefined
  fontFamily?: string | undefined
  fontSize?: Numberish | undefined
  fontSizeAdjust?: Numberish | undefined
  fontStretch?: Numberish | undefined
  fontStyle?: Numberish | undefined
  fontVariant?: Numberish | undefined
  fontWeight?: Numberish | undefined
  format?: Numberish | undefined
  fr?: Numberish | undefined
  from?: Numberish | undefined
  fx?: Numberish | undefined
  fy?: Numberish | undefined
  g1?: Numberish | undefined
  g2?: Numberish | undefined
  glyphName?: Numberish | undefined
  glyphOrientationHorizontal?: Numberish | undefined
  glyphOrientationVertical?: Numberish | undefined
  glyphRef?: Numberish | undefined
  gradientTransform?: string | undefined
  gradientUnits?: string | undefined
  hanging?: Numberish | undefined
  horizAdvX?: Numberish | undefined
  horizOriginX?: Numberish | undefined
  href?: string | undefined
  ideographic?: Numberish | undefined
  imageRendering?: Numberish | undefined
  in2?: Numberish | undefined
  in?: string | undefined
  intercept?: Numberish | undefined
  k1?: Numberish | undefined
  k2?: Numberish | undefined
  k3?: Numberish | undefined
  k4?: Numberish | undefined
  k?: Numberish | undefined
  kernelMatrix?: Numberish | undefined
  kernelUnitLength?: Numberish | undefined
  kerning?: Numberish | undefined
  keyPoints?: Numberish | undefined
  keySplines?: Numberish | undefined
  keyTimes?: Numberish | undefined
  lengthAdjust?: Numberish | undefined
  letterSpacing?: Numberish | undefined
  lightingColor?: Numberish | undefined
  limitingConeAngle?: Numberish | undefined
  local?: Numberish | undefined
  markerEnd?: string | undefined
  markerHeight?: Numberish | undefined
  markerMid?: string | undefined
  markerStart?: string | undefined
  markerUnits?: Numberish | undefined
  markerWidth?: Numberish | undefined
  mask?: string | undefined
  maskContentUnits?: Numberish | undefined
  maskUnits?: Numberish | undefined
  mathematical?: Numberish | undefined
  mode?: Numberish | undefined
  numOctaves?: Numberish | undefined
  offset?: Numberish | undefined
  opacity?: Numberish | undefined
  operator?: Numberish | undefined
  order?: Numberish | undefined
  orient?: Numberish | undefined
  orientation?: Numberish | undefined
  origin?: Numberish | undefined
  overflow?: Numberish | undefined
  overlinePosition?: Numberish | undefined
  overlineThickness?: Numberish | undefined
  paintOrder?: Numberish | undefined
  panose1?: Numberish | undefined
  path?: string | undefined
  pathLength?: Numberish | undefined
  patternContentUnits?: string | undefined
  patternTransform?: Numberish | undefined
  patternUnits?: string | undefined
  pointerEvents?: Numberish | undefined
  points?: string | undefined
  pointsAtX?: Numberish | undefined
  pointsAtY?: Numberish | undefined
  pointsAtZ?: Numberish | undefined
  preserveAlpha?: Booleanish | undefined
  preserveAspectRatio?: string | undefined
  primitiveUnits?: Numberish | undefined
  r?: Numberish | undefined
  radius?: Numberish | undefined
  refX?: Numberish | undefined
  refY?: Numberish | undefined
  renderingIntent?: Numberish | undefined
  repeatCount?: Numberish | undefined
  repeatDur?: Numberish | undefined
  requiredExtensions?: Numberish | undefined
  requiredFeatures?: Numberish | undefined
  restart?: Numberish | undefined
  result?: string | undefined
  rotate?: Numberish | undefined
  rx?: Numberish | undefined
  ry?: Numberish | undefined
  scale?: Numberish | undefined
  seed?: Numberish | undefined
  shapeRendering?: Numberish | undefined
  slope?: Numberish | undefined
  spacing?: Numberish | undefined
  specularConstant?: Numberish | undefined
  specularExponent?: Numberish | undefined
  speed?: Numberish | undefined
  spreadMethod?: string | undefined
  startOffset?: Numberish | undefined
  stdDeviation?: Numberish | undefined
  stemh?: Numberish | undefined
  stemv?: Numberish | undefined
  stitchTiles?: Numberish | undefined
  stopColor?: string | undefined
  stopOpacity?: Numberish | undefined
  strikethroughPosition?: Numberish | undefined
  strikethroughThickness?: Numberish | undefined
  string?: Numberish | undefined
  stroke?: string | undefined
  strokeDasharray?: string | Numberish | undefined
  strokeDashoffset?: string | Numberish | undefined
  strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit' | undefined
  strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit' | undefined
  strokeMiterlimit?: Numberish | undefined
  strokeOpacity?: Numberish | undefined
  strokeWidth?: Numberish | undefined
  surfaceScale?: Numberish | undefined
  systemLanguage?: Numberish | undefined
  tableValues?: Numberish | undefined
  targetX?: Numberish | undefined
  targetY?: Numberish | undefined
  textAnchor?: string | undefined
  textDecoration?: Numberish | undefined
  textLength?: Numberish | undefined
  textRendering?: Numberish | undefined
  to?: Numberish | undefined
  transform?: string | undefined
  u1?: Numberish | undefined
  u2?: Numberish | undefined
  underlinePosition?: Numberish | undefined
  underlineThickness?: Numberish | undefined
  unicode?: Numberish | undefined
  unicodeBidi?: Numberish | undefined
  unicodeRange?: Numberish | undefined
  unitsPerEm?: Numberish | undefined
  vAlphabetic?: Numberish | undefined
  values?: string | undefined
  vectorEffect?: Numberish | undefined
  version?: string | undefined
  vertAdvY?: Numberish | undefined
  vertOriginX?: Numberish | undefined
  vertOriginY?: Numberish | undefined
  vHanging?: Numberish | undefined
  vIdeographic?: Numberish | undefined
  viewBox?: string | undefined
  viewTarget?: Numberish | undefined
  visibility?: Numberish | undefined
  vMathematical?: Numberish | undefined
  widths?: Numberish | undefined
  wordSpacing?: Numberish | undefined
  writingMode?: Numberish | undefined
  x1?: Numberish | undefined
  x2?: Numberish | undefined
  x?: Numberish | undefined
  xChannelSelector?: string | undefined
  xHeight?: Numberish | undefined
  xlinkActuate?: string | undefined
  xlinkArcrole?: string | undefined
  xlinkHref?: string | undefined
  xlinkRole?: string | undefined
  xlinkShow?: string | undefined
  xlinkTitle?: string | undefined
  xlinkType?: string | undefined
  xmlBase?: string | undefined
  xmlLang?: string | undefined
  xmlns?: string | undefined
  xmlnsXlink?: string | undefined
  xmlSpace?: string | undefined
  y1?: Numberish | undefined
  y2?: Numberish | undefined
  y?: Numberish | undefined
  yChannelSelector?: string | undefined
  z?: Numberish | undefined
  zoomAndPan?: string | undefined
}

export interface IntrinsicElementAttributes {
  a: AnchorHTMLAttributes
  abbr: HTMLAttributes
  address: HTMLAttributes
  area: AreaHTMLAttributes
  article: HTMLAttributes
  aside: HTMLAttributes
  audio: AudioHTMLAttributes
  b: HTMLAttributes
  base: BaseHTMLAttributes
  bdi: HTMLAttributes
  bdo: HTMLAttributes
  big: HTMLAttributes
  blockquote: BlockquoteHTMLAttributes
  body: HTMLAttributes
  br: HTMLAttributes
  button: ButtonHTMLAttributes
  canvas: CanvasHTMLAttributes
  caption: HTMLAttributes
  center: HTMLAttributes
  cite: HTMLAttributes
  code: HTMLAttributes
  col: ColHTMLAttributes
  colgroup: ColgroupHTMLAttributes
  data: DataHTMLAttributes
  datalist: HTMLAttributes
  dd: HTMLAttributes
  del: DelHTMLAttributes
  details: DetailsHTMLAttributes
  dfn: HTMLAttributes
  dialog: DialogHTMLAttributes
  div: HTMLAttributes
  dl: HTMLAttributes
  dt: HTMLAttributes
  em: HTMLAttributes
  embed: EmbedHTMLAttributes
  fieldset: FieldsetHTMLAttributes
  figcaption: HTMLAttributes
  figure: HTMLAttributes
  footer: HTMLAttributes
  form: FormHTMLAttributes
  h1: HTMLAttributes
  h2: HTMLAttributes
  h3: HTMLAttributes
  h4: HTMLAttributes
  h5: HTMLAttributes
  h6: HTMLAttributes
  head: HTMLAttributes
  header: HTMLAttributes
  hgroup: HTMLAttributes
  hr: HTMLAttributes
  html: HtmlHTMLAttributes
  i: HTMLAttributes
  iframe: IframeHTMLAttributes
  img: ImgHTMLAttributes
  input: InputHTMLAttributes
  ins: InsHTMLAttributes
  kbd: HTMLAttributes
  keygen: KeygenHTMLAttributes
  label: LabelHTMLAttributes
  legend: HTMLAttributes
  li: LiHTMLAttributes
  link: LinkHTMLAttributes
  main: HTMLAttributes
  map: MapHTMLAttributes
  mark: HTMLAttributes
  menu: MenuHTMLAttributes
  menuitem: HTMLAttributes
  meta: MetaHTMLAttributes
  meter: MeterHTMLAttributes
  nav: HTMLAttributes
  noindex: HTMLAttributes
  noscript: HTMLAttributes
  object: ObjectHTMLAttributes
  ol: OlHTMLAttributes
  optgroup: OptgroupHTMLAttributes
  option: OptionHTMLAttributes
  output: OutputHTMLAttributes
  p: HTMLAttributes
  param: ParamHTMLAttributes
  picture: HTMLAttributes
  pre: HTMLAttributes
  progress: ProgressHTMLAttributes
  q: QuoteHTMLAttributes
  rp: HTMLAttributes
  rt: HTMLAttributes
  ruby: HTMLAttributes
  s: HTMLAttributes
  samp: HTMLAttributes
  search: HTMLAttributes
  script: ScriptHTMLAttributes
  section: HTMLAttributes
  select: SelectHTMLAttributes
  small: HTMLAttributes
  source: SourceHTMLAttributes
  span: HTMLAttributes
  strong: HTMLAttributes
  style: StyleHTMLAttributes
  sub: HTMLAttributes
  summary: HTMLAttributes
  sup: HTMLAttributes
  table: TableHTMLAttributes
  template: HTMLAttributes
  tbody: HTMLAttributes
  td: TdHTMLAttributes
  textarea: TextareaHTMLAttributes
  tfoot: HTMLAttributes
  th: ThHTMLAttributes
  thead: HTMLAttributes
  time: TimeHTMLAttributes
  title: HTMLAttributes
  tr: HTMLAttributes
  track: TrackHTMLAttributes
  u: HTMLAttributes
  ul: HTMLAttributes
  var: HTMLAttributes
  video: VideoHTMLAttributes
  wbr: HTMLAttributes
  webview: WebViewHTMLAttributes

  // SVG
  svg: SVGAttributes

  animate: SVGAttributes
  animateMotion: SVGAttributes
  animateTransform: SVGAttributes
  circle: SVGAttributes
  clipPath: SVGAttributes
  defs: SVGAttributes
  desc: SVGAttributes
  ellipse: SVGAttributes
  feBlend: SVGAttributes
  feColorMatrix: SVGAttributes
  feComponentTransfer: SVGAttributes
  feComposite: SVGAttributes
  feConvolveMatrix: SVGAttributes
  feDiffuseLighting: SVGAttributes
  feDisplacementMap: SVGAttributes
  feDistantLight: SVGAttributes
  feDropShadow: SVGAttributes
  feFlood: SVGAttributes
  feFuncA: SVGAttributes
  feFuncB: SVGAttributes
  feFuncG: SVGAttributes
  feFuncR: SVGAttributes
  feGaussianBlur: SVGAttributes
  feImage: SVGAttributes
  feMerge: SVGAttributes
  feMergeNode: SVGAttributes
  feMorphology: SVGAttributes
  feOffset: SVGAttributes
  fePointLight: SVGAttributes
  feSpecularLighting: SVGAttributes
  feSpotLight: SVGAttributes
  feTile: SVGAttributes
  feTurbulence: SVGAttributes
  filter: SVGAttributes
  foreignObject: SVGAttributes
  g: SVGAttributes
  image: SVGAttributes
  line: SVGAttributes
  linearGradient: SVGAttributes
  marker: SVGAttributes
  mask: SVGAttributes
  metadata: SVGAttributes
  mpath: SVGAttributes
  path: SVGAttributes
  pattern: SVGAttributes
  polygon: SVGAttributes
  polyline: SVGAttributes
  radialGradient: SVGAttributes
  rect: SVGAttributes
  stop: SVGAttributes
  switch: SVGAttributes
  symbol: SVGAttributes
  text: SVGAttributes
  textPath: SVGAttributes
  tspan: SVGAttributes
  use: SVGAttributes
  view: SVGAttributes
}

export interface Events {
  // Clipboard Events
  onCopy: ClipboardEvent
  onCut: ClipboardEvent
  onPaste: ClipboardEvent

  // Composition Events
  onCompositionEnd: CompositionEvent
  onCompositionStart: CompositionEvent
  onCompositionUpdate: CompositionEvent

  // Focus Events
  onFocus: FocusEvent
  onFocusIn: FocusEvent
  onFocusOut: FocusEvent
  onBlur: FocusEvent

  // Form Events
  onChange: Event
  onBeforeInput: Event
  onInput: Event
  onReset: Event
  onSubmit: Event
  onInvalid: Event

  // Image Events
  onLoad: Event
  onError: Event // also a Media Event

  // Keyboard Events
  onKeyDown: KeyboardEvent
  /** @deprecated */
  onKeyPress: KeyboardEvent
  /** @deprecated */
  onKeyUp: KeyboardEvent

  // Media Events
  onAbort: Event
  onCanPlay: Event
  onCanPlayThrough: Event
  onDurationChange: Event
  onEmptied: Event
  onEncrypted: Event
  onEnded: Event
  onLoadedData: Event
  onLoadedMetadata: Event
  onLoadStart: Event
  onPause: Event
  onPlay: Event
  onPlaying: Event
  onProgress: Event
  onRateChange: Event
  onResize: Event
  onSeeked: Event
  onSeeking: Event
  onStalled: Event
  onSuspend: Event
  onTimeUpdate: Event
  onVolumeChange: Event
  onWaiting: Event

  // MouseEvents
  onAuxClick: MouseEvent
  onClick: MouseEvent
  onContextMenu: MouseEvent
  onDoubleClick: MouseEvent
  onDrag: DragEvent
  onDragEnd: DragEvent
  onDragEnter: DragEvent
  onDragExit: DragEvent
  onDragLeave: DragEvent
  onDragOver: DragEvent
  onDragStart: DragEvent
  onDrop: DragEvent
  onMouseDown: MouseEvent
  onMouseEnter: MouseEvent
  onMouseLeave: MouseEvent
  onMouseMove: MouseEvent
  onMouseOut: MouseEvent
  onMouseOver: MouseEvent
  onMouseUp: MouseEvent

  // Selection Events
  onSelect: Event

  // Touch Events
  onTouchCancel: TouchEvent
  onTouchEnd: TouchEvent
  onTouchMove: TouchEvent
  onTouchStart: TouchEvent

  // Pointer Events
  onPointerDown: PointerEvent
  onPointerMove: PointerEvent
  onPointerUp: PointerEvent
  onPointerCancel: PointerEvent
  onPointerEnter: PointerEvent
  onPointerLeave: PointerEvent
  onPointerOver: PointerEvent
  onPointerOut: PointerEvent

  // UI Events
  onScroll: UIEvent

  // Wheel Events
  onWheel: WheelEvent

  // Animation Events
  onAnimationStart: AnimationEvent
  onAnimationEnd: AnimationEvent
  onAnimationIteration: AnimationEvent

  // Transition Events
  onTransitionEnd: TransitionEvent
}

type EventHandlers<E> = {
  [K in keyof E]?: E[K] extends (...args: any) => any
    ? E[K]
    : (payload: E[K]) => void
}

import { VNodeRef } from '@vue/runtime-core'

export type ReservedProps = {
  key?: string | number | symbol
  ref?: VNodeRef
  ref_for?: boolean
  ref_key?: string
}

export type NativeElements = {
  [K in keyof IntrinsicElementAttributes]: IntrinsicElementAttributes[K] &
    ReservedProps
}
