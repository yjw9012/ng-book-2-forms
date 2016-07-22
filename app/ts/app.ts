/*
 * Angular
 */
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideForms } from '@angular/forms';

/*
 * We're using Webpack to load our CSS which is why we use `require` instead of
 * `import` here
 */
require('../css/styles.css');
require('../css/semantic.min.css');
require('../images/ng-book-2-minibook.png');
require('../images/favicon-32x32.png');
require('../images/favicon.ico');

/*
 * Our Demos
 */
import {DemoFormSku} from './forms/demo_form_sku';
import {DemoFormSkuBuilder} from './forms/demo_form_sku_with_builder';
import {DemoFormWithValidationsExplicit} from './forms/demo_form_with_validations_explicit';

/*
 * Webpack
 */
@Component({
    selector: 'forms-demo-app',
    directives: [DemoFormSku, DemoFormSkuBuilder, DemoFormWithValidationsExplicit],
    template: `
        <div>
            <demo-form-sku></demo-form-sku>
            <demo-form-sku-builder></demo-form-sku-builder>
            <demo-form-with-validations-explicit></demo-form-with-validations-explicit>
        </div>
    `
})

class FormsDemoApp {}

bootstrap(FormsDemoApp, [
    provideForms()
])
.catch((err: any) => console.error(err));
