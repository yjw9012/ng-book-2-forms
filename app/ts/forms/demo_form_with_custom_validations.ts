/**
 * Created by yjw9012 on 7/21/16.
 */
import { Component } from "@angular/core";
import { REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
    selector: "demo-form-with-custom-validations",
    directives: [REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES],
    template: `
        <div class="ui raised segment">
            <h2 class="ui header">Demo Form: with validations (explicit)</h2>
            <form [formGroup]="myForm"
                  (ngSubmit)="onSubmit(myForm.value)"
                  class="ui form">

                <div class="field" [class.error]="!sku.valid && sku.touched">
                    <label for="skuInput">SKU</label>
                    <input type="text"
                           id="skuInput"
                           placeholder="SKU"
                           [formControl]="sku">
                    <div *ngIf="!sku.valid" class="ui error message">
                        SKU is invalid
                    </div>
                    <div *ngIf="sku.hasError('required')" class="ui error message">
                        SKU is required
                    </div>
                    <div *ngIf="sku.hasError('invalidSku')" class="ui error message">
                        SKU must begin with 123
                    </div>
                </div>

                <div *ngIf="!myForm.valid" class="ui error message">
                    Form is invalid
                </div>

                <button type="submit" class="ui button">Submit</button>
            </form>
        </div>
    `
})

export class DemoFormWithCustomValidations {
    myForm: FormGroup;
    sku: AbstractControl;

    static skuValidator(control : FormControl) : {[s : string] : boolean} {
        if (!control.value.match(/^123/)) {
            return {invalidSku : true};
        }
    }

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            "sku" : ["", Validators.compose([Validators.required, DemoFormWithCustomValidations.skuValidator])]
        });

        this.sku = this.myForm.controls["sku"];
    }

    onSubmit(value: string): void {
        console.log('you submitted value:', value);
    }
}