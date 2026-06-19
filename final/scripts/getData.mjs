export async function getPicture(apiUrl) {
  if (!document.querySelector("#pod")) return;
  try {
    let response = await fetch(apiUrl);
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

export async function getAlbum(apiUrl) {
  if (!document.querySelector("#modal")) return;
  try {
    let response = await fetch(apiUrl);
    if (response.ok) {
      let data = await response.json();
      getGallery(data);
    } else {
      const errorText = await response.text();
      throw new Error(`Server returned error: ${errorText}`);
    }
  } catch (error) {
    console.error(error);
  }
}

function getPhoto(data) {
  const container = document.querySelector("#pod");

  let title = document.createElement("h2");
  let date = document.createElement("p");
  let picture = document.createElement("img");
  let description = document.createElement("p");

  title.textContent = data.title;
  date.innerHTML = `<em>Date</em>: ${data.date}`;
  date.classList.add("pod-date");
  picture.setAttribute("src", data.url);
  picture.setAttribute("alt", data.title);
  picture.setAttribute("width", "500");
  picture.setAttribute("heigth", "500");
  picture.setAttribute("loading", "lazy");
  description.innerHTML = `<strong>Description</strong>: ${data.explanation}`;
  description.classList.add("pod-description");

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

function getGallery(data) {
  const section = document.querySelector("#gallery");
  const modal = document.querySelector("#modal");

  data.forEach((element) => {
    let container = document.createElement("div");
    container.classList.add("picture");

    let title = document.createElement("h2");
    let date = document.createElement("p");
    let picture = document.createElement("img");
    let button = document.createElement("button");

    title.textContent = element.title;
    date.innerHTML = `<em>Date</em>: ${element.date}`;
    date.classList.add("gallery-date");
    picture.setAttribute("src", element.url);
    picture.setAttribute("alt", element.title);
    picture.setAttribute("width", "275");
    picture.setAttribute("heigth", "275");
    picture.setAttribute("loading", "lazy");
    button.textContent = "Description";
    button.setAttribute("id", "modal-button");

    container.appendChild(title);
    container.appendChild(date);
    if (element.media_type === "image") {
      container.appendChild(picture);
    } else {
      const p = document.createElement("p");
      p.textContent = "Picture for this day is not available";
      container.appendChild(p);
    }
    container.appendChild(button);

    section.appendChild(container);

    button.addEventListener("click", () => {
      modal.innerHTML = "";
      let descriptionTitle = document.createElement("h3");
      let closeModal = document.createElement("button");
      let descriptionText = document.createElement("p");

      descriptionTitle.textContent = "Description";

      closeModal.textContent = "❌";
      descriptionText.textContent = element.explanation;

      modal.appendChild(descriptionTitle);
      modal.appendChild(closeModal);
      modal.appendChild(descriptionText);

      modal.showModal();

      closeModal.addEventListener("click", () => {
        modal.close();
      });
    });
  });
}
