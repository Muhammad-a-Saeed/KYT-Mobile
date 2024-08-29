import React from 'react';
import {Calendar} from 'react-native-calendars';
import {colors} from '../../services';
import moment from 'moment';
export default function CustomCalendar(props) {
  // const marked = {
  //   '2023-02-16': {
  //     selected: true,
  //     selectedColor: colors.theme,
  //     selectedTextColor: colors.white,

  //   },
  // };//this code specaillyy marked date

  const todayDate = moment().format('YYYY-MM-DD');
  const marked = props.markedDates || {
    [todayDate]: {
      selected: true,
      selectedColor: colors.theme,
      selectedTextColor: colors.white,
    },
  };

  return (
    <Calendar
      initialDate={todayDate}
      minDate="2000-12-01"
      maxDate="2026-01-30"
      disableAllTouchEventsForDisabledDays={true}
      selected={true}
      selectedColor={colors.theme}
      markedDates={marked}
      onDayPress={day => {
        console.log('selected day', day);
        if (props.onDateSelect) {
          props.onDateSelect(day.dateString);
        }
      }}
      {...props}
      style={{
        borderRadius: 5,
        padding: 20,
      }}
      theme={{
        calendarBackground: colors.white,
        monthTextColor: colors.black,
        todayTextColor: colors.theme,
        dayTextColor: colors.black,
      }}
    />
  );
}
