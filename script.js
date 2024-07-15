window.addEventListener('DOMContentLoaded', () => {
    fetch('config.json')
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById('image-gallery');
        const modal = document.createElement('div');
        modal.className = 'modal';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        const closeSpan = document.createElement('span');
        closeSpan.className = 'close';
        closeSpan.innerHTML = '&times;';
        modalContent.appendChild(closeSpan);

        const modalImg = document.createElement('img');
        modalContent.appendChild(modalImg);

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        closeSpan.onclick = function() {
            modal.style.display = "none";
        }

        data.forEach(item => {
            const container = document.createElement('div');
            container.className = 'image-container';

            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'img-wrapper';

            const img = document.createElement('img');
            img.src = `images/${item.lightFieldAttributes.file}`;
            img.alt = item.lightFieldAttributes.file;
            imgWrapper.appendChild(img);

            const figcaption = document.createElement('figcaption');
            figcaption.textContent = item.lightFieldAttributes.file;
            imgWrapper.appendChild(figcaption);

            img.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                modalImg.alt = this.alt;
            }

            container.appendChild(imgWrapper);

            const details = document.createElement('div');
            details.className = 'image-details';
            const displayFOVText = Array.isArray(item.lightFieldAttributes.displayFOV) ?
                                   item.lightFieldAttributes.displayFOV.join(',') :
                                   item.lightFieldAttributes.displayFOV;
            const hogelDimensionsText = Array.isArray(item.lightFieldAttributes.hogelDimensions) ?
                                        item.lightFieldAttributes.hogelDimensions.join(',') :
                                        item.lightFieldAttributes.hogelDimensions;
            details.innerHTML = `
                <span><strong>Hogel Dimensions:</strong> ${hogelDimensionsText}</span>
                <span><strong>Directional Resolution:</strong> ${item.lightFieldAttributes.directionalResolution}</span>
                <span><strong>Display FOV:</strong> ${displayFOVText}</span>
                <span><strong>File size:</strong> ${item.lightFieldAttributes.fileSize}</span>
            `;
            container.appendChild(details);

            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download';
            downloadButton.onclick = () => window.location.href = item.lightFieldAttributes.downloadLink;
            details.appendChild(downloadButton);

            gallery.appendChild(container);
        });
    })
    .catch(error => console.error('Error loading the config file:', error));
});
