/*@flow*/
/*global document:false*/
import React from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import Demo from "electrode-demo-index";

import * as libraryScope from "../src/index";

const locale = "en";
const messages = require(`../src/lang/${locale}.json`);
const localeData = require(`react-intl/locale-data/${locale}`);

addLocaleData(localeData);

const localScope = {IntlProvider, messages, locale};

const components = [
  {
    title: "<%= componentName %>",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/<%= projectName %>.example"),
        noRender: true
      }
    ]
  }
];

export default () => (
  <Demo scope={localScope} libraryScope={libraryScope} components={components} />
);
