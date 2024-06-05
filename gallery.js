const projectList = document.createElement("ol");
projectList.classList.add("cards");

const projects = [
    {
        name: "Project 1",
        description: "Description of project 1",
        imageSrc: "project1.jpg",
        primaryColor: "red"
    },
    {
        name: "Project 2",
        description: "Description of project 2",
        imageSrc: "project2.jpg",
        primaryColor: "blue"
    },
    {
        name: "Project 3",
        description: "Description of project 3",
        imageSrc: "project3.jpg",
        primaryColor: "green"
    },
];

for (let i = 0; i < projects.length; i++) {

    const projectItem = document.createElement("li");

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const projectHeading = document.createElement("h2");
    projectHeading.style.color = projects[i].primaryColor;
    projectHeading.innerText = projects[i].name;

    const projectImage = document.createElement("img");
    projectImage.src = "images/" + projects[i].imageSrc;
    projectImage.alt = "Image of " + projects[i].name;

    const projectDescription = document.createElement("p");
    projectDescription.innerText = projects[i].description;

    projectDiv.appendChild(projectHeading);
    projectDiv.appendChild(projectImage);
    projectDiv.appendChild(projectDescription);

    projectItem.appendChild(projectDiv);

    projectList.appendChild(projectItem);
}

document.getElementById("projects").appendChild(projectList);