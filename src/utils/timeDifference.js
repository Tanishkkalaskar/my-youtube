const getTimeDifference = (publishedAt) => {
  const givenDate = new Date(publishedAt);
  const currDate = new Date();

  const timeDifference = currDate - givenDate;

  const difference = Math.floor(timeDifference / (1000 * 60));

  return difference < 60
    ? difference > 1
      ? difference + " minutes ago"
      : difference + " minute ago"
    : differenceInHours(difference);
};

const differenceInHours = (differenceInMinutes) => {
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  return differenceInHours < 24
    ? differenceInHours > 1
      ? differenceInHours + " hours ago"
      : differenceInHours + " hour ago"
    : differenceInDays(differenceInHours);
};

const differenceInDays = (differenceInHours) => {
  const differenceInDays = Math.floor(differenceInHours / 24);
  return differenceInDays < 31
    ? differenceInDays > 1
      ? differenceInDays + " days ago"
      : differenceInDays + " day ago"
    : differenceInMonths(differenceInDays);
};

const differenceInMonths = (differenceInDays) => {
  const differenceInMonths = Math.floor(differenceInDays / 31);
  return differenceInMonths < 12
    ? differenceInMonths > 1
      ? differenceInMonths + " months ago"
      : differenceInMonths + " month ago"
    : differenceInYears(differenceInMonths);
};

const differenceInYears = (differenceInMonths) => {
  const differenceInYears = Math.floor(differenceInMonths / 12);
  return differenceInYears > 1
    ? differenceInYears + " years ago"
    : differenceInYears + " year ago";
};

export default getTimeDifference;
