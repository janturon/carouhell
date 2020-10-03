# Carouhell

Tiny, lightweight, simple? Every carousel on internet bragging with these attributes have hundreds of kilobytes source code! Here, with HELL licence, the source code is ALLWAYS 666 bytes, no more, no less. If one needs more to express some universal functionality, it simply means that his thoughts behind the code aren't clean enough and he will GO TO HELL for this sin. In this case, I separated CSS into only 333 bytes long code, but if you are orthodox devilish coder, feel free to include it twice. Let's see the hello world code:

```
<link rel="stylesheet" type="text/css" href="src/carouhell.css">
<script src="src/carouhell.js"></script>
<style>
.carouhell { width: 200px; height: 200px; }
.carouhell li { transition: 400ms; }
</style>

<ul class="carouhell" data-autoplay="4000">
  <li><img src="assets/img1.jpg">
  <li><a href="#"><img src="assets/img2.jpg"></a>
</ul>
```

The carouhell parent element should be restricted to some reasonable size (it can be limited also indirectly by parent container). In the `data-autoplay` attribute you set the time in milliseconds how long should each item stay. In the `<li>` elements, you can optionally set transition for effect.

**You can also generate the HTML code by AJAX later, or add/remove `<li>` items on the fly, the carouhell will be working as expected.** The functionality is provided by `MutationObserver`. I could stuff more in the 666 bytes, but I didn't want to abandon proper indentation, so there are extensions, each 666 bytes long, of course. Load them after the carousel.js is loaded in any order.

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
<div id="hellstripe"></div>
```

## Your own extension

Feel free to write your own extension using some pattern to extend the global `carouhell` function. Just remember to keep the extension length at 666 bytes, or else! I use this pattern:
```
(function(C) {C=carouhell
carouhell=function(u) {C(u)
  // u is the parent ul container here
}
})();
```
The `carouhell(u)` function will be called for every `ul` with carouhell class including those added later by AJAX. Your extension should be aware that the `li`s inside are subject to potential runtime change.

