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
  const syllabus = document.getElementById("syllabus");
  const data = await loadLocalJson();

  if (!syllabus) {
    console.error("No element with id='syllabus'");
    return;
  }

  if (!data) {
    console.error("Could not load JSON data");
    return;
  }

  syllabus.href = data.syllabus;
}

window.addEventListener("DOMContentLoaded", getUrl);