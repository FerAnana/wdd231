export async function getData() {
  try {
    let response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=3sVAP4f1JhsK9EthNnoWUHBShPv2V8fWAhTSc6pg",
    );
    if (response.ok) {
      let data = await response.json();
      getPhoto(data);
    } else {
      const errorText = await response.text();
      throw new Error(`Server returned error: ${errorText}`);
    }
  } catch (error) {
    console.error(error);
  }
}

function getPhoto(data) {
  if (!document.querySelector("#pod")) return;

  const container = document.querySelector("#pod");

  let title = document.createElement("h2");
  let date = document.createElement("p");
  let picture = document.createElement("img");
  let description = document.createElement("p");

  title.textContent = data.title;
  date.innerHTML = `<em>Date</em>: ${data.date}`;
  date.classList.add("pod-date")
  picture.setAttribute("src", data.url);
  picture.setAttribute("alt", data.title);
  picture.setAttribute("width", "500");
  picture.setAttribute("heigth", "500");
  picture.setAttribute("loading", "lazy");
  description.innerHTML = `<strong>Description</strong>: ${data.explanation}`;
  description.classList.add("pod-description")

  container.appendChild(title);
  container.appendChild(date);
  if (data.media_type === "image") {
    container.appendChild(picture);
  } else {
    const p = document.createElement("p");
    p.textContent = "There is no Picture of the Day for today.";
    container.appendChild(p);
  }
  container.appendChild(description);
}
