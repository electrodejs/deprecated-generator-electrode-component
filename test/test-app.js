/*global describe, beforeEach, it*/
"use strict";

var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var os = require("os");

describe("electrode::generator-electrode-component", function () {
  before(function () {
    return helpers.run(path.join(__dirname, "../app"))
      .withOptions({ "skip-install": true })
      .withPrompts({
        projectName: "electrode-component",
        componentName: "ElectrodeComponent",
        packageName: "electrode-component",
        packageGitHubOrg: "electrode-component",
        developerName: "Tony Stark"
      })
      .toPromise();
  });

  it("creates files", function (done) {
    assert.file([
      "package.json",
      "gulpfile.js"
    ]);
    done();
  });
});
