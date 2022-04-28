export const postData = (type, data) => {
  if (type === "list") {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data,
      }),
    };

    fetch(
      "https://626abc396a86cd64adb203dd.mockapi.io/api/list",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
};
