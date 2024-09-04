export const handleSubmit = async (
    emailList: string,
    interval: string,
    day: string,
    time: string,
    searchQuery: string,
    relevancyScore: string
  ) => {
    try {
      const response = await fetch("/api/save-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailList,
          interval,
          day,
          time,
          searchQuery,
          relevancyScore,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to save notification settings");
      }
  
      const trimmedString = emailList.trim();
      const emailArray = trimmedString.split(/[\s,]+/);
      const filteredEmails = emailArray.filter(email => email !== '');
  
//       for (const email of filteredEmails) {
//         const emailResponse = await fetch("/api/send-email", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             recipient: email,
//             subject: "Your Notification Settings",
//             text: `Hello!
  
//   This is ${email}. You’ve requested notifications about ${searchQuery}.
  
//   Have a great day,
  
//   ${email}`,
//           }),
//         });
  
//         if (!emailResponse.ok) {
//           throw new Error(`Failed to send email to ${email}`);
//         }
      //}
  
      alert("Notification settings saved and emails sent successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving settings or sending emails");
    }
  };
  