import MonthNavigation from "./MonthNavigation";
import MonthView from "./month";
import styled from "styled-components";
import BookingDatesView from "./BookingDatesView";
import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";

const Calendar = () => {
  const { calendarSettings } = useContext(CalendarContext);
  const { numMonths, showBookingDatesView } = calendarSettings;

  return (
    <>
      {showBookingDatesView && <BookingDatesView />}

      <MonthNavigation />
      <CalendarContainer>
        {[...Array(numMonths)].map((_, index) => (
          <MonthView key={`month-view-${index}`} index={index} />
        ))}
      </CalendarContainer>
    </>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;
