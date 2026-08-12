# Herman Woodcrafting Website Redesign Demo

Static HTML/CSS/JS redesign proposal for Herman Woodcrafting.

## Pages
- `index.html`
- `stairs.html`
- `builders.html`
- `remodeling.html`
- `contact.html`

## GitHub Pages
Upload all files directly to the repository root. With GitHub Pages set to deploy from `main` / `(root)`, the homepage will be available at the repository's GitHub Pages URL.

## Replacing stock images
The temporary image locations are marked in the HTML with comments beginning `STOCK IMAGE`. The homepage hero background is in `styles.css` under `.hero`.

When client photos are available, add an `images` folder and use relative URLs such as:

`images/herman-staircase-01.jpg`

This keeps the finished site independent of third-party stock-image URLs.

## Contact form
The contact form is currently a visual demo only. `script.js` prevents submission and displays a note. Connect it to a form service or backend before launch.
