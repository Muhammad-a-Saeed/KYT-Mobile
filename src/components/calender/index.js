import React from 'react';
import {Calendar} from 'react-native-calendars';
import {colors} from '../../services';
export default function CustomCalendar(props) {
  const marked = {
    '2023-02-16': {
      selected: true,
      selectedColor: colors.theme,
      selectedTextColor: colors.white,

    },
  };
  // const markedDates=  {
  //   '2012-03-01': { selected: true, marked: true, selectedColor: colors.theme},
  //   '2023-02-16': { marked: true},
  //   '2030-03-03': { selected: true, marked: true, selectedColor: colors.theme}
  // }
  
  return (
    <Calendar
      initialDate="2023-02-16"
      minDate="2000-12-01"
      maxDate="2026-01-30"
      disableAllTouchEventsForDisabledDays={true}
      selected={true}
      selectedColor={colors.theme}
      markedDates={marked}

      onDayPress={day => {
        console.log('selected day', day);
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
