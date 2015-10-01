# Personal Dashboard
This is my personal dashboard displaying live information. Made for a screen with a 1080p resolution.

## Todo
- [ ] Todo-list
- [ ] Remote-updatable phrase
- [ ] Twitter feed
- [X] Website auto-updating
- [x] Clock
- [x] Weather (today and tomorrow)
- [x] Email
- [x] Calendar
- [x] Live updating

## How to run
On your remote server, in this case the Raspberry Pi:

| App | Command | Task|
|-----|---------|-----|
| Term 1 | `cd Live-Dashboard && node update.js` | Check for and download update |
| Term 2 | `cd Live-Dashboard/dist && grunt watch` | Live reload |
| Browser | http://localhost/dashboard/dist/ | Display dashboard |


## Notes
- To push an update, change the version in the main `package.json` file.
- `update.js` file is not included in the update script: manual updating required.
