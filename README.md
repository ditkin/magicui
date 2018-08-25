This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## TIP
For sane debugging experience, `vim node_modules/react-scripts/config/webpack.config.dev.js` and change `devtool` to `#source-map`.

## Running locally
This is a multiplayer app.

Run `magicapi` with `node index.js`
Run this with `npm start`
Navigate to `localhost:3000`
The BE starts a websocket server which the FE connects to.

The FE automatically tells the BE it wants to play a game. It sends the BE its userId, which the BE ignores by generating a 3-digit UUID and sending it to the FE.

Note: There are a max of 6 UUIDs, meaning the BE only supports 6 concurrent games right now.

The BE creates a waiting room and puts the FE client in it.

Now go to a new tab and navigate to `localhost:3000`. The new session should connect to the BE on startup and the BE will pair the new session with the first one into a room.

This should start a game.
