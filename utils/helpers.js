// Function to format a date in a specific format
const format_date = (date) => {
  // Check if the date is defined
  if (!date) {
    return ''; // Return an empty string if the date is undefined
  }

  // Format the date using toLocaleDateString
  return date.toLocaleDateString();
};

module.exports = {
  format_date,
};
