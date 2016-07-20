/**
 * Created by yjw9012 on 7/19/16.
 */
import { Component } from "@angular/core";
import { REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES, FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: "demo-form-sku-builder",
    directives: [REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES],
    template: `
        <div class="ui raised segment">
            <h2 class="ui header">Demo Form: Sku with Builder</h2>
            <form [formGroup]="myForm"
                  (ngSubmit)="onSubmit(myForm.value)"
                  class="ui form">

                <div class="field">
                    <label for="skuInput">SKU</label>
                    <input type="text"
                           id="skuInput"
                           placeholder="SKU"
                           [formControl]="myForm.controls['sku']">
                </div>

                <button type="submit" class="ui button">Submit</button>
            </form>
        </div>
    `
})

export class DemoFormSkuBuilder {
    myForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            "sku" : ["ABC123"]
        })
    }

    onSubmit(value: string): void {
        console.log('you submitted value:', value);
    }
}