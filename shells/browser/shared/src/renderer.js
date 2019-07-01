/**
 * In order to support reload-and-profile functionality, the renderer needs to be injected before any other scripts.
 * Since it is a complex file (with imports) we can't just toString() it like we do with the hook itself,
 * So this entry point (one of the web_accessible_resources) provcides a way to eagerly inject it.
 * The hook will look for the presence of a global __REACT_DEVTOOLS_ATTACH__ and attach an injected renderer early.
 * The normal case (not a reload-and-profile) will not make use of this entry point though.
 *
 * @flow
 */

import { attach } from 'src/backend/renderer';

Object.defineProperty(
  window,
  '__REACT_DEVTOOLS_ATTACH__',
  ({
    enumerable: false,
    configurable: true,
    get() {
      return attach;
    },
  }: Object)
);
