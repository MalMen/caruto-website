# Hugo PUP

This is forked from: github.com/chipzoller/hugo-clarity.
It adds the functionality for working with the podcasts RSS feed (compatible with Apple Podcasts).

The RSS feed URL is available at http://localhost:1313/feed/podcast/index.xml

Everything else, is from the original work:

# Hugo Clarity

A technology-minded theme for Hugo based on VMware's open-source [Clarity Design System](https://clarity.design/) featuring rich code support, dark/light mode, mobile support, and much more. See [a live demo at __neonmirrors.net__](https://neonmirrors.net/).

![Clarity Hugo Theme](https://github.com/chipzoller/hugo-clarity/blob/master/images/screenshot.png)

## Preview on Desktop

| Light Mode | Dark Mode |
|---| --- |
| ![Clarity Hugo Theme desktop light](https://github.com/chipzoller/hugo-clarity/blob/master/images/screenshot.png) | ![Clarity Hugo Theme desktop dark](https://github.com/chipzoller/hugo-clarity/blob/master/images/screenshot-darkmode.png) |

## Preview on Mobile

| Light Mode | Dark Mode |
|---| --- |
| ![Clarity Hugo Theme mobile light](https://github.com/chipzoller/hugo-clarity/blob/master/images/screenshot-mobile.png) | ![Clarity Hugo Theme mobile dark](https://github.com/chipzoller/hugo-clarity/blob/master/images/screenshot-mobile-darkmode.png) |

## Table of Contents

- [Hugo PUP](#hugo-pup)
- [Hugo Clarity](#hugo-clarity)
  - [Preview on Desktop](#preview-on-desktop)
  - [Preview on Mobile](#preview-on-mobile)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Getting up and running](#getting-up-and-running)
    - [Option 1 (recommended)](#option-1-recommended)
    - [Option 2 (Great for testing quickly)](#option-2-great-for-testing-quickly)
  - [Configuration](#configuration)
    - [Global Parameters](#global-parameters)
    - [Page Parameters](#page-parameters)
    - [Modify links menu](#modify-links-menu)
    - [Social media](#social-media)
    - [Search engine](#search-engine)
    - [Blog directory](#blog-directory)
    - [Mobile menu positioning](#mobile-menu-positioning)
    - [Tags and Taxonomies](#tags-and-taxonomies)
      - [Show number of tags](#show-number-of-tags)
      - [Number of tags example](#number-of-tags-example)
    - [Images](#images)
      - [Image figure captions](#image-figure-captions)
      - [Image figure captions example](#image-figure-captions-example)
      - [Inline images](#inline-images)
      - [Inline images example](#inline-images-example)
      - [Float images to the left](#float-images-to-the-left)
      - [Float images left example](#float-images-left-example)
      - [Add classes to images](#add-classes-to-images)
      - [Image class example](#image-class-example)
      - [Article thumbnail image](#article-thumbnail-image)
      - [Article featured image](#article-featured-image)
      - [Share Image](#share-image)
      - [Align logo](#align-logo)
    - [Code](#code)
      - [Display line numbers](#display-line-numbers)
      - [Limit code block height](#limit-code-block-height)
    - [Table of contents](#table-of-contents-1)
    - [Table of contents (TOC) example](#table-of-contents-toc-example)
    - [Custom CSS and JS](#custom-css-and-js)
    - [Forcing light or dark mode](#forcing-light-or-dark-mode)
    - [I18N](#i18n)

## Features

* Blog with tagging and category options
* Deeplinks
* Native Image Lazy Loading
* Customizable (see config)
* Dark Mode (with UI controls for user preference setting)
* Toggleable table of contents
* Flexible image configuration
* Logo alignment
* Mobile support with configurable menu alignment
* Syntax Highlighting
* Rich code block functions including:
    1. Copy to clipboard
    2. Toggle line wrap (dynamic)
    3. Toggle line numbers
    4. Language label
    5. Toggle block expansion/contraction (dynamic)

    To put it all in context, here is a preview showing all functionality.

    ![code block functions](https://github.com/chipzoller/hugo-clarity/blob/master/images/syntax-block.gif)

## Prerequisites

Firstly, __ensure you have installed the [extended version of Hugo](https://github.com/gohugoio/hugo/releases)__. See installation steps from [Hugo's official docs](https://gohugo.io/getting-started/installing/).

## Getting up and running

Read the [prerequisites](#prerequisites) above and verify you're using the extended version of Hugo. There are at least two ways of quickly getting started with Hugo and the VMware Clarity theme:

### Option 1 (recommended)

Generate a new Hugo site and add this theme as a Git submodule inside your themes folder:

```bash
hugo new site yourSiteName
cd yourSiteName
git init
git submodule add https://github.com/chipzoller/hugo-clarity themes/hugo-clarity
cp -a themes/hugo-clarity/exampleSite/* .
```

Then run

```bash
hugo server
```

Hurray!

### Option 2 (Great for testing quickly)

You can run your site directly from the `exampleSite`. To do so, use the following commands:

```bash
git clone https://github.com/chipzoller/hugo-clarity
cd hugo-clarity/exampleSite/
hugo server --themesDir ../..
```

> Although, option 2 is great for quick testing, it is somewhat problematic when you want to update your theme. You would need to be careful not to overwrite your changes.

Once set, jump over to the `config.toml` file and start [configuring](#configuration) your site.

## Configuration

This section will mainly cover settings that are unique to this theme. If something is not covered here (or elsewhere in this file), there's a good chance it is covered in [this Hugo docs page](https://gohugo.io/getting-started/configuration/#configuration-file).

### Global Parameters

These options set global values that some pages or all pages in the site use by default.

| Parameter | Value Type | Overidable on Page |
|:---- | ---- | ---- |
| author | string | no |
| twitter | string | no |
| largeTwitterCard | boolean | no |
| ga_analytics | string | no |
| description | string | yes |
| introDescription | string | no |
| numberOfTagsShown | integer | no |
| fallBackOgImage | file path (string) | no |
| codeMaxLines | integer | yes |
| codeLineNumbers | boolean | yes |
| mainSections | array/string | no |
| centerLogo | boolean | no |
| logo | file path (string) | no |
| mobileNavigation | string | no |
| figurePositionShow | boolean | yes |
| figurePositionLabel | string | no |
| customCSS | array of file path (string) | no |
| customJS | array of file path (string) | no |
| enforceLightMode | boolean | N/A |
| enforceDarkMode | boolean | N/A |

### Page Parameters

These options can be set from a page [frontmatter](https://gohugo.io/content-management/front-matter#readout) or via [archetypes](https://gohugo.io/content-management/archetypes/#readout).

| Parameter | Value Type | Overrides Global |
|:---- | ---- | ---- |
| title | string | N/A |
| date | date | N/A |
| description | string | N/A |
| draft | boolean | N/A |
| featured | boolean | N/A |
| tags | array/string | N/A |
| categories | array/string | N/A |
| toc | boolean | N/A |
| thumbnail | file path (string) | N/A |
| featureImage | file path (string) | N/A |
| shareImage | file path (string) | N/A |
| codeMaxLines | integer | yes |
| codeLineNumbers | boolean | yes |
| figurePositionShow | boolean | yes |
| figurePositionLabel | string | no |

### Modify links menu

To add, remove, or reorganize top menu items, [edit this YAML file](https://github.com/chipzoller/hugo-clarity/blob/master/exampleSite/data/menu.yaml). These menu items also display any categories (taxonomies) that might be configured for articles.

### Social media

To edit your social media profile links, [edit this YAML file](https://github.com/chipzoller/hugo-clarity/blob/master/exampleSite/data/social.yaml).

If you wish to globally use a [large Twitter summary card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image) when sharing posts, set the global parameter `largeTwitterCard` to `true`.

### Search engine

If using Google Analytics, configure the `ga_analytics` global parameter in your site with your ID.

### Blog directory

Edit the `config.toml` file and change the `mainSections` key. Values will be directories where the blogs reside.

```yaml
[params]
...
mainSections = ["posts", "docs", "blogs"]
...
```

For more info, see the [Hugo docs](https://gohugo.io/functions/where/#mainsections).

### Mobile menu positioning

The navigation menu when mobile browsing can be configured in `config.toml` to open right or left depending on preference. The "hamburger" menu icon will always display in the upper right hand corner regardless.

```yaml
[params]
...
mobileNavigation = "left" # Mobile nav menu will open to the left of the screen.
...
```

### Tags and Taxonomies

#### Show number of tags

The number of tags and taxonomies (including categories) that should be shown can be configured so that any more than this value will only be accessible when clicking the All Tags button. This is to ensure a large number of tags or categories can be easily managed without consuming excess screen real estate. Edit the `numberOfTagsShown` parameter and set accordingly.

```yaml
[params]
...
numberOfTagsShown = 14 # Applies for all other default & custom taxonomies. e.g categories, brands see https://gohugo.io/content-management/taxonomies#what-is-a-taxonomy
...
```

#### Number of tags example

![Tags](https://github.com/chipzoller/hugo-clarity/blob/master/images/tags.png)

### Images

#### Image figure captions

You have the option of adding captions to images in blog posts and automatically prepending a desired string such as "Figure N" to the alt text. This is controlled via two global settings.

`figurePositionLabel` is a string which will be prepended to any alt text of an article image. By default, this is set to "Figure." And `figurePositionShow` controls, globally, whether to show this label. It does not affect whether to show the image alt text, only the prefix figure caption. For more granular control, `figurePositionShow` can be overridden at the article level if desired.

The number will be automatically calculated and assigned after the `figurePositionLabel` text starting from the top of the article and counting down. Featured images will be excluded from this figuration.

#### Image figure captions example

In this example, `figurePositionLabel` is set to "Figure" in `config.toml` and this is the first image in a given article.

```markdown
![Antrea Kubernetes nodes prepared](./images/image-figure.png)
```

![Here is my alt text for this image.](https://github.com/chipzoller/hugo-clarity/blob/master/images/image-figure.png)

#### Inline images

To make a blog image inline, append `:inline` to its alt text. Typically, inline images will have no alt text associated with them.

#### Inline images example

```markdown
<!-- some image without alt text -->
![:inline](someImageUrl)

<!-- some image with alt text -->

![some alt text:inline](someOtherImageUrl)
```

![Inline image example](https://github.com/chipzoller/hugo-clarity/blob/master/images/image-inline.png)

#### Float images to the left

To align a blog image to the left, append `:left` to its alt text. Article text will then flow to the right of the image.

#### Float images left example

```markdown
<!-- some image without alt text -->
![:left](someImageUrl)

<!-- some image with alt text -->

![some alt text:left](someOtherImageUrl)
```

#### Add classes to images

To add a class image to the left, append `::<classname>` to its alt text. You can also add multiple classes to an image separated by space. `::<classname1> <classname2>`.

#### Image class example

```markdown
<!-- some image without alt text -->
![::img-medium](someImageUrl)

<!-- some image with alt text -->

![some alt text::img-large img-shadow](someOtherImageUrl)
```


#### Article thumbnail image

Blog articles can specify a thumbnail image which will be displayed to the left of the card on the home page. Thumbnails should be square (height:width ratio of `1:1`) and a suggested dimension of 150 x 150 pixels. They will be specified using a frontmatter variable as follows:

```yaml
...
thumbnail: "images/2020-04/capv-overview/thumbnail.jpg"
...
```

The thumbnail image will take precedence on opengraph share tags if the [shareImage](#share-image) parameter is not specified.

#### Article featured image

Each article can specify an image that appears at the top of the content. When sharing the blog article on social media, if a thumnail is not specified, the featured image will be used as a fallback on opengraph share tags.

```yaml
...
featureImage: "images/2020-04/capv-overview/featured.jpg"
...
```

#### Share Image

Sometimes, you want to explicitly set the image that will be used in the preview when you share an article on social media. You can do so in the front matter.

```yaml
...
shareImage = "images/theImageToBeUsedOnShare.png"
...
```

Note that if a share image is not specified, the order of precedence that will be used to determine which image applies is `thumbnail` => `featureImage` => `fallbackOgImage`. When sharing a link to the home page address of the site (as opposed to a specific article), the `fallbackOgImage` will be used.

#### Align logo

You can left align or center your site's logo.

```yaml
...
centerLogo = true # Change to false to align left
...
```

If no logo is specified, the title of the site will appear in its place.

### Code

#### Display line numbers

Choose whether to display line numbers within a code block globally with the parameter `codeLineNumbers` setting to `true` or `false`.

```yaml
[params]
...
codeLineNumbers = true # Shows line numbers for all code blocks globally.
...
```

#### Limit code block height

You can globally control the number of lines which are displayed by default for your code blocks. Code which has the number of lines exceed this value will dynamically cause two code block expansion buttons to appear, allowing the user to expand to full length and contract. This is useful when sharing code or scripts with tens or hundreds of lines where you wish to control how many are displayed. Under params in `config.toml` file, add a value as follows:

```yaml
[params]
...
codeMaxLines = 10 # Maximum number of lines to be shown by default across all articles.
...
```

> If the value already exists, change it to the desired number. This will apply globally.

If you need more granular control, this parameter can be overridden at the blog article level. Add the same value to your article frontmatter as follows:

```yaml
...
codeMaxLines = 15 # Maximum number of lines to be shown in code blocks in this blog post.
...
```

If `codeMaxLines` is specified both in `config.toml` and in the article frontmatter, the value specified in the article frontmatter will apply to the given article. In the above example, the global default is `10` and yet the article value is `15` so code blocks in this article will auto-collapse after 15 lines.

If `codeMaxLines` is not specified anywhere, an internal default value of `100` will be assumed.

### Table of contents

Each article can optionally have a table of contents (TOC) generated for it based on top-level links. By configuring the `toc` parameter in the article frontmatter and setting it to `true`, a TOC will be generated only for that article. The TOC will then render under the featured image.

### Table of contents (TOC) example

![Article table of contents](https://github.com/chipzoller/hugo-clarity/blob/master/images/article-toc.png)

### Custom CSS and JS

To minimize HTTP requests per page, we would recommend loading CSS styles and JavaScript helpers in single bundles. That is to say, one CSS file and one JavaScript file. Using Hugo minify functions, these files will be minified to optimize the size.

Going by the above 👆🏻 reason, we recommend adding custom CSS and JS via [this custom SASS file](https://github.com/chipzoller/hugo-clarity/blob/master/assets/sass/_custom.sass) and [custom JavaScript file](https://github.com/chipzoller/hugo-clarity/blob/master/assets/js/custom.js).

However, sometimes you may need to load additional style or script files. In such cases, you can add custom `.css` and `.js` files by listing them in the `config.toml` file (see the snippet below). Similar to images, these paths should be relative to the `static` directory.

```yaml
[params]
...
customCSS = ["css/custom.css"] # Include custom CSS files
customJS = ["js/custom.js"] # Include custom JS files
...
```

> __Pro Tip__: You can change the theme colors via the [this variable's SASS file](https://github.com/chipzoller/hugo-clarity/blob/master/assets/sass/_variables.sass)

### Forcing light or dark mode

By default, sites authored using Clarity will load in the browser with the user's system-wide settings. I.e., if the underlying OS is set to dark mode, the site will automatically load in dark mode. Regardless of the default mode, a UI control switch exists to override the theme mode at the user's discretion.

In order to override this behavior and force one mode or another, add either `enforceLightMode` or `enforceDarkMode` to your `config.toml` file. If neither value is present, add it.

To enforce Light Mode by default, turn `enforceLightMode`  to `true`.

To enforce Dark Mode by default, turn `enforceDarkMode`  to `true`

```yaml
[params]
...
enforceLightMode = true # Force the site to always load in light mode.
...
```

Please note that you cannot enforce both modes at the same time. It wouldn't make sense, would it?

> ⚠️ Please also note that the mode toggle UI will remain in place. That way, if a user prefers dark mode, they can have their way. The best of both worlds.

### I18N

This theme supports Multilingual (i18n / internationalization / translations)

The `exampleSite` gives you some examples already.
You may extend the multilingual functionality by following the [official documentation](https://gohugo.io/content-management/multilingual/).

Things to consider in multilingual:
- **supported languages** are configured in [config/_default/languages.toml](./exampleSite/config/_default/languages.toml)
- **add new language support** by creating a new file inside [i18n](./i18n/) directory.
  Check for missing translations using `hugo server --i18n-warnings`
- **taxonomies** names (tags, categories, etc...) are translated in [i18n](./i18n/) as well (translate the key)
- **menus** are translated manually in the config files [config/_default/menus/menu.xx.toml](./exampleSite/config/_default/menus/)
- **menu's languages list** are semi-hardcoded. You may chose another text for the menu entry with [languageMenuName](./exampleSite/config.toml). Please, do better and create a PR for that.
- **content** must be translated individually. Read the [official documentation](https://gohugo.io/content-management/multilingual/#translate-your-content) for information on how to do it.

