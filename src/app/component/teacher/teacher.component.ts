import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  data = [
    {
      name: 'Mr. C K Singh',
      path: 'assets/teacher/chandan.jpg',
      title: 'Physics, Maths',
      subtitle: 'other information',
      number: '987654321'
    },
    {
      name: 'Mr. R Kumar',
      path: 'assets/teacher/ranjan.jpg',
      title: 'Social Science',
      subtitle: 'other information',
      number: '987654321'
    },
    {
      name: 'Mr. Sunny Kumar',
      path: 'assets/teacher/sunny.jpg',
      title: 'Biology',
      subtitle: 'other information',
      number: '987654321'
    },
    {
      name: 'Mr. Rizwan',
      path: 'assets/profile.png',
      title: 'Chemistry',
      subtitle: 'other information',
      number: '987654321'
    },
    {
      name: 'Mr. A K Mishra',
      path: 'assets/teacher/AK.jpg',
      title: 'Hindi, Sanskrit',
      subtitle: 'other information',
      number: '987654321'
    },
    {
      name: 'Mr. Omprakash',
      path: 'assets/teacher/Omp.jpg',
      title: 'English',
      subtitle: 'other information',
      number: '987654321'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
