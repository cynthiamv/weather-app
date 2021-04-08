const formattedDate = dateString => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const weekDay = new Date(dateString).getUTCDay();
  const shortMonth = new Date(dateString).getUTCMonth();
  const numericDay = new Date(dateString).getUTCDate();

  return `${days[weekDay]}, ${numericDay} ${months[shortMonth]}`;
}

export default formattedDate;