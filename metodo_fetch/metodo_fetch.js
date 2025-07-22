fetch("https://ringsdb.com/api/doc#get--api-public-cards-")
  .then((response) => {
    console.log(response);
    return response.json;
  })
  .then((data) => {
    console.log(data);
  });
