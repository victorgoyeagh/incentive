import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as moment_ from 'moment';
import * as _ from 'lodash';

export interface CalendarDate {
    mDate: moment_.Moment;
    selected?: boolean;
    today?: boolean;
}

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnChanges {

    currentDate = moment_();
    dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    weeks: CalendarDate[][] = [];
    sortedDates: CalendarDate[] = [];

    @Input() selectedDates: CalendarDate[] = [];
    @Output() onSelectDate = new EventEmitter<CalendarDate>();

    constructor() { }

    ngOnInit(): void {
        this.generateCalendar();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.selectedDates &&
            changes.selectedDates.currentValue &&
            changes.selectedDates.currentValue.length > 1) {
            console.log(this.selectedDates);
            // sort on date changes for better performance when range checking
            this.sortedDates = _.sortBy(changes.selectedDates.currentValue, (m: CalendarDate) => m.mDate.valueOf());
            this.generateCalendar();
        }
    }

    // date checkers

    isToday(date: moment_.Moment): boolean {
        return moment_().isSame(moment_(date), 'day');
    }

    isSelected(date: moment_.Moment): boolean {
        return _.findIndex(this.selectedDates, (selectedDate) => {
            return moment_(date).isSame(selectedDate.mDate, 'day');
        }) > -1;
    }

    isSelectedMonth(date: moment_.Moment): boolean {
        return moment_(date).isSame(this.currentDate, 'month');
    }

    selectDate(date: CalendarDate): void {
        this.deselectCurrentDate();
        this.selectedDates.push(date);
        date.selected = true;
        this.currentDate = moment_(date.mDate);
        this.onSelectDate.emit(date);
    }

    deselectCurrentDate() {
        this.weeks.map((week) => {
            week.forEach((day) => {
                day.selected = false;
            })
        });
        this.selectedDates = [];
    }


    // actions from calendar

    prevMonth(): void {
        this.currentDate = moment_(this.currentDate).subtract(1, 'months');
        this.generateCalendar();
    }

    nextMonth(): void {
        this.currentDate = moment_(this.currentDate).add(1, 'months');
        this.generateCalendar();
    }

    firstMonth(): void {
        this.currentDate = moment_(this.currentDate).startOf('year');
        this.generateCalendar();
    }

    lastMonth(): void {
        this.currentDate = moment_(this.currentDate).endOf('year');
        this.generateCalendar();
    }

    prevYear(): void {
        this.currentDate = moment_(this.currentDate).subtract(1, 'year');
        this.generateCalendar();
    }

    nextYear(): void {
        this.currentDate = moment_(this.currentDate).add(1, 'year');
        this.generateCalendar();
    }

    // generate the calendar grid

    generateCalendar(): void {
        const dates = this.fillDates(this.currentDate);
        const weeks: CalendarDate[][] = [];
        while (dates.length > 0) {
            weeks.push(dates.splice(0, 7));
        }
        this.weeks = weeks;
    }

    fillDates(currentMoment: moment_.Moment): CalendarDate[] {
        const firstOfMonth = moment_(currentMoment).startOf('month').day();
        const firstDayOfGrid = moment_(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
        const start = firstDayOfGrid.date();
        return _.range(start, start + 42)
            .map((date: number): CalendarDate => {
                const d = moment_(firstDayOfGrid).date(date);
                return {
                    today: this.isToday(d),
                    selected: this.isSelected(d),
                    mDate: d,
                };
            });
    }
}  
