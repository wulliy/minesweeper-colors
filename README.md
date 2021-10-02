# minesweeper-colors
Apply custom presets and themes to Google's Minesweeper.

This script allows you to customize the colos of the game and even apply presets or add presets of your own or others.

To use the script, you can first open up the console by pressing F12 or CTRL + Shift + I in order and clicking on the "Console" tab. Then, run the code from either `colors.js` or `colors.min.js`.

If you want to quickly load up the script, you can save the code below as a [bookmarklet](https://www.google.com/search?q=bookmarklet).
```js

javascript:fetch(%22https%3A%2F%2Fraw.githubusercontent.com%2Fwulliy%2Fminesweeper-colors%2Fmain%2Fcolors.min.js%22).then(e%3D%3Ee.text()).then(r%3D%3Eeval(r))

```

Once you have the script loaded, you can use one of the default presets like a dark theme below.    
```js

if (window.minesweeper) window.minesweeper.presets.applyPreset("dark")

```

Or, if you're using a bookmarklet to save the script, you might as well save this as a bookmarklet so you can have a dark theme with just 2 clicks!

```js

javascript:(()%3D%3E%7Bif(window.minesweeper)window.minesweeper.presets.applyPreset(%22dark%22)%7B()

```

Here are some screenshots of it in action. Enjoy!

![Dark theme](https://github.com/wulliy/minesweeper-colors/blob/main/images/minesweeper%20(1).jpg?raw=true)

![Losing while having a Blue theme](https://github.com/wulliy/minesweeper-colors/blob/main/images/minesweeper%20(2).jpg?raw=true)

###### I'm not actually good at Minesweeper 😅
