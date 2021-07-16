export default {
  linkExpires: "10d",
  dateLinkExpires: () => {
    const now = new Date();
    now.setDate(now.getDay() + 10);
    return now;
  },
};
