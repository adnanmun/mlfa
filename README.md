# Memorial Light Field Archive (MLFA)

The Memorial Light Field Archive (MLFA) is a web-based gallery showcasing a collection of light field images. Each image is presented with its detailed attributes and a download link, allowing users to explore and obtain high-resolution light field images.

## Project Structure

- `index.html`: The entry point of the website containing the basic HTML structure.
- `style.css`: Contains all the styling rules for the website.
- `script.js`: JavaScript file handling dynamic loading of images and interactions.
- `config.json`: Configuration file containing metadata about each image.

## Setup

To run the project locally, follow these steps:

1. Clone the repository:
```
git clone https://github.com/adnanmun/mlfa.git
```

2. Navigate to the project directory:
```
cd mlfa
```

3. Start a local server. If you have Python installed, you can start a simple HTTP server with the following command:
  ```
  python -m http.server
  ```

4. Open your web browser and visit `http://localhost:8000` to view the project.

## Dependencies

- Modern web browser capable of interpreting HTML5, CSS3, and JavaScript.

## Configuration

The `config.json` file holds the metadata for the images in the following format:

```json
[
 {
     "lightFieldAttributes": {
         "hogelDimensions": [256, 256],
         "directionalResolution": [115, 115],
         "displayFOV": [45, 45],
         "file": "example.png",
         "fileSize": "123456 bytes",
         "downloadLink": "http://example.com/download/example.png"
     }
 }
]