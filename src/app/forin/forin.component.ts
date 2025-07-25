import { Component } from '@angular/core';

@Component({
  selector: 'app-forin',
  standalone: true,
  templateUrl: './forin.component.html',
  styleUrl: './forin.component.css'
})
export class ForinComponent {
  title:string = "For in Loop";
  users:string []=["rohit","rahul","sumit","aman"];
  students = [
    { name: "Rohit", age: 29, email: "rohit@gmail.com" },
    { name: "Anjali", age: 22, email: "anjali@example.com" },
    { name: "Vikram", age: 25, email: "vikram25@domain.com" },
    { name: "Sneha", age: 23, email: "sneha123@mail.com" },
    { name: "Aman", age: 27, email: "aman.kumar@company.com" },
    { name: "Pooja", age: 21, email: "pooja21@gmail.com" },
    { name: "Karan", age: 26, email: "karan@edu.org" },
    { name: "Neha", age: 24, email: "neha.sharma@example.org" },
    { name: "Sahil", age: 28, email: "sahil88@mail.com" },
    { name: "Divya", age: 22, email: "divya.d@school.edu" }
  ];
}
