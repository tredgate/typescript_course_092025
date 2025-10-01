// typescript/date-time/working_with_date_and_time.ts
import dayjs from "dayjs";

const now = dayjs().format();
console.log("Aktuální datum a čas: " + now);

const formattedDate = dayjs().format("D. MM. YYYY");
console.log("Formátované české datum: " + formattedDate);

const formattedDateTime = dayjs().format("DD.MM.YYYY - HH:mm:ss");
console.log("Datum a čas: " + formattedDateTime);

const nextWeek = dayjs().add(7, "days").format("DD.MM.YYYY");
console.log("Datum za týden: " + nextWeek);

const lastMonth = dayjs().subtract(1, "month").format("DD.MM.YYYY");
console.log("Minulý měsíc: " + lastMonth);

const parsedDateAddedOneYear = dayjs("2020-11-30")
  .add(1, "year")
  .format("DD.MM.YYYY");
console.log("Parsovaný datum a přidání roku: " + parsedDateAddedOneYear);
