/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import './editor.scss';

/**
 * Internal dependencies
 */
import joinUsBannerEdit from './join-us-banner/edit';
import joinUsBannerSave from './join-us-banner/save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType('ideas-factory/join-us-banner', {
	/**
	 * @see ./join-us-banner/edit.js
	 */
	edit: joinUsBannerEdit,
	/**
	 * @see ./join-us-banner/save.js
	 */
	save: joinUsBannerSave,
});

/**
 * Internal dependencies
 */
import headerEdit from './header/edit';
import headerSave from './header/save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType('ideas-factory/header', {
	/**
	 * @see ./header/edit.js
	 */
	edit: headerEdit,
	/**
	 * @see ./header/save.js
	 */
	save: headerSave,
});
