import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";

import "../styles/datepicker.css";
import Icons from "./icons";
import palette from "../styles/palette";

dayjs.extend(weekday);

type DatePickerPropsType = {
  placeholder?: string;
  format?: string;
  borderType?: "angulate" | "round";
  calendarType?: "date" | "range";
};

const DEFAULT_FORMAT = "YYYY.MM.DD";
const MONTH_FORMAT = "YYYY년 M월";
const DAYS_LIST = ["일", "월", "화", "수", "목", "금", "토"];

export default function DatePicker({
  placeholder,
  format = DEFAULT_FORMAT,
  borderType = "round",
  calendarType = "date",
}: DatePickerPropsType) {
  const [visible, setVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(dayjs().month() + 1);
  const [arrayOfDays, setArrayOfDays] = useState<any[]>([]);

  const today = dayjs();

  useEffect(() => {
    getAllDays();
  }, []);

  const onClickPicker = () => {
    setVisible(!visible);
  };

  const getAllDays = () => {
    const _days = [];
    for (let i = 1; i < 33; i++) {
      if (
        today.date(i).format(DEFAULT_FORMAT) ===
        today.add(1, "M").date(1).format(DEFAULT_FORMAT)
      ) {
        break;
      } else {
        _days.push(today.date(i));
      }
    }
    // setArrayOfDays(_days)
    console.log(_days, "??? DAYS");
    // TODO picker 영역 날짜 구현 필요
  };

  return (
    <>
      <div
        className={[borderType, "picker-wrapper", visible ? "open" : ""].join(
          " "
        )}
        onClick={onClickPicker}
      >
        <p className="picker-placeholder">{placeholder ?? DEFAULT_FORMAT}</p>
        <Icons
          icon={
            borderType === "round"
              ? "round_calendar_16"
              : "angulate_calendar_16"
          }
          width={16}
          height={16}
          color={palette.gray.gray600}
        />
      </div>

      <div
        className={["picker-selector-wrapper", visible ? "open" : ""].join(" ")}
      >
        {calendarType === "date" ? (
          <div className="picker-date">
            <div className="calendar-header">
              <Icons icon="round_arrow_left_16" />
              <p>{today.format(MONTH_FORMAT)}</p>
              <Icons icon="round_arrow_right_16" />
            </div>
            <div className="calendar-content">
              {DAYS_LIST.map((d) => (
                <div className="content-cell-days">
                  <p>{d}</p>
                </div>
              ))}
              {/* {arrayOfDays.map((day) => {
                if ()
              })} */}
            </div>
          </div>
        ) : (
          <div className="picker-range">
            <div className="picker-date">
              <div className="calendar-header">
                <Icons icon="round_arrow_left_16" />
                <p>{today.format(MONTH_FORMAT)}</p>
                <Icons icon="round_arrow_right_16" />
              </div>
              <div className="calendar-content"></div>
            </div>
            <div className="picker-date">
              <div className="calendar-header">
                <Icons icon="round_arrow_left_16" />
                <p>{today.add(1, "M").format(MONTH_FORMAT)}</p>
                <Icons icon="round_arrow_right_16" />
              </div>
              <div className="calendar-content"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
