# Sisk.kssk.pwr.edu.pl

This repository contains the source code for a static website built with [11ty](https://www.11ty.dev/). It is configured to automatically deploy to GitHub Pages whenever changes are pushed to the `main` branch.The css is handled by [bulma](https://bulma.io/documentation/)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Installation
1.  Clone the repository:
2.  Install dependencies:
    ```bash
    npm install
    ```
### Development
1.  Start the development server:
    ```bash
    npm run sacss
    npm run start
    ```
    This will start a local server and watch for file changes. Open your browser and navigate to `http://localhost:8080` (or the port specified in the terminal).
## Deployment
This repository is configured for automatic deployment to GitHub Pages using a GitHub Actions workflow.
The deployment workflow is defined in `.github/workflows/deploy.yml`. It is triggered whenever changes are pushed to the `main` branch.
## Project Structure
```
sisk.kssk.pwr.edu.pl/
├── Makefile          # Build scripts and commands used in deployment
├── package.json      # Node.js project dependencies and scripts
├── README.md          # This file
├── src               # Source files for the website
│   ├── about.njk      # About page /about
│   ├── assets          # Static assets (CSS, images, documents)
│   │   ├── css         # Bulma config
│   │   ├── media       # Images and other media
│   │   │   └── Example_project # Place assets for  project pages here
│   ├── _includes      
│   │   ├── footer.njk
│   │   ├── header.njk
│   │   └── landing     # Landing page specific includes
│   ├── index.njk       # Main landing page
│   ├── _layouts        # Page layouts
│   │   └── base.njk
│   ├── projects        # Directory for project pages
│   │   └── ...
│   ├── projects.njk    # Projects listing page
│   └── statute.md      # curent statute of sisk used on /statute
└── TODO.md             
```
## How to Add a Project
This section outlines the steps for adding a new project article to the website.
1.  **Create a Project Markdown File:**
    * Navigate to the `src/projects/` directory.
    * Create a new Markdown file named `project_name.md` (replace `project_name` with the actual project name, using lowercase and hyphens if needed).
2.  **Add Front Matter:**
    * At the beginning of your `project_name.md` file, add the following front matter (preamble) 
        ```markdown
        ---
        layout: project.njk #
        title: project_name  # Replace with the project title
        startDate: startdate # Replace with the project start date (e.g., YYYY-MM-DD)
        endDate: enddate     # Replace with the project end date (or "Ongoing")
        description: description # Replace with a brief project description
        projectCordinator: projectCordinator # Replace with the project coordinator's name
        funding: funding if aplicable # Replace with funding information, or leave blank if not applicable
        progress: progress in percents (0-100) # Replace with the project's progress percentage
        color: accent Hex color with no '#' # Replace with the project's accent color (e.g., FF5733)
        ---
        ```
    * Replace the placeholder values with the actual project information.
3.  **Write Project Explanation:**
    * After the preamble, write the detailed explanation of your project using Markdown syntax.
4.  **Add Project Resources (Optional):**
    * If your project article includes images, documents, or other resources, create a new folder in `src/assets/` named `project_name` (matching the project file name).
    * Place your resource files inside this folder.
    * You can then reference these resources in your Markdown content using relative paths (e.g., `![Image](./assets/project_name/image.jpg)`).
5.  **Test Locally:**
    * Described in Development
6.  **Commit and Push:**
    * Commit your changes to Git:
    * Push your changes to the remote repository:
    * The GitHub Actions workflow will automatically deploy your changes.
## Personal Note from the Author 
This website, as you see it, is a labor of necessity. With only a few of us in SISK and highly limited time, designing a website from scratch proved quite challenging. 
We were stuck at  "under construction" for so long that even that broke. 

You might notice a certain resemblance to the [KSSK](https://kssk.pwr.edu.pl) website. Yes, that's intentional. I opted for a pragmatic approach, leveraging a design that was already functional and familiar. It was the quickest and most efficient way to get this site up and running.Plus i also think it looks cool as kssk is our parent organisation having a websitewith a similar design just feels right to me.

This website is intended to be a tool, a resource. It's not meant to be a permanent monument to my design sensibilities (or lack thereof). If, in the future, someone with a passion for web design and a vision for something better comes along, please, by all means, replace it. I encourage you.

Consider this a starting point, a placeholder. It serves its purpose for now, but it's ripe for improvement. Feel free to rebuild, redesign, and reimagine it. This is an open invitation to anyone in the future  who can make it better.


~ Dominik Bzdyra Daamioo 2025
