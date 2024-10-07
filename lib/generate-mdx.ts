// Import required modules
import fs from 'fs'     // File system module for file operations
import path from 'path' // Path module for handling file paths

// Define the path for the MDX template and the output directory
const templatePath = path.join(__dirname, 'templates', 'template.mdx');
const mdxDir = path.join(__dirname, 'content'); // Change this to your desired directory

// Function to generate the next prefix number
function getNextPrefix() {
    // Read all files in the specified directory
    const files = fs.readdirSync(mdxDir);
    
    // Extract numeric prefixes from filenames, convert to integers, and filter valid numbers
    const prefixes = files.map(file => parseInt(file.split('-')[0], 10)).filter(Number.isInteger);
    
    // Return the next prefix number (max + 1) or start at 1 if no files exist
    return prefixes.length ? Math.max(...prefixes) + 1 : 1; 
}

// Function to slugify a title (make it URL-friendly)
function slugify(title:string) {
    return title
        .toLowerCase()              // Convert to lowercase
        .trim()                     // Remove leading/trailing whitespace
        .replace(/[\s]+/g, '-')     // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, '')   // Remove non-word characters (keeping hyphens)
        .replace(/\-\-+/g, '-')      // Replace multiple hyphens with a single one
        .replace(/^-+|-+$/g, '');    // Trim hyphens from the start and end
}

// Function to generate the MDX file
function generateMdx(title:string) {
    // Get the next prefix number for the file
    const prefix = getNextPrefix();
    
    // Create a slug from the title for the filename
    const slug = slugify(title);
    
    // Construct the filename using zero-padded prefix and slug
    const mdxFileName = `${prefix.toString().padStart(5, '0')}-${slug}.mdx`;
    const mdxFilePath = path.join(mdxDir, mdxFileName); // Full path for the new file

    // Ensure the output directory exists; create it if it doesn't
    if (!fs.existsSync(mdxDir)) {
        fs.mkdirSync(mdxDir);
    }

    // Read the template file to use as the content for the new MDX file
    fs.readFile(templatePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading template:', err);
            return; // Exit if there's an error reading the template
        }

        // Replace the placeholder in the template with the actual title
        const result = data.replace(/{{title}}/g, title);

        // Write the new MDX file with the generated content
        fs.writeFile(mdxFilePath, result, 'utf8', (err) => {
            if (err) {
                console.error('Error writing MDX file:', err);
                return; // Exit if there's an error writing the file
            }
            // Log success message with the created filename
            console.log(`MDX file created successfully: ${mdxFileName}`);
        });
    });
}

// Get the title from command line arguments
const title = process.argv[2]; // The title is expected as the third argument
if (!title) {
    console.error('Please provide a title for the MDX file.');
    process.exit(1); // Exit if no title is provided
}

// Call the function to generate the MDX file with the provided title
generateMdx(title);
