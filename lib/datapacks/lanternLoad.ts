// A faithful implementation of https://github.com/LanternMC/load for Vanilla Tweaks.

import { BasePath, scoreboard } from 'sandstone';
import withVT from 'lib/datapacks/withVT';

const lanternLoad = withVT(
	BasePath({ namespace: 'load' })
);

export const loadTag = lanternLoad.Tag('functions', 'load');

lanternLoad.Tag('functions', '_private/load', [
	lanternLoad.Tag('functions', '_private/init', [
		lanternLoad.MCFunction('_private/init', () => {
			// Reset scoreboards so packs can set values accurate for current load.
			scoreboard.objectives.add('load.status', 'dummy');
			scoreboard.players.reset('*', 'load.status');
		})
	]),
	{ id: lanternLoad`pre_load`, required: false },
	{ id: loadTag, required: false },
	{ id: lanternLoad`post_load`, required: false }
], {
	runOnLoad: true
});