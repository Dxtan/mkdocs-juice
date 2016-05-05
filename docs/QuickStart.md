# Juice Theme <small>for MkDocs</small>

## About
Juice is a clean, responsive PowerShell-inspired MkDocs static documentation site generator theme -forked with love [Dxtan](https://github.com/Dxtan/mkdocs-juice). It's built on the [Bootstrap framework](http://getbootstrap.com/) .

## Install

**_Required_**: Python 2.6+ or 3.3+

### Install MkDocs & Create a New Project

If you haven't installed MkDocs yet, use the following command to install it:

```bash
$ pip install mkdocs
```

Next, navigate to a clean directory and create a new MkDocs project with the following command:

```bash
$ mkdocs new [projectname]
```

Replace `[projectname]` with the name of your project (without the brackets).

Then navigate to the root of your project directory:

```bash
$ cd [projectname]
```
### Install the Juice Theme

Choose one of the following install approaches:

#### 1. Install with pip

If you are using MkDocs v0.15.0 or higher, you can install the Juice theme with pip using the command:

```bash
$ pip install mkdocs-Juice
```

MkDocs projects use a YAML settings file called `mkdocs.yml`.  This is located in the root of your project directory after you use the `mkdocs new` command.  Open the file in a text editor and modify it to define Juice in the `theme` setting as follows (note that this is case-sensitive):

```yaml
site_name: [YOURSITE]
PROJECT_name: [YOURPROJECT]
theme: Juice
pages:
- Home: index.md
```

**Theme Updates**: If you choose the pip install approach, you can update your Juice theme to new releases with the command `$ pip install --upgrade mkdocs-Juice`.  Then re-build your static site files (see instructions below).

#### 2. Manual Install

Download the Juice theme archive.

<a href="#"><button type="button" class="btn btn-success"><i class="fa fa-cloud-download"></i>  Download Juice v0.1.0</button></a>

Unpack the contents of the archive into a directory named `Juice` at the top level of your MkDocs project directory.

Your project directory should now look like this:

```
├── mkdocs.yml
├── theme
│     ├── css
│     ├── font
│     ├── js
│     ├── include
│     ├── base.html
│     └── nav.html
└── docs
      └── index.md
```

MkDocs projects use a YAML settings file called `mkdocs.yml`.  This is located in the root of your project directory after you use the `mkdocs new` command.  Open the file in a text editor and modify it to include the `theme_dir` setting as follows:

```yaml
site_name: [YOURPROJECT]
theme_dir: Juice
pages:
- Home: index.md
```

**Theme Updates**: If you choose the manual install approach, you can update your Juice theme by downloading the new Juice.zip release archive and including it in your project. Then re-build your static site files (see instructions below).

## Test with a Local Site Server


Use the following command to establish a local server for your site:

```bash
$ mkdocs serve
```

Then open your site in any browser at the URL `http://localhost:8000`.

## Create Your Site

### Add Content with Markdown Syntax

Get to work on your site home page by opening the `docs/index.md` file and editing it in Markdown syntax.  The HTML automatically updates in the browser when you save the Markdown file if you use the MkDocs server (see command above).

### Add New Pages

Add new pages to your site by creating a new Markdown file in your `docs` directory, then linking to the new page in the `mkdocs.yml` file.  This uses a `Page Name : Markdown file` syntax.

For example, to add an About page using a Markdown file that is located on the path `docs/about.md`, you would format the `mkdocs.yml` file as follows:

```yaml
site_name: [YOURPROJECT]
theme_dir: Juice
pages:
- Home: index.md
- About: about.md
```

Add additional pages to your site by repeating the above series of steps.

## Build Your Site

Build your site files with the command:

```bash
$ mkdocs build
```

Your site files are built in the `site` directory and are ready to use.  Deploy the contents of the `site` directory to your web server.

## Site Customization

The following are a few common customizations that you might be interested in.  For much more detail about the configuration of your site, check out the [MkDocs Configuration documentation](https://github.com/mkdocs/mkdocs/blob/master/docs/user-guide/configuration.md).

### Site Favicon

Place your site favicon image file in the top level of your docs directory and then include a new `site_favicon:` field in the `mkdocs.yml` file:

```yaml
site_name: [YOURPROJECT]
theme_dir: Juice
site_favicon: favicon.ico
pages:
  - Home: index.md
  - About: about.md
```

### Add Your Own CSS Stylesheets

Create a `css` directory inside your `docs` directory and add your CSS files.  You can overwrite any of the Juice styles in your CSS files.  Then include your CSS files in the `mkdocs.yml` file with the `extra_css` field:

```yaml
site_name: [YOURPROJECT]
theme_dir: Juice
extra_css:
  - "css/mystyle.css"
  - "css/myotherstyle.css"
pages:
  - Home: index.md
  - About: about.md
```

Your CSS styles fall at the end of the cascade and will override all styles included in the theme (including Bootstrap and default Juice styles).  You can find the Juice and Bootstrap CSS files on the paths `theme/css/theme.css` and `theme/css/bootstrap.min.css`, respectively.


### Add Your Own JavaScript

Create a `js` directory inside your `docs` directory and add your JS files.  Then include your JS files in the `mkdocs.yml` file with the `extra_js` field:

```yaml
site_name: [YOURPROJECT]
theme_dir: Juice
extra_js:
  - "js/myscript.js"
  - "js/myotherscript.js"
pages:
  - Home: index.md
  - About: about.md
```

### Github or Bitbucket Repository Link

Include the `repo_url` field and define it with your repository URL:

```yaml
site_name: [YOURPROJECT]
theme_dir: Juice
repo_url: "https://github.com/Dxtan/mkdocs-juice"
pages:
  - Home: index.md
  - About: about.md
```

The link appears at the upper right hand corner of your site.

### License Declaration and Link

The Juice theme displays your license declaration in the footer if you include a `copyright` field and define it with the text (and optionally the HTML link) that you would like to display:

```yaml
site_name: [YOURPROJECT]
theme_dir: Juice
copyright: Copyright © 2016 Dxtan, Mkdocs Juice.
pages:
  - Home: index.md
  - About: about.md
```

## Issues

If you have any issues with the theme, please report them on the Juice repository:

<a href="https://github.com/Dxtan/mkdocs-juice/issues/new"><button class="btn btn-primary" type="submit">Report Issue</button></a>
<a href="https://github.com/Dxtan/mkdocs-juice/issues"><button class="btn btn-primary" type="submit">Active Issues</button></a>

## License

Juice is licensed under the MIT license. The full text of the license is available [here](https://github.com/Dxtan/mkdocs-juice).



