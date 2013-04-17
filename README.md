# Adopt

**If you seek consistent typography across all screen sizes, Adopt is for you.** It's a simple jQuery plugin that removes
[orphans](http://www.fonts.com/content/learning/fontology/level-2/text-typography/rags-widows-orphans)
from your elements.

### Usage

Include the jQuery library (version 1.8 or newer) and the adopt.min.js
plugin file, *preferably* at the bottom of the page before the closing `</body>` tag.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="jquery.adopt.min.js"></script>
<script>
  // To remove orphans from all headings.
  $('h1, h2, h3, h4, h5, h6').adopt();

  // To remove orphans from all article paragraphs.
  $("article p").adopt();
</script>
```

### How it works

Adopt.coffee keeps orphans from forming by placing a <code>\&nbsp;</code> HTML entity
between the last two words. This keeps them together when the
window resizes, ensuring no word is ever alone.
