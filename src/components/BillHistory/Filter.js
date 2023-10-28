import { DatePicker, DateRangePicker } from "@mantine/dates";
import React, { useState } from "react";

const Filter = ({
  dateValue,
  setDateValue,
  dateRangeValue,
  setDateRangeValue,
}) => {
  return (
    <div className='mb-4 d-flex' style={{ gap: "16px" }}>
      <DatePicker
        placeholder='Pick date'
        label='Date of supply'
        value={dateValue}
        onChange={setDateValue}
        styles={{ label: { fontWeight: 400 } }}
        style={{ maxWidth: "180px" }}
      />
      <DateRangePicker
        placeholder='Pick date'
        label='Date range of supply'
        value={dateRangeValue}
        onChange={setDateRangeValue}
        styles={{ label: { fontWeight: 400 } }}
        style={{ maxWidth: "180px" }}
      />
    </div>
  );
};

export default Filter;
