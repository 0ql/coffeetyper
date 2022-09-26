# Coffeetyper Reloaded

This is a prerelease of a rewrite of [Coffeetyper](https://coffeetyper.com) based on the inner workings of [Watertyper](https://benjaminaster.com/watertyper) and highly focused on performance during and after pageload.
The design and featureset will stay mostly the same.
It is written in pure vanilla HTML, CSS and JS.

## Roadmap

(Sorted in no specific order)

- Interaction
	- [x] Explicitly mark `Enter` and `Tab`
	- [x] `Ctrl` + `Backspace`
- Text Gen
	- [x] Custom wordset
	- [x] Type out file
	- [x] Uppercase first, all or random char
	- [x] Support 10+ langs (inc. toki pona & esperanto)
- Stats
	- [x] WPM (word len 5), real WPM
	- [x] LPM
	- [x] All time avg. and median
	- [x] Save performance of every round to analyse improvement over time
- Customisation
	- [x] Use Local and Google fonts
	- [x] Adjust line height, letter spacing, text alignment, textbox margins
	- [ ] Themes
- Added Features
	- [x] Save settings in localstorage
	- [x] Cache all files
	- [x] PWA with Background Sync
	- [ ] Randomize settings
	- [ ] render a keyboard with the given layout
	- [ ] emulate keyboard layout

## Why rewrite?

Mostly because I wasn't content with the performance when typing out over ~300 words nor the codebase in the original version written in svelte.
This version aims to improve the DOM size and insure high performance up to 2.000 words.

## Themes

Copyright goes applies to all files included within the `themes` folder.
They are used within the terms, conditions and limitations of the GNU General Public License Version 3.

## License

[GNU General Public License Version 3](https://www.gnu.org/licenses/gpl-3.0.en.html)
