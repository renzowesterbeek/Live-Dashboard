# Personal Dashboard
This is my personal dashboard displaying live information. Made for a screen with a 1080p resolution.

## Todo
- [ ] Todo-list
- [ ] Website auto-updating
- [ ] Twitter feed
- [x] Clock
- [x] Weather (today and tomorrow)
- [x] Email
- [x] Calendar
- [x] Live updating

## How to run
On your remote server, in this case the Raspberry Pi:
- Term 1: `cd dashboard && node update.js`
- Term 2: `cd dashboard && grunt watch`
- Term 3: `cd dashboard/dist && grunt watch`
- Browser: http://localhost/dashboard/dist/


## Notes
- To push an update, change the version in the main `package.json` file.
- `update.js` file is not included in the update script: manual updating required.
