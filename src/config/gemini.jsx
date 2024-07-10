// const result = await chatSession.sendMessage(prompt);
async function run(prompt) {
  try {
    const response = await fetch("http://127.0.0.1:8000/caBuddy/", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: prompt }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    console.log(data.response);
    return data.response;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

export default run;
