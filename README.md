This repo contains the extra examples I've added to my previous post <a href="https://blog.mehraban.com.au/2018/01/17/multi-language-angular-applications/">here</a>.

<h2>More goodies</h2>
Based on one of the comments I got from <strong><em>Andreas Löw</em></strong> from <strong><em>CodeAndWeb GmbH</em></strong>, just wanted to introduce some tools you can use alongside <code>ngx-translate</code> which makes your day perfect.
<h3>A pluralisation plugin</h3>
First one is an npm package called <a href="https://www.npmjs.com/package/ngx-translate-messageformat-compiler">ngx-translate-messageformat-compiler</a> which allows you to compile translations using <em>ICU syntax</em> for handling pluralization and gender.
<blockquote><a href="http://userguide.icu-project.org/formatparse/messages" rel="nofollow">ICU Message Format</a> is a standardized syntax for dealing with the translation of user-visible strings into various languages that may have different requirements for the correct declension of words (e.g. according to number, gender, case) - or to simplify: pluralization.</blockquote>
The complete guide can be found in their <a href="https://github.com/lephyrus/ngx-translate-messageformat-compiler">Github repository</a> but to quickly show you how it can help you (I will skip the setup part as you can find it in the <a href="https://github.com/YAdelMehraban/ngx-translate-tools">code repository on my GitHub</a>).

Imagine you want to show a list of different categories of cats with their count on your web site which presumably helps a pet shop to show case what their current inventory is. here is how HTML will look like:
<pre class="lang:xhtml decode:true ">&lt;ul&gt;
  &lt;li *ngFor="let cat of cats"&gt;
    &lt;span translate [translateParams]="{ Count: cat.count, category: cat.category }"&gt;CATS&lt;/span&gt;.
  &lt;/li&gt;
&lt;/ul&gt;</pre>
In your component you will have a list of cats categories and their count:
<pre class="lang:js decode:true">cats = [
    {
      count: 1,
      category: 'Aegean'
    },
    {
      count: 0,
      category: 'American'
    },
    {
      count: 4,
      category: 'Lykoi'
    }
  ];</pre>
And finally in your <code>json</code> file:
<pre class="lang:js decode:true">{
    "CATS": "There {Count, plural, =0{are no {category} cats} one{is one {category} cat} other{are # {category} cats}}"
}</pre>
No when you run your app you will see the list like this:

<img class="alignnone size-medium wp-image-304" src="https://blog.mehraban.com.au/wp-content/uploads/2018/01/cats-300x107.png" alt="" width="300" height="107" />

