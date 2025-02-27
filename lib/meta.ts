// Loads the pack's metadata to be imported from a module.

import path from 'path';
import fs from 'fs-extra';

const packDirectory = path.join(
	process.cwd(),
	process.argv[process.argv.length - 1]
);

const lastSlashIndex = packDirectory.lastIndexOf(path.sep);

export const gameVersion = packDirectory.slice(
	packDirectory.lastIndexOf(path.sep, lastSlashIndex - 1) + 1,
	lastSlashIndex
);

export const namespace = packDirectory.slice(lastSlashIndex + 1);

export const { title, version, listed }: {
	// This is `title` and not `name` because assigning a `name` property to a `BasePath` throws an error from assigning to the read-only function property `name`.
	title: string,
	version: string,
	listed: boolean
} = JSON.parse(fs.readFileSync(path.join(packDirectory, 'pack.json'), 'utf8'));