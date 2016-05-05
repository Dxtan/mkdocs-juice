# mkdocs-juice

##Installation
Juice is a clean, responsive PowerShell-inspired MkDocs static documentation site generator theme -forked with love [Dxtan](https://github.com/Dxtan/mkdocs-juice). It's built on the [Bootstrap framework](http://getbootstrap.com/) .

##Features

- Using the bootstrap framework, UI is concise and beautiful
- Any of the following extensions may be used for your Markdown source files: markdown, mdown, mkdn, mkd, md.
- The built-in devserver allows you to preview your documentation as you're writing it. It will even auto-reload whenever you save any changes, so all you need to do to see your latest edits is refresh your browser.
 

##Examples

Thes is [Demo](https://github.com/Dxtan/mkdocs-juice)

##Download & install

**_Requirements and Environment_**: Python 2.6+ or 3.3+

### Install MkDocs & Create a New Project

If you haven't installed MkDocs yet, use the following command to install it:

```bash
$ pip install mkdocs
```

You should download the code like this:

```bash
$ git clone https://github.com/Dxtan/mkdocs-juice.git
```

Use the following command to establish a local server for your site:

```bash
$ mkdocs serve
```

Then open your site in any browser at the URL `http://localhost:8000`.


##Usages

###Create Your Site

### Add Content with Markdown Syntax

Get to work on your site home page by opening the `docs/index.md` file and editing it in Markdown syntax.  The HTML automatically updates in the browser when you save the Markdown file if you use the MkDocs server (see command above).

### Add New Pages

Add new pages to your site by creating a new Markdown file in your `docs` directory, then linking to the new page in the `mkdocs.yml` file.  This uses a `Page Name : Markdown file` syntax.

For example, to add an About page using a Markdown file that is located on the path `docs/about.md`, you would format the `mkdocs.yml` file as follows:

```yaml
site_name: [YOURSITE]
project_name: [YOURPROJECT]
theme_dir: theme
pages:
- Home: index.md
- About: about.md
```

Add additional pages to your site by repeating the above series of steps.

### Build Your Site

Build your site files with the command:

```bash
$ mkdocs build
```

Your site files are built in the `site` directory and are ready to use.  Deploy the contents of the `site` directory to your web server.

### Site Customization

The following are a few common customizations that you might be interested in.  For much more detail about the configuration of your site, check out the [MkDocs Configuration documentation](https://github.com/mkdocs/mkdocs/blob/master/docs/user-guide/configuration.md).

##License

Juice is licensed under the MIT license. The full text of the license is available [here](https://github.com/Dxtan/mkdocs-juice).