import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import {Example} from "../dto/Example";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [MatIconRegistry]
})
export class AppComponent {

  constructor(iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
    iconReg.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('./assets/img/horse21-logo.svg'));
  }

  title = 'app';

  getBreadCrumbExample1():Example {
    return {
      title: "Example 1 - base",
      textHtml: "<h21-mat-breadcrumb></h21-mat-breadcrumb>",
      textCss: ".breadcrumb-nav {\n" +
      "  border-bottom: 1px solid #d6d6d6;\n" +
      "  padding: 3px 0;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul {\n" +
      "  margin: 0;\n" +
      "  padding: 0;\n" +
      "  list-style: none;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul > li {\n" +
      "  margin: 0 5px;\n" +
      "  padding: 0;\n" +
      "  display: inline-block;\n" +
      "  color: #515151;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul > li:first-child {\n" +
      "  margin-left: 0;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul > li::before {\n" +
      "  display: inline-block;\n" +
      "  content: '→';\n" +
      "  font-size: 10px;\n" +
      "  margin-right: 5px;\n" +
      "}\n" +
      ".breadcrumb-nav__without-last-link ul > li::before {\n" +
      "  opacity: .4;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul > li:first-child::before {\n" +
      "  display: none;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul li > a.mat-button {\n" +
      "  font-weight: normal;\n" +
      "  text-decoration: none;\n" +
      "  color: #000;\n" +
      "  font-size: 12px;\n" +
      "  padding: 0 10px;\n" +
      "  min-width: 1px;\n" +
      "  line-height: 28px;\n" +
      "  color: #515151;\n" +
      "}\n" +
      ".breadcrumb-nav__without-last-link ul li > a.mat-button {\n" +
      "  opacity: .4;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav__without-last-link ul li > a.mat-button:hover {\n" +
      "  opacity: 1;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul li > a.mat-button:hover {\n" +
      "  color: #000;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul li > a.mat-button .mat-icon {\n" +
      "  width: 18px;\n" +
      "  height: 18px;\n" +
      "  font-size: 18px;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul li > span {\n" +
      "  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n" +
      "  font-size: 12px;\n" +
      "  display: inline-block;\n" +
      "  padding: 0 8px;\n" +
      "  line-height: 28px;\n" +
      "}\n",
      textTs: "import { Component, Input } from \"@angular/core\"\n" +
      "import { BreadCrumb } from \"../../dto/BreadCrumb\";\n" +
      "\n" +
      "@Component({\n" +
      "  selector: 'h21-mat-breadcrumb',\n" +
      "  templateUrl: './h21-mat-breadcrumb.component.html',\n" +
      "  styleUrls: ['./h21-mat-breadcrumb.component.css']\n" +
      "})\n" +
      "\n" +
      "export class H21MatBreadCrumbComponent {\n" +
      "\n" +
      "  @Input() lastIsLink: boolean = false;\n" +
      "  @Input() showHomeLink: boolean = true;\n" +
      "\n" +
      "  breadCrumbs: Array<BreadCrumb> = [\n" +
      "    {label: \"test 1\", url: \"#\"},\n" +
      "    {label: \"test 2\", url: \"#\"},\n" +
      "    {label: \"test 3\", url: \"#\"},\n" +
      "    {label: \"test 4\", url: \"#\"}\n" +
      "  ];\n" +
      "}",
    }
  }

  getBreadCrumbExample2():Example {
    return {
      title: "Example 2 - the last element is a link",
      textHtml: "<h21-mat-breadcrumb [lastIsLink]=\"true\"></h21-mat-breadcrumb>",
      textCss: ".breadcrumb-nav {\n" +
      "  border-bottom: 1px solid #d6d6d6;\n" +
      "  padding: 3px 0;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul {\n" +
      "  margin: 0;\n" +
      "  padding: 0;\n" +
      "  list-style: none;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul > li {\n" +
      "  margin: 0 5px;\n" +
      "  padding: 0;\n" +
      "  display: inline-block;\n" +
      "  color: #515151;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul > li:first-child {\n" +
      "  margin-left: 0;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul > li::before {\n" +
      "  display: inline-block;\n" +
      "  content: '→';\n" +
      "  font-size: 10px;\n" +
      "  margin-right: 5px;\n" +
      "}\n" +
      ".breadcrumb-nav__without-last-link ul > li::before {\n" +
      "  opacity: .4;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul > li:first-child::before {\n" +
      "  display: none;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul li > a.mat-button {\n" +
      "  font-weight: normal;\n" +
      "  text-decoration: none;\n" +
      "  color: #000;\n" +
      "  font-size: 12px;\n" +
      "  padding: 0 10px;\n" +
      "  min-width: 1px;\n" +
      "  line-height: 28px;\n" +
      "  color: #515151;\n" +
      "}\n" +
      ".breadcrumb-nav__without-last-link ul li > a.mat-button {\n" +
      "  opacity: .4;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav__without-last-link ul li > a.mat-button:hover {\n" +
      "  opacity: 1;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul li > a.mat-button:hover {\n" +
      "  color: #000;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul li > a.mat-button .mat-icon {\n" +
      "  width: 18px;\n" +
      "  height: 18px;\n" +
      "  font-size: 18px;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul li > span {\n" +
      "  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n" +
      "  font-size: 12px;\n" +
      "  display: inline-block;\n" +
      "  padding: 0 8px;\n" +
      "  line-height: 28px;\n" +
      "}\n",
      textTs: "import { Component, Input } from \"@angular/core\"\n" +
      "import { BreadCrumb } from \"../../dto/BreadCrumb\";\n" +
      "\n" +
      "@Component({\n" +
      "  selector: 'h21-mat-breadcrumb',\n" +
      "  templateUrl: './h21-mat-breadcrumb.component.html',\n" +
      "  styleUrls: ['./h21-mat-breadcrumb.component.css']\n" +
      "})\n" +
      "\n" +
      "export class H21MatBreadCrumbComponent {\n" +
      "\n" +
      "  @Input() lastIsLink: boolean = false;\n" +
      "  @Input() showHomeLink: boolean = true;\n" +
      "\n" +
      "  breadCrumbs: Array<BreadCrumb> = [\n" +
      "    {label: \"test 1\", url: \"#\"},\n" +
      "    {label: \"test 2\", url: \"#\"},\n" +
      "    {label: \"test 3\", url: \"#\"},\n" +
      "    {label: \"test 4\", url: \"#\"}\n" +
      "  ];\n" +
      "}",
    }
  }

  getBreadCrumbExample3():Example {
    return {
      title: "Example 3 - without a link to the home page",
      textHtml: " <h21-mat-breadcrumb [showHomeLink]=\"false\"></h21-mat-breadcrumb>",
      textCss: ".breadcrumb-nav {\n" +
      "  border-bottom: 1px solid #d6d6d6;\n" +
      "  padding: 3px 0;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul {\n" +
      "  margin: 0;\n" +
      "  padding: 0;\n" +
      "  list-style: none;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul > li {\n" +
      "  margin: 0 5px;\n" +
      "  padding: 0;\n" +
      "  display: inline-block;\n" +
      "  color: #515151;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul > li:first-child {\n" +
      "  margin-left: 0;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul > li::before {\n" +
      "  display: inline-block;\n" +
      "  content: '→';\n" +
      "  font-size: 10px;\n" +
      "  margin-right: 5px;\n" +
      "}\n" +
      ".breadcrumb-nav__without-last-link ul > li::before {\n" +
      "  opacity: .4;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul > li:first-child::before {\n" +
      "  display: none;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul li > a.mat-button {\n" +
      "  font-weight: normal;\n" +
      "  text-decoration: none;\n" +
      "  color: #000;\n" +
      "  font-size: 12px;\n" +
      "  padding: 0 10px;\n" +
      "  min-width: 1px;\n" +
      "  line-height: 28px;\n" +
      "  color: #515151;\n" +
      "}\n" +
      ".breadcrumb-nav__without-last-link ul li > a.mat-button {\n" +
      "  opacity: .4;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav__without-last-link ul li > a.mat-button:hover {\n" +
      "  opacity: 1;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul li > a.mat-button:hover {\n" +
      "  color: #000;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul li > a.mat-button .mat-icon {\n" +
      "  width: 18px;\n" +
      "  height: 18px;\n" +
      "  font-size: 18px;\n" +
      "}\n" +
      "\n" +
      ".breadcrumb-nav ul li > span {\n" +
      "  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n" +
      "  font-size: 12px;\n" +
      "  display: inline-block;\n" +
      "  padding: 0 8px;\n" +
      "  line-height: 28px;\n" +
      "}\n",
      textTs: "import { Component, Input } from \"@angular/core\"\n" +
      "import { BreadCrumb } from \"../../dto/BreadCrumb\";\n" +
      "\n" +
      "@Component({\n" +
      "  selector: 'h21-mat-breadcrumb',\n" +
      "  templateUrl: './h21-mat-breadcrumb.component.html',\n" +
      "  styleUrls: ['./h21-mat-breadcrumb.component.css']\n" +
      "})\n" +
      "\n" +
      "export class H21MatBreadCrumbComponent {\n" +
      "\n" +
      "  @Input() lastIsLink: boolean = false;\n" +
      "  @Input() showHomeLink: boolean = true;\n" +
      "\n" +
      "  breadCrumbs: Array<BreadCrumb> = [\n" +
      "    {label: \"test 1\", url: \"#\"},\n" +
      "    {label: \"test 2\", url: \"#\"},\n" +
      "    {label: \"test 3\", url: \"#\"},\n" +
      "    {label: \"test 4\", url: \"#\"}\n" +
      "  ];\n" +
      "}",
    }
  }
}



