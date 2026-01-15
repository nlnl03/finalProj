// utils.js

/**
 * מחזיר תאריך של היום בפורמט הנדרש: DD/MM/YYYY
 * (למשל: 15/01/2026)
 */
export function getCurrentDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // חודשים מתחילים מ-0
  const year = now.getFullYear();

  return `${day}/${month}/${year}`;
}

/**
 * הופך מחרוזת תאריך (DD/MM/YYYY) לאובייקט Date לצורך מיון
 */
export function parseDate(dateStr) {
  if (!dateStr) return new Date(0);

  const parts = dateStr.split("/"); // ["01", "01", "2024"]

  // בניה מחדש: שנה, חודש (פחות 1), יום
  // שים לב: זה יוצר תאריך בשעה 00:00:00
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

export function getSortedOrders() {
  // 1. שליפה
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  // 2. היפוך ראשוני (כדי שהאחרונים שהוספו יופיעו ראשונים באותו יום)
  orders.reverse();

  // 3. מיון לפי תאריכים
  orders.sort((a, b) => {
    const dateA = parseDate(a.Date);
    const dateB = parseDate(b.Date);
    return dateB - dateA;
  });

  return orders;
}

export function currentMonthOrders(orders) {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = String(now.getFullYear());

  return orders.filter(
    (order) =>
      order.Date.split("/")[1] === month && order.Date.split("/")[2] === year
  ).length;
}
