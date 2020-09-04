import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {
  batch2009 = [
    {
      name: 'Vinay K. Singh',
      path: 'assets/profile.png',
      title: 'SAP ABAP Consultant',
      other: 'Denpro Tech.',
      number: '987654321',
      location: 'Delhi'
    },
    {
      name: 'Alka Priyadarshini',
      path: 'assets/profile.png',
      title: 'Anesthesiologist',
      other: 'Holy Family Hospital Kurji',
      number: '987654321',
      location: ''
    },
    {
      name: 'Roushan K. Singh',
      path: 'assets/profile.png',
      title: 'Inspector',
      other: 'Customs & Gst',
      number: '987654321',
      location: 'Kolkata'
    },
    {
      name: 'Manish K. Singh',
      path: 'assets/profile.png',
      title: 'Faculty of chemistry',
      other: 'Bansal classes pvt. ltd.',
      number: '987654321',
      location: ''
    }
  ];

  batch2010 = [
    {
      name: 'Avinash Rathour',
      path: 'assets/profile.png',
      title: 'Doctor',
      other: 'Private hospital',
      number: '987654321',
      location: 'Arangabad'
    },
    {
      name: 'Suwash Saurabh ',
      path: 'assets/profile.png',
      title: 'Senior Engineer',
      other: 'ZF Group',
      number: '987654321',
      location: 'hyderabad'
    }
  ];

  batch2011 = [
    {
      name: 'Saurabh K. Sunny',
      path: 'assets/alumni/saurabh.jpg',
      title: 'Software Engineer',
      other: 'Aperture',
      number: '987654321',
      location: 'Hyderabad',
      link: 'https://skyup259.github.io/host_profile/',
      active: 'true'
    },
    {
      name: 'Kushagra Gupta',
      path: 'assets/profile.png',
      title: 'Ass. software engineer',
      other: 'Mphasis',
      location: 'Bangalore',
      number: '987654321',
      active: 'false'
    },
    {
      name: 'Rajat Deo',
      path: 'assets/profile.png',
      title: 'M.Tech (Transportation Engr)',
      other: 'IIT',
      location: 'Delhi',
      number: '987654321',
    },
    {
      name: 'Pummy Kumari',
      path: 'assets/profile.png',
      title: 'Software Engineer',
      other: 'Tech Mahindra',
      location: 'Delhi',
      number: '987654321',
    },
    {
      name: 'Varun K. Singh',
      path: 'assets/profile.png',
      title: 'Civil engineering',
      other: 'Sathyabama University',
      location: '',
      number: '987654321',
    }
  ];

  batch2012 = [
    {
      name: 'Rani Gupta',
      path: 'assets/profile.png',
      title: 'Ass. software engineer',
      other: 'Cognizant',
      number: '987654321',
      location: 'Hyderabad'
    },
    {
      name: 'Abhishek Kumar',
      path: 'assets/profile.png',
      title: '',
      other: 'Sacchidanand Sinha Coll.',
      number: '987654321',
      location: 'Aurangabad'
    },
    {
      name: 'Aman Singh',
      path: 'assets/profile.png',
      title: 'Junior engineer',
      other: 'Thome shipping Pvt Ltd',
      number: '987654321',
      location: ''
    },
    {
      name: 'Almas benazir',
      path: 'assets/profile.png',
      title: 'Mbbs',
      other: 'Kmch',
      number: '987654321',
      location: 'Aurangabad'
    },
    {
      name: 'Pappu K. Ranjan',
      path: 'assets/profile.png',
      title: 'Graduate Engr. Trainee ',
      other: 'Bridge & Roof Co.',
      number: '987654321',
      location: ''
    },
    {
      name: 'Aastha',
      path: 'assets/profile.png',
      title: 'Botony Honrs.',
      other: 'Adhikari college sillar',
      number: '987654321',
      location: ''
    },
    {
      name: 'Shrnya Bharadwaj',
      path: 'assets/profile.png',
      title: 'BPM',
      other: 'Department of post',
      number: '987654321',
      location: ''
    },
    {
      name: 'Shreya Singh',
      path: 'assets/profile.png',
      title: 'Chemistry honours',
      other: 'JD womens College',
      number: '987654321',
      location: 'Patna'
    },
    {
      name: 'Deepak Kumar',
      path: 'assets/profile.png',
      title: 'System Engineer',
      other: 'Infosys',
      number: '987654321',
      location: 'Aurangabad '
    },
    {
      name: 'Awnish Kumar',
      path: 'assets/profile.png',
      title: 'chemistry Hons.',
      other: 'Sachidanand sinha College',
      number: '987654321',
      location: ''
    },
    {
      name: 'Anjali Sharma',
      path: 'assets/profile.png',
      title: 'Science',
      other: 'Sachidanand sinha College',
      number: '987654321',
      location: ''
    }
  ];

  batch2013 = [
    {
      name: 'Neha Pandey',
      path: 'assets/profile.png',
      title: 'Associate Engineer',
      other: 'P2power Solution Pvt. Ltd.',
      number: '987654321',
      location: ''
    }
  ];

  batch2014 = [
    {
      name: 'Tejaswini Singh',
      path: 'assets/profile.png',
      title: 'Principal',
      other: 'Spectra minds pre school',
      number: '987654321',
      location: ''
    },
    {
      name: 'Raushan Kumar',
      path: 'assets/profile.png',
      title: 'Airman',
      other: 'Indian Air Force',
      number: '987654321',
      location: 'Gujarat'
    }
  ];

  batch2015 = [
    {
      name: 'Aakarshan Agrawal',
      path: 'assets/profile.png',
      title: 'Clinical Psychology',
      other: 'Indira Gandhi University',
      number: '987654321',
      location: ''
    },
    {
      name: 'Ankita Manik',
      path: 'assets/profile.png',
      title: 'Fashion communication',
      other: 'NIFT',
      number: '987654321',
      location: 'Patna'
    },
    {
      name: 'Anushka Raj',
      path: 'assets/profile.png',
      title: 'Computer Science & Engr.',
      other: 'NIT',
      number: '987654321',
      location: 'Jamshedpur'
    }
  ];

  batch2016 = [
    {
      name: 'Pankesh Kumar',
      path: 'assets/profile.png',
      title: 'B.tech(Civil)',
      other: 'Punjab technical University',
      number: '987654321',
      location: ''
    },
    {
      name: 'Kanak Singh',
      path: 'assets/profile.png',
      title: 'B.tech(Civil)',
      other: 'Punjab technical University',
      number: '987654321',
      location: ''
    }
  ];

  batch2017 = [
    {
      name: 'Nishant Kumar',
      path: 'assets/profile.png',
      title: 'MBBS',
      other: 'Patna Medical College',
      number: '987654321',
      location: ''
    }
  ];

  batch2018 = [
    {
      name: 'Satyam Kumar ',
      path: 'assets/profile.png',
      title: 'Is(Maths)',
      other: 'Saraswati Vidya Mandir',
      number: '987654321',
      location: ''
    }
  ];

  batches = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
  constructor() { }

  ngOnInit(): void {
  }

  getBatchData(batchYear): any[] {
    if (batchYear === 2009) {
      return this.batch2009;
    }

    if (batchYear === 2010) {
      return this.batch2010;
    }

    if (batchYear === 2011) {
      return this.batch2011;
    }

    if (batchYear === 2012) {
      return this.batch2012;
    }

    if (batchYear === 2013) {
      return this.batch2013;
    }
    if (batchYear === 2014) {
      return this.batch2014;
    }

    if (batchYear === 2015) {
      return this.batch2015;
    }

    if (batchYear === 2016) {
      return this.batch2016;
    }

    if (batchYear === 2017) {
      return this.batch2017;
    }

    if (batchYear === 2018) {
      return this.batch2018;
    }
  }

}
