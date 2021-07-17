export default {
  linkExpires: "10d",
  dateLinkExpires: (days: number) => {
    const now = new Date();
    now.setHours(now.getHours() + days * 24);
    return now;
  },
};
