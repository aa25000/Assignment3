

const endpoint = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100"

async function fetchData() {
    const response = await fetch(endpoint)
    if (!response.ok || response.status !== 200) {
        console.error('Error occuurded.')
    }
    const { results } = await response.json();
    if (!results) {
        throw new Error('No results were found')
    }
    displayData(results)
}

function displayData (results) {
    const tbd = document.getElementById('tbd')

    results.forEach(result => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${result.year}</td>
            <td>${result.semester}</td>
            <td>${result.nationality}</td>
            <td>${result.colleges}</td>
            <td>${result.number_of_students}</td>
        `

        tbd.appendChild(tr)
    });
}

document.addEventListener('DOMContentLoaded', fetchData)
