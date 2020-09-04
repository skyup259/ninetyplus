import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  class8 = [
    {
      name: 'Varsha',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Shaily',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Prisha',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Amisha',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Khushi',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Milhaan',
      path: 'assets/profile.png',
      school: 'maths, science'
    }
  ];

  class9 = [
    {
      name: 'Suhami',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Somya',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Abay',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Talha',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Abhishek',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Manish',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Ankur',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Aaditya',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Pawan',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Sakshi',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Niskita',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Simpy',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Aakansha',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Bhavya',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Priya',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Aayushi',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Ragini',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Supriya',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Mushkan',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Sushant',
      path: 'assets/profile.png',
      school: 'maths, science'
    }
  ];

  class10 = [
    {
      name: 'Sarthali',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Riya',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Dheeraj ',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Sneha Singh',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Sneha Gupta',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Talat',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Harshita',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Geetika ',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Priyanshu ',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Sigyasa ',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Ritika',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Rohini',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Ankita',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Hema',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Kajal',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Khushboo',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Komal',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Meenakshi ',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Pallavi',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Priyanka ',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Shalu',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Somya',
      path: 'assets/profile.png',
      school: 'maths, science'
    },
    {
      name: 'Himani',
      path: 'assets/profile.png',
      school: 'maths, science'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
