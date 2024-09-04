fetch("/data/about.json")
    .then(response => {
        if(!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
    })
    .then(aboutData => {
        console.log("aboutData", aboutData);
        
        const aboutBoxes = document.querySelector(".about-boxes");
        
        const colors = ["box-1", "box-2", "box-3", "box-4", "box-5"];

        aboutData.forEach((item, index) => {
            const aboutBox = document.createElement("div");
            aboutBox.className = "about-box";

            const colorClass = colors[index % colors.length];

            aboutBox.classList.add(colorClass);

            const h3Title = document.createElement("h3");
            h3Title.textContent = item.title;
            aboutBox.appendChild(h3Title);

            const aboutItems = document.createElement("div");
            aboutItems.classList.add("about-items", "closed");
            aboutBox.appendChild(aboutItems);

            const detailsList = document.createElement("ul");
            item.details.forEach(detail => {
                for (key in detail) {
                    const listItem = document.createElement("li");
                    listItem.textContent = detail[key];
                    detailsList.appendChild(listItem);
                }
            });
            aboutItems.appendChild(detailsList);
            aboutBoxes.appendChild(aboutBox);

            aboutBox.addEventListener("click", () => {
                const isClosed = aboutItems.classList.contains("closed");

                if (isClosed) {
                    aboutItems.classList.remove("closed");
                    aboutItems.classList.add("open");

                    h3Title.classList.remove("title-closed");
                    h3Title.classList.add("title-open");
                } else {
                    aboutItems.classList.remove("open");
                    aboutItems.classList.add("closed");

                    h3Title.classList.remove("title-open");
                    h3Title.classList.add("title-closed");
                }
            });
        });
    })
    .catch(error => {
        console.error("Problème avec fetch :", error)
    });