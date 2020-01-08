import { Employee } from './../models/employee.model';
import { Injectable } from "@angular/core";



@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] =
        [{
            id: 1,
            name: 'Morgan',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 1896574569,
            dateOfBirth: new Date('01/01/1992'),
            department: '1',
            isActive: true,
            photoPath: 'assets/images/user-black.png'
        },
        {
            id: 2,
            name: 'Jessica',
            gender: 'Female',
            contactPreference: 'Email',
            email: 'jessicasweety@gmail.com',
            dateOfBirth: new Date('01/01/1988'),
            department: '3',
            isActive: false,
            photoPath: 'assets/images/user-girl.png'
        },
        {
            id: 3,
            name: 'Eric',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 25698745689,
            dateOfBirth: new Date('01/01/1988'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/user-boy.png'
        }];



    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    save(employee: Employee){
        this.listEmployees.push(employee);
    }
}