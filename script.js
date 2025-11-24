function showAnswer(response) {
    alert(response.data.answer);
  }
  
  let key = "54140323a0tcoaa5a5d403ba35bafe4a";  
  let context = "Be sure to provide a clear and precise answer";
  let prompt = "Who is the first female president?";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  
  console.log("processing…");
  
  axios.get(apiUrl).then(showAnswer);