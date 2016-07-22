/**
 * Created by yjw9012 on 7/21/16.
 */
import { Component } from "@angular/core";
import { REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES, FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
    selector: "demo-form-ng-model",
    directives: [REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES],
    template: `
        <div class="ui raised segment">
            <h2 class="ui header">Demo Form: ngModel</h2>

            <div class="ui info message">
                The product name is {{productName ? productName : "'Not entered yet'"}}
            </div>

            <form [formGroup]="myForm"
                  (ngSubmit)="onSubmit(myForm.value)"
                  class="ui form">

                <div class="field">
                    <label for="productNameInput">Product Name</label>
                    <input type="text"
                           id="productNameInput"
                           placeholder="Product Name"
                           [formControl]="myForm.find('productName')"
                           [(ngModel)]="productName">
                    <div *ngIf="!myForm.controls['productName'].valid" class="ui error message">
                        Product name is invalid
                    </div>

                </div>

                <button type="submit" class="ui button">Submit</button>
            </form>
        </div>
    `
})

export class DemoFormNgModel {
    myForm: FormGroup;
    productName: string;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            productName : ["", Validators.required]
        });
    }

    onSubmit(value: string): void {
        console.log('you submitted value:', value);
    }
}