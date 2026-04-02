const DATA_URL = "inputs.json";

async function loadLocalJson() {
  try {
    const response = await fetch(DATA_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}

async function getUrl() {  
  const data = await loadLocalJson();
  //const myClassList = ["link_syllabus", "link_lecture_notes"];  
  const myClassList = Object.keys(data);  

  for (const my_class of myClassList){
    const elements = document.getElementsByClassName(my_class);
        if (!elements) {
        console.error(`No elements with class=${my_class}`);
        return;
    }
    for (let element of elements){
        element.href = data[my_class];
    }
  }  
}

window.addEventListener("DOMContentLoaded", getUrl);