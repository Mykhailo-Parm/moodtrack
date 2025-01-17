export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) {
    return "Invalid date"; // You can choose how to handle invalid dates
  }
  const date = new Date(dateString);
  return date.toLocaleString(); // You can adjust this to a specific format if needed
};
