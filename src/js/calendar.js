import {
    Calendar
} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '../scss/calendarStyles.scss';

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        height: 400,
        handleWindowResize: true,
        header: {
            left: 'title',
            center: '',
            right: 'today prev, next',
        },
        events: [{
                title: 'Yoga Classes',
                start: '2019-09-02T10:30:00',
                allDay: true,
                description: 'Activity',
                backgroundColor: '#8565c4',
            },
            {
                title: 'Meditation',
                start: '2019-09-06T10:30:00',
                allDay: true,
                description: 'Activity',
                backgroundColor: '#77dd77',
            },
            {
                title: 'Yoga Classes',
                start: '2019-09-09T10:30:00',
                allDay: true,
                description: 'Activity',
                backgroundColor: '#8565c4',
            },
            {
                title: 'Fitness',
                start: '2019-09-12T10:30:00',
                allDay: true,
                description: 'Activity',
                backgroundColor: '#cb99c9',
            },
            {
                title: 'Yoga Classes',
                start: '2019-09-16T10:30:00',
                allDay: true,
                description: 'Activity',
                backgroundColor: '#8565c4',
            },
            {
                title: 'Meditation',
                start: '2019-09-17T10:30:00',
                allDay: true,
                description: 'Passive',
                backgroundColor: '#77dd77',
            },
            {
                title: 'Yoga Classes',
                start: '2019-09-23T10:30:00',
                allDay: true,
                description: 'Activity',
                backgroundColor: '#8565c4',
            },
            {
                title: 'Yoga Classes',
                start: '2019-09-26T10:30:00',
                allDay: true,
                description: 'Activity',
                backgroundColor: '#8565c4',
            },
            {
                title: 'Yoga Classes',
                start: '2019-09-30T10:30:00',
                allDay: true,
                description: 'Activity',
                backgroundColor: '#8565c4',
            },
            {
                title: 'Indyvidual Classes',
                start: '2019-10-05T10:30:00',
                allDay: true,
                description: 'Activity',
                backgroundColor: '#cb99c9',
            },
            {
                title: 'Fitness',
                start: '2019-10-20T10:30:00',
                allDay: true,
                description: 'Activity',
                backgroundColor: '#cb99c9',
            },

        ]
    });

    calendar.render();
});