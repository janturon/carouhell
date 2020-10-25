# Carouhell

Tiny, lightweight, simple? Every carousel on the internet bragging with these attributes have hundreds of kilobytes source code! Here, with HELL licence, the source code is ALWAYS 666 bytes, no more, no less. If one needs more to express some universal functionality, it simply means that his thoughts behind the code aren't clean enough and he will GO TO HELL for this sin. In this case, I separated CSS into only 333 bytes long code, but if you are orthodox devilish coder, feel free to include it twice. Let's see the hello world code:

```
<link rel="stylesheet" type="text/css" href="src/carouhell.css">
<script src="src/carouhell.js"></script>
<style>
.carouhell { width: 200px; height: 200px; }
.carouhell li { transition: 400ms; }
</style>

<ul class="carouhell" data-stay="4000">
  <li><img src="assets/img1.jpg">
  <li><a href="#"><img src="assets/img2.jpg"></a>
</ul>
```

The carouhell parent element should be restricted to some reasonable size (it can be limited also indirectly by parent container). In the `data-stay` attribute you set the time in milliseconds: how long should each item stay (meaningful if more than one `<li>` children are present). In the `<li>` elements, you can optionally set CSS transition for effect. The rotation is circular and happens from right to left as it is takes a single command to implement: `u.appendChild(u.firstElementChild)`

## Two unique much desired features that other carousels lack

- **You can generate the HTML code by AJAX later, or add/remove `<li>` items on the fly, the carouhell will be working as expected.** The functionality is provided by `MutationObserver`.
- **You don't have to load the functionality that you don't need.** There are extensions, each 666 bytes long, of course. Load them after the carousel.js is loaded in any order if you need the features. You can also combine it with hellbox.


## Buttons extension

`carouhell-buttons.js` extension uses `data-` container attributes containing id of button which adds corresponding functionality. Here is the example of left and right buttons:

```
<link rel="stylesheet" type="text/css" href="carouhell.css">
<script src="carouhell.js"></script>
<script src="carouhell-buttons.js"></script>
<style>
  .carouhell { width: 200px; height: 200px; }
  .carouhell li { transition: 400ms; }
</style>

<ul class="carouhell" data-autoplay="4000" data-left="btnLeft" data-right="btnRight">
  <li><img src="img1.jpg">
  <li><a href="#"><img src="img2.jpg"></a>
</ul>
<button id="btnLeft">Left</button>
<button id="btnRight">Right</button>
```

The list of supported buttons are:

 - **data-left** Shifts carousel leftwards if more than 1 `<li>` is present in the container; pauses animation
 - **data-right** Same, but shifts it rightwards
 - **data-pause** Pauses animation
 - **data-play** Resumes animation paused by other buttons. If *data-autoplay* is not present, it defaults to 4000 (4s)

This extension also provides handler functions:

 - **ulElement.left()** Shifts the carousel leftwards, doesn't pause animation, if any
 - **ulElement.right()** Same, but shifts rightwards
 - **ulElement.play(T)** Plays animation with interval of `T` milliseconds. If `T` is null, take the data-autoplay attribute. If not found, set the interval to 4000 ms
 - there is no `pause` function, but you can call **clearInterval(ulElement.t)** to pause the animation from client code

## Stripe extension

`carouhell-stripe` extension uses `data-stripe` container attribute to identify the id of target block element in which is generated an empty `b` element for each `li` item in the container. "Active" `b` element (with position corresponding to displayed `li` item) is assigned with class `active`. It is up to you to create relevant css like in the example below:

```
<link rel="stylesheet" type="text/css" href="carouhell.css">
<script src="carouhell.js"></script>
<script src="carouhell-stripe.js"></script>
<style>
  .carouhell { width: 200px; height: 200px; }
  .carouhell li { transition: 400ms; }

  #hellstripe { border: 1px solid black; display: inline-block; }
  #hellstripe b::before { content: '•'; }
  #hellstripe b.active::before { color: red; }
</style>

<ul class="carouhell" data-autoplay="4000" data-stripe="hellStripe">
  <li><img src="img1.jpg">
  <li><a href="#"><img src="img2.jpg"></a>
</ul>
<div id="hellStripe"></div>
```
You may also provide a `u.stripeGenerator(li)` method, which is used to create elements inside the stripe for every `li` in the list. The method should return a `b` element in the stripe.

The extension allows you to register `u.stripeShifted(li,i)` event which fires anytime the stripe (and thus the carouhell itself) changes the active image.

You may shift to any item in the list by calling `u.shiftTo(index)` method.

## Events extension

`carouhell-events.js` extension gives you following events:

- **ulElement.effectStart(left)** defines the start of transition effect, where left is true iff the rotation is leftwards. The first `li` is the one that is going to go away. The default behaviour is rotation, just like without this extension. The `li` that is going to appear can be referenced as `left? this.children[1] : this.lastElementChild`.
- **ulElement.effectEnd(left)** analogous to `effectStart()`, this one defines the end of transition efect. By the time of its call, the first `li` is the one that replaced the `li` that went away. The old one can be referenced as `left? this.lastElementChild : this.children[1]`.
- **ulElement.onPause()** fires before the animation is paused
- **ulElement.onPlay()** fires before the animation is resumed

## Media CSS extendion

`carouhell-mediacss.js allows reaction on CSS media changes. This comes handy if one needs to display unfolded list of pictures for desktops and pack them in carousel if the viewport width drops below some width. To listen to media change event, this extension places an invisible div after its list and listens to `ontransitionend` event hooked to opacity. In your css, you need to place something like

```
@media (max-width: 900px) {
	.carouhell+.css { opacity: 0.9 }
}
```
To make it work, you also need to define `carouhell.mediaCSS(u,o)` method, which will be called anytime the media resolution changes for every registered carouhell list (the `u` parameter), feeding the opacity in the `o` parameter. Oftentimes you need to display unfolded list by default and later turn it into carouhell. If you add a `carouhell` css class to the list, you also need to call the `carouhell(u)` function to add the carouhell functionality. It is easier to use `carouhell-media.css` instead of original `carouhell.css` and add `off` class to the carouhell list. This adds the functionality on page load, but doesn't apply the styles. To apply them, simply remove the `off` class (or add back it to remove the carouhell styles again).

## Your own extension

Feel free to write your own extension using some pattern to extend the global `carouhell` function. Just remember to keep the extension length at 666 bytes, or else! I use this pattern:
```
carouhell = (f => u => { f(u)
  // u is the parent ul container here
})(carouhell);
```
The `carouhell(u)` function will be called for every `ul` with carouhell class including those added later by AJAX. Your extension should be aware that the `li`s inside are subject to potential runtime change.

Oh, and of course it needs to be vanilla javascript. Any "universal JS library" means only one thing: the author doesn't understand the language, so he needs to create "helper" to express his thoughts in JS. For this sin, he will GO TO HELL.

# Carouhell Reference

## data attributes

- `data-stay="number"` **basic** time (in milliseconds) to keep the picture before sliding to next one. If not provided, it defaults to 4000. Basic carouhell autoplays rotation and stops it on mouse over. To control it programatically, use the `t` element member.
- `data-load="JS code"` **basic** code that will be executed after the carouhell and all its extensions (if any) is loaded. This event happens once: right after the DOM is loaded (if the carouhell is present by the time) or right after the carouhell is added to the DOM. `this` evaluates as the root `ul` element of the carouhell. sample code: `data-load="console.log(this.firstElementChild)"`

## element members

In the snippets below, `ul` is considered the root carouhell element, obtainable by standard DOM search functions like `getElementById`

- `t` number **basic** stores timer ID for the autoplay rotation. To stop it, call `clearInterval(ul.t)`. To play it again, use `u.t = setInterval(u.dataset.stay)`. If you write your own extension, use this timer ID only, so other extension can control the animation, too.
- `carouhell(ul)` function **basic** is called right after the `ul` is registered by the DOM. Needed to write your own extension