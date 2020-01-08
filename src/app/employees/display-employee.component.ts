import { Employee } from './../models/employee.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-display-employee',
    templateUrl: './display-employee.component.html',
    styleUrls: ['./display-employee.component.css']
})



export class DisplayEmployeesComponent implements OnInit {

    @Input()
    employee: Employee;

    constructor() { }

    ngOnInit() {

    }

    getEmpNameAndGender(): string {
        return this.employee.name + ' ' + this.employee.gender;
    }
}