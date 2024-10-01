document.addEventListener('DOMContentLoaded', () => {
    const readFileButton = document.getElementById('readFile');
    const fileContentDiv = document.getElementById('fileContent');

    readFileButton.addEventListener('click', () => {
        fetch('/api/read-file')
            .then(response => response.json())
            .then(data => {
                fileContentDiv.textContent = data.content;
            })
            .catch(error => {
                console.error('Error:', error);
                fileContentDiv.textContent = 'Error reading file';
            });
    });
});