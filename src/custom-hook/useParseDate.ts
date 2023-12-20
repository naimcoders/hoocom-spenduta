export const useParseDate = (date: string | undefined) => {
  const arrMonth: string[] = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const days: string[] = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const currentDate = date ?? "";

  const now = new Date(currentDate);

  const setMonth = arrMonth[now.getMonth()];
  const setDate = now.getDate();
  const setYear = now.getFullYear();
  const getDay = now.getDay();

  const formatDate = setDate < 10 ? `0${setDate}` : setDate;
  const fixedDay = days[getDay];

  const fixedDate = `${formatDate} ${setMonth} ${setYear}`;

  return { fixedDate, fixedDay };
};
