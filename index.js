#!/usr/bin/env node
const welcome = require("cli-welcome");
const pkgJSON = require("./package.json");

// OR with all the options set like this:
welcome({
  title: `hi-akash cli`,
  version: `${pkgJSON.version}`,
  tagLine: `Say hi to Akash`,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log("Akash Chaterjee: 👋Hiii!");
