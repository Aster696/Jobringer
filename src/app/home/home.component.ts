import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    is_banner = true
    jobs = [
        { title: 'Frontend Developer', company: 'Tech Corp', type: "In Office Job", time: 'Full Time - Permanent', experience: '0 - 2 Years', location: 'Mumbai / India' },
        { title: 'Backend Engineer', company: 'Dev Solutions', type: "On Field Job", time: 'Full Time - Permanent', experience: '2 - 5 Years', location: 'Surat / India' },
        { title: 'Full Stack Developer', company: 'InnovateX', type: "In Office Job", time: 'Full Time - Permanent', experience: '3 - 5 Years', location: 'Bangalore / India' },
        { title: 'UI/UX Designer', company: 'Design Studio', type: "In Office Job", time: 'Full Time - Permanent', experience: '0 - 1 Years', location: 'Pune / India' },
        { title: 'DevOps Engineer', company: 'CloudNet', type: "On Field Job", time: 'Full Time - Permanent', experience: '5 - 10 Years', location: 'Kolkata / India' },
    ];

    employers = [
        'https://www.jobringer.com/images/content/company-logo/hjp11e6e3219c4d1b74c89976040b163d4c.png',
        'https://www.jobringer.com/images/content/company-logo/hjp05cdc12c0c5c095c7a336cc15f8ea0f0.png',
        'https://www.jobringer.com/images/content/company-logo/hjp5421d65121e86c5d356dca065da81a46.png',
        'https://www.jobringer.com/images/content/company-logo/hjpe1e760ab7dc0c27d9b2b83a233f6508f.png',
        'https://www.jobringer.com/images/content/company-logo/hjp8f57b120271a93cf9b4a5641959cfdc2.png',
        'https://www.jobringer.com/images/content/company-logo/hjpd93ec893a31ddaa9355601d2b2840c02.png',
        'https://www.jobringer.com/images/content/company-logo/hjpa5e21d17060ac6db2c765191acd56a0e.png',
        'https://www.jobringer.com/images/content/company-logo/hjp3a708430e75815b71420f8ce48dd94e5.png',
        'https://www.jobringer.com/images/content/company-logo/hjp7fffc5e579e606ca598f877dc545f782.png',
        'https://www.jobringer.com/images/content/company-logo/hjpd93ec893a31ddaa9355601d2b2840c02.png',
        'https://www.jobringer.com/images/content/company-logo/hjp4349a617eb6b7ad9aa741e5d9427cd97.png'
    ]

    swiperBreakpoints = {
        0: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    };

    swiperEmpBreakpoints = {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
        1440: {
            slidesPerView: 8,
        },
    };

    constructor() { }

    ngOnInit(): void {
    }

    goToWebsite(path: string) {
        window.location.href = path;
    }


}
