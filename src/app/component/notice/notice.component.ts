import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  screenWidth: number;

  meetingDatas = [
    {
      topic: 'Today is something new',
      time: '10:00 am IST',
      date: '5 Sep 2020',
      description: 'HTMl, CSS',
      link: 'https://meet.google.com/wif-pnjg-wxv',
      organiser: 'Chandan Singh',
      organiserNumber: '',
      takenBy: 'Saurabh Sunny',
      picPath: 'assets/profile.png',
      profession: 'Software Developer',
      number: '987654321'
    },
    {
      topic: 'Basic of web development',
      time: '10:00 am IST',
      date: '5 Sep 2020',
      description: 'HTMl, CSS',
      link: '',
      organiser: 'Chandan Singh',
      organiserNumber: '',
      takenBy: 'Saurabh Sunny',
      picPath: 'assets/profile.png',
      profession: 'Software Developer',
      number: '987654321'
    },
    {
      topic: 'Basic of web development',
      time: '10:00 am IST',
      date: '5 Sep 2020',
      description: 'HTMl, CSS',
      link: '',
      organiser: 'Chandan Singh',
      organiserNumber: '',
      takenBy: 'Saurabh Sunny',
      picPath: 'assets/profile.png',
      profession: 'Software Developer',
      number: '987654321'
    },
    {
      topic: 'Basic of web development',
      time: '10:00 am IST',
      date: '5 Sep 2020',
      description: 'HTMl, CSS',
      link: '',
      organiser: 'Chandan Singh',
      organiserNumber: '',
      takenBy: 'Saurabh Sunny',
      picPath: 'assets/profile.png',
      profession: 'Software Developer',
      number: '987654321'
    }
  ];

  routineClass10 = [
    {
      day: 'Mon',
      sub: 'English, S.S.T'
    },
    {
      day: 'Tue',
      sub: 'English, Maths'
    },
    {
      day: 'Wed',
      sub: 'S.S.T, Chem'
    },
    {
      day: 'Thu',
      sub: 'Sanskrit, Bio'
    },
    {
      day: 'Fri',
      sub: 'Maths, Chem'
    },
    {
      day: 'Sat',
      sub: 'Maths, Bio'
    }
  ];

  routineClass9 = [
    {
      day: 'Mon',
      sub: 'Phy, S.S.T'
    },
    {
      day: 'Tue',
      sub: 'Maths, Chem'
    },
    {
      day: 'Wed',
      sub: 'Maths, Bio'
    },
    {
      day: 'Thu',
      sub: 'Maths, Chem'
    },
    {
      day: 'Fri',
      sub: 'Sanskrit, Bio'
    },
    {
      day: 'Sat',
      sub: 'English, S.S.T'
    }
  ];

  routineClass8 = [
    {
      day: 'Mon',
      sub: 'Maths'
    },
    {
      day: 'Tue',
      sub: 'Science'
    },
    {
      day: 'Wed',
      sub: 'S.S.T'
    },
    {
      day: 'Thu',
      sub: 'Maths'
    },
    {
      day: 'Fri',
      sub: 'Science'
    },
    {
      day: 'Sat',
      sub: 'S.S.T'
    }
  ];

  routineClass7 = [
    {
      day: 'Mon',
      sub: ''
    },
    {
      day: 'Tue',
      sub: ''
    },
    {
      day: 'Wed',
      sub: ''
    },
    {
      day: 'Thu',
      sub: ''
    },
    {
      day: 'Fri',
      sub: ''
    },
    {
      day: 'Sat',
      sub: ''
    }
  ];



  classList = [10, 9, 8, 7];
  routineData = this.routineClass10;


  meetingData = [];

  constructor() {
    this.onResize();
   }
  @HostListener('window:resize', ['$event'])
  onResize(event?): void {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.meetingData = this.meetingDatas.slice(0, 2);
    if (this.screenWidth < 450) {
      this.meetingData = this.meetingDatas.slice(0, 1);
    }
  }

  showCompleteMeetinglist(): void {
    this.meetingData = this.meetingDatas;
  }

  routine(cls): void {
    if (cls === 10) {
      this.routineData = this.routineClass10;
    } else if (cls === 9) {
      this.routineData = this.routineClass9;
    } else if (cls === 8) {
      this.routineData = this.routineClass8;
    } else {
      this.routineData = this.routineClass7;
    }
  }
}
